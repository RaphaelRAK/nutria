'use client';

import { useEffect } from 'react';

interface ElevenLabsWidgetProps {
  agentId: string;
}

export default function ElevenLabsWidget({ agentId }: ElevenLabsWidgetProps) {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://elevenlabs.io/convai-widget/index.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <elevenlabs-convai agent-id={agentId}></elevenlabs-convai>
  );
} 