import { NextRequest, NextResponse } from 'next/server'
import { anthropic, buildSystemPrompt } from '@/lib/anthropic'
import { getRelevantContext } from '@/lib/knowledge-base'

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json()
    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
    }

    const lastUserMsg = messages.filter((m: any) => m.role === 'user').pop()?.content || ''
    const context = getRelevantContext(lastUserMsg)
    const systemPrompt = buildSystemPrompt(context)

    const response = await anthropic.messages.create({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 1024,
      system: systemPrompt,
      messages: messages.map((m: any) => ({
        role: m.role,
        content: m.content,
      })),
    })

    const message = response.content[0].type === 'text'
      ? response.content[0].text
      : 'I apologize, I could not generate a response. Please try again.'

    return NextResponse.json({ message })
  } catch (error: any) {
    console.error('Chat API error:', error)

    if (error?.status === 401 || error?.message?.includes('401')) {
      return NextResponse.json(
        { error: 'AI service configuration error. Please contact the site administrator.' },
        { status: 500 }
      )
    }

    if (error?.status === 429 || error?.message?.includes('429')) {
      return NextResponse.json(
        { error: 'AI service is temporarily busy. Please try again shortly.' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { error: 'Failed to get response from AI assistant. Please try again or contact KWASACA directly.' },
      { status: 500 }
    )
  }
}
