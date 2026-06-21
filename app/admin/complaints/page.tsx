"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { formatDate } from "@/lib/utils";
import LoadingSpinner from "@/components/ui/LoadingSpinner";
import type { Complaint, ReplyEntry } from "@/lib/supabase";

//complaint status colors
const statusColor: Record<string, string> = {
  open: "bg-red-pale text-red-warm",
  in_progress: "bg-amber-50 text-amber-600",
  resolved: "bg-green-light text-green-DEFAULT",
};

export default function AdminComplaintsPage() {
  const [complaints, setComplaints] = useState<Complaint[]>([]);
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState<string | null>(null);
  const [replyText, setReplyText] = useState<Record<string, string>>({});
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("/api/admin/complaints")
      .then((r) => r.json())
      .then((data) => {
        setComplaints(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load");
        setLoading(false);
      });
  }, []);

  async function updateComplaint(
    id: string,
    status: string,
    adminReply?: string,
  ) {
    setUpdating(id);
    const body: Record<string, any> = { id };
    if (status) body.status = status;
    if (adminReply !== undefined) body.admin_reply = adminReply;

    const res = await fetch("/api/admin/complaints", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    if (res.ok) {
      const updated = await fetch("/api/admin/complaints");
      if (updated.ok) setComplaints(await updated.json());
      setReplyText((prev) => ({ ...prev, [id]: "" }));
    }
    setUpdating(null);
  }

  function parseReplies(replyJson?: string): ReplyEntry[] {
    if (!replyJson) return [];
    try {
      const parsed = JSON.parse(replyJson);
      if (Array.isArray(parsed)) return parsed;
    } catch {}
    return [{ reply: replyJson, timestamp: "", admin: "" }];
  }

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-green-deep text-white px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link
            href="/admin"
            className="text-white/50 hover:text-white text-xs transition-colors"
          >
            {String.fromCharCode(8592)} Dashboard
          </Link>
          <span className="text-white/30">|</span>
          <span className="font-semibold text-sm">Complaints Inbox</span>
        </div>
        <div className="flex items-center gap-4">
          <button
            onClick={() =>
              fetch("/api/auth/signout", { method: "POST" }).then(
                () => (window.location.href = "/"),
              )
            }
            className="text-xs text-white/50 hover:text-white transition-colors bg-transparent border-0 cursor-pointer"
          >
            Sign Out
          </button>
          <Link
            href="/"
            className="text-xs text-white/50 hover:text-white transition-colors"
          >
            Back to Website
          </Link>
        </div>
      </div>
      <div className="max-w-[1200px] mx-auto px-8 py-10">
        <h1 className="font-serif text-3xl font-semibold text-ink mb-8">
          Complaints and Messages
        </h1>
        {error && (
          <div className="bg-red-pale border border-red-100 text-red-warm text-sm p-4 rounded-xl mb-6">
            {error}
          </div>
        )}
        <div className="space-y-4">
          {complaints.length === 0 && (
            <div className="bg-white border border-gray-200 rounded-2xl p-12 text-center text-gray-400 text-sm font-light">
              No complaints yet
            </div>
          )}
          {complaints.map((c) => (
            <div
              key={c.id}
              className="bg-white border border-gray-200 rounded-2xl p-6 hover:border-green-light transition-all"
            >
              <div className="flex items-start justify-between gap-4 mb-3">
                <div className="flex items-center gap-3">
                  <select
                    value={c.status}
                    onChange={(e) => updateComplaint(c.id, e.target.value)}
                    disabled={updating === c.id}
                    className={
                      "text-[10px] px-2 py-1 rounded font-bold uppercase border-0 cursor-pointer " +
                      (statusColor[c.status] || "bg-gray-100 text-gray-400")
                    }
                  >
                    <option value="open">Open</option>
                    <option value="in_progress">In Progress</option>
                    <option value="resolved">Resolved</option>
                  </select>
                  <span className="text-[10px] bg-gray-100 text-gray-400 px-2 py-1 rounded font-semibold uppercase">
                    {c.category}
                  </span>
                </div>
                <span className="text-xs text-gray-400 font-light flex-shrink-0">
                  {c.created_at
                    ? formatDate(c.created_at)
                    : String.fromCharCode(8212)}
                </span>
              </div>
              <h3 className="font-semibold text-ink mb-1">{c.subject}</h3>
              <p className="text-sm text-gray-500 font-light leading-relaxed mb-3">
                {c.message}
              </p>
              <div className="flex items-center gap-4 pt-3 border-t border-gray-100">
                <div>
                  <span className="text-[11px] text-gray-400 uppercase tracking-wider font-semibold">
                    From:{" "}
                  </span>
                  <span className="text-sm text-gray-600">{c.full_name}</span>
                  <span className="text-sm text-gray-400 ml-2">
                    {String.fromCharCode(183)}
                  </span>
                  <a
                    href={"mailto:" + c.email}
                    className="text-sm text-green-DEFAULT ml-2 hover:underline"
                  >
                    {c.email}
                  </a>
                  {c.phone && (
                    <span className="text-sm text-gray-400 ml-2">
                      {String.fromCharCode(183)} {c.phone}
                    </span>
                  )}
                </div>
              </div>
              {c.admin_reply && parseReplies(c.admin_reply).length > 0 && (
                <div className="mt-4 space-y-3">
                  {parseReplies(c.admin_reply).map((entry, i) => (
                    <div
                      key={i}
                      className="p-3 bg-blue-50 border border-blue-100 rounded-xl"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <p className="text-[11px] font-semibold text-blue-600 uppercase tracking-wider">
                          Admin Reply #{i + 1}
                        </p>
                        {entry.timestamp && (
                          <span className="text-[10px] text-gray-400 font-light">
                            {formatDate(entry.timestamp)}
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-gray-600">{entry.reply}</p>
                    </div>
                  ))}
                </div>
              )}
              <div className="mt-4 flex gap-3">
                <input
                  type="text"
                  placeholder="Type your reply..."
                  value={replyText[c.id] || ""}
                  onChange={(e) =>
                    setReplyText((prev) => ({
                      ...prev,
                      [c.id]: e.target.value,
                    }))
                  }
                  className="input-field flex-1 text-sm"
                />
                <button
                  onClick={() => {
                    if (replyText[c.id]?.trim()) {
                      updateComplaint(c.id, "resolved", replyText[c.id]);
                    }
                  }}
                  disabled={updating === c.id || !replyText[c.id]?.trim()}
                  className="btn-green text-xs px-4 py-2 rounded-lg whitespace-nowrap disabled:opacity-50"
                >
                  {updating === c.id ? "Sending..." : "Send Reply"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
