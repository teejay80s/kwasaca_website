import { NextRequest, NextResponse } from 'next/server'
import { getGroq, buildMessages } from '@/lib/groq'
import { getRelevantContext } from '@/lib/knowledge-base'

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json()
    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
    }

    const lastUserMsg = messages.filter((m: any) => m.role === 'user').pop()?.content || ''
    const context = getRelevantContext(lastUserMsg)
    const systemMessages = buildMessages(context)

    const chatMessages: { role: 'system' | 'user' | 'assistant'; content: string }[] = [
      ...systemMessages,
      ...messages.map((m: any) => ({
        role: m.role as 'user' | 'assistant',
        content: m.content,
      })),
    ]

    const response = await getGroq().chat.completions.create({
      model: 'llama-3.3-70b-versatile',
      messages: chatMessages,
      max_tokens: 1024,
    })

    const message = response.choices[0]?.message?.content || 'I apologize, I could not generate a response. Please try again.'

    return NextResponse.json({ message })
  } catch (error: any) {
    console.error('Chat API error:', error)

    if (error?.status === 401 || error?.message?.includes('401') || error?.message?.includes('API key')) {
      return NextResponse.json(
        { error: 'AI service configuration error. Please contact the site administrator.' },
        { status: 500 }
      )
    }

    if (error?.status === 429 || error?.message?.includes('429') || error?.message?.includes('quota') || error?.message?.includes('rate limit')) {
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
