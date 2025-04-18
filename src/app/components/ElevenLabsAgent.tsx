'use client';

import { useEffect, useState, useRef } from 'react';

const SCRIPT_ID = 'elevenlabs-convai-script';
const WIDGET_ID = 'elevenlabs-convai-widget';

const ElevenLabsAgent = () => {
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const widgetRendered = useRef(false);

  useEffect(() => {
    // Vérifier si le script est déjà chargé
    if (document.getElementById(SCRIPT_ID)) {
      setScriptLoaded(true);
      return;
    }

    // Vérifier si le custom element est déjà défini
    if (customElements.get('elevenlabs-convai')) {
      setScriptLoaded(true);
      return;
    }

    // Chargement du script ElevenLabs
    const script = document.createElement('script');
    script.src = 'https://elevenlabs.io/convai-widget/index.js';
    script.async = true;
    script.type = 'text/javascript';
    script.id = SCRIPT_ID;
    
    script.onload = () => {
      setScriptLoaded(true);
    };
    
    document.body.appendChild(script);

    return () => {
      // Nettoyage lors du démontage du composant
      try {
        const scriptElement = document.getElementById(SCRIPT_ID);
        if (scriptElement && scriptElement.parentNode) {
          scriptElement.parentNode.removeChild(scriptElement);
        }
        
        // Supprimer l'instance du widget si elle existe
        const widgetElement = document.getElementById(WIDGET_ID);
        if (widgetElement && widgetElement.parentNode) {
          widgetElement.parentNode.removeChild(widgetElement);
        }
      } catch (e) {
        console.error("Erreur lors du démontage du script ElevenLabs:", e);
      }
    };
  }, []);

  // Ne rendre le composant que lorsque le script est chargé et s'il n'est pas déjà rendu
  useEffect(() => {
    widgetRendered.current = !!document.querySelector('elevenlabs-convai');
  }, []);

  if (!scriptLoaded || widgetRendered.current) {
    return null;
  }

  return (
    <elevenlabs-convai 
      id={WIDGET_ID}
      agent-id="JAi64ASox10iA1qhPBZ6"
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        zIndex: 1000
      }}
    />
  );
};

export default ElevenLabsAgent; 