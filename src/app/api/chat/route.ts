import { ModelFusionTextStream, asChatMessages } from '@modelfusion/vercel-ai';
import { Message, StreamingTextResponse } from 'ai';
import { ollama, streamText } from 'modelfusion';

export const runtime = 'edge';

export async function POST(req: Request) {
  const { messages }: { messages: Message[] } = await req.json();

  const textStream = await streamText({
    model: ollama
      .ChatTextGenerator({
        model: 'gemma',
        api: ollama.Api({
          baseUrl: { protocol: 'http', host: 'DESKTOP-7GVM1F7.local' },
        }),
      })
      .withChatPrompt(),
    prompt: {
      system: '',
      messages: asChatMessages(messages),
    },
  });

  return new StreamingTextResponse(ModelFusionTextStream(textStream));
}
