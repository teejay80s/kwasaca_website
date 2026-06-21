import { Resend } from 'resend'
import { escapeHtml } from '@/lib/utils'

export const resend = new Resend(process.env.RESEND_API_KEY!)

const FROM = process.env.RESEND_FROM_EMAIL || 'noreply@kwasaca.kw.gov.ng'
const TO   = process.env.RESEND_TO_EMAIL   || 'info@kwasaca.kw.gov.ng'

export async function sendResearchNotification(data: {
  title: string; author: string; institution: string; category: string; email: string
}) {
  return resend.emails.send({
    from: FROM, to: TO,
    subject: `[KWASACA] New Research Submission: ${escapeHtml(data.title)}`,
    html: `
      <h2>New Research Submission Received</h2>
      <table style="border-collapse:collapse;width:100%">
        <tr><td style="padding:8px;border:1px solid #ddd"><strong>Title</strong></td><td style="padding:8px;border:1px solid #ddd">${escapeHtml(data.title)}</td></tr>
        <tr><td style="padding:8px;border:1px solid #ddd"><strong>Author</strong></td><td style="padding:8px;border:1px solid #ddd">${escapeHtml(data.author)}</td></tr>
        <tr><td style="padding:8px;border:1px solid #ddd"><strong>Institution</strong></td><td style="padding:8px;border:1px solid #ddd">${escapeHtml(data.institution)}</td></tr>
        <tr><td style="padding:8px;border:1px solid #ddd"><strong>Category</strong></td><td style="padding:8px;border:1px solid #ddd">${escapeHtml(data.category)}</td></tr>
        <tr><td style="padding:8px;border:1px solid #ddd"><strong>Contact</strong></td><td style="padding:8px;border:1px solid #ddd">${escapeHtml(data.email)}</td></tr>
      </table>
      <p>Log in to the admin dashboard to review this submission.</p>
    `,
  })
}

export async function sendComplaintNotification(data: {
  name: string; category: string; subject: string; email: string
}) {
  return resend.emails.send({
    from: FROM, to: TO,
    subject: `[KWASACA] New Complaint: ${escapeHtml(data.subject)}`,
    html: `
      <h2>New Complaint/Contact Received</h2>
      <table style="border-collapse:collapse;width:100%">
        <tr><td style="padding:8px;border:1px solid #ddd"><strong>From</strong></td><td style="padding:8px;border:1px solid #ddd">${escapeHtml(data.name)}</td></tr>
        <tr><td style="padding:8px;border:1px solid #ddd"><strong>Email</strong></td><td style="padding:8px;border:1px solid #ddd">${escapeHtml(data.email)}</td></tr>
        <tr><td style="padding:8px;border:1px solid #ddd"><strong>Category</strong></td><td style="padding:8px;border:1px solid #ddd">${escapeHtml(data.category)}</td></tr>
        <tr><td style="padding:8px;border:1px solid #ddd"><strong>Subject</strong></td><td style="padding:8px;border:1px solid #ddd">${escapeHtml(data.subject)}</td></tr>
      </table>
      <p>Log in to the admin dashboard to respond.</p>
    `,
  })
}

export async function sendReplyNotification(to: string, name: string, replyText: string, subject: string) {
  const safeName = escapeHtml(name)
  const safeReply = escapeHtml(replyText)
  const safeSubject = escapeHtml(subject)
  return resend.emails.send({
    from: FROM, to,
    subject: `Re: ${safeSubject} -- KWASACA`,
    html: `
      <h2>Response to Your Complaint</h2>
      <p>Dear ${safeName},</p>
      <p>Your complaint regarding <strong>${safeSubject}</strong> has received a response from the KWASACA team:</p>
      <blockquote style="border-left:4px solid #14532d;padding:12px 16px;margin:16px 0;background:#f0fdf4;border-radius:8px;color:#374151;">
        ${safeReply}
      </blockquote>
      <p>If you have further questions, please feel free to reach out to us.</p>
      <p>Regards,<br>KWASACA Support Team</p>
    `,
  })
}

export async function sendAcknowledgement(to: string, name: string, type: 'research' | 'complaint') {
  const safeName = escapeHtml(name)
  const subject = type === 'research'
    ? 'Research Submission Received -- KWASACA'
    : 'Your Message Has Been Received -- KWASACA'
  const body = type === 'research'
    ? `Dear ${safeName},<br><br>Thank you for submitting your research to KWASACA. Our technical team will review your submission within 6-8 weeks and get back to you with feedback.<br><br>Regards,<br>KWASACA Team`
    : `Dear ${safeName},<br><br>Thank you for reaching out to KWASACA. We have received your message and will respond within 3-5 working days.<br><br>Regards,<br>KWASACA Team`
  return resend.emails.send({ from: FROM, to, subject, html: `<p>${body}</p>` })
}
