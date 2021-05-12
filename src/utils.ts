interface WindowWithHotjar extends Window {
  hj?: (method: string, ...data: unknown[]) => void;
}

declare const window: WindowWithHotjar;

const hasWindow = () => typeof window !== 'undefined';

const appendScript = (scriptText: string, scriptId: string): boolean => {
  try {
    const existingScript = document.getElementById(scriptId) as HTMLScriptElement;
    const script = existingScript || document.createElement('script');
    script.id = scriptId;
    script.innerText = scriptText;
    script.crossOrigin = 'anonymous';

    document.head.appendChild(script);

    return true;
  } catch {
    return false;
  }
};

export function initScript(hotjarId: number, hotjarVersion: number): boolean {
  if (!hasWindow()) {
    return false;
  }

  const hotjarScriptCode = `(function(h,o,t,j,a,r){h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};h._hjSettings={hjid:${hotjarId},hjsv:${hotjarVersion}};a=o.getElementsByTagName('head')[0];r=o.createElement('script');r.async=1;r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;a.appendChild(r);})(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`;
  const isAppended = appendScript(hotjarScriptCode, 'hotjar-init-script');

  if (isAppended && hasWindow && window.hj) {
    return true;
  }

  throw Error('Failed to initialize Hotjar tracking script.');
}

export function checkReadyState(): boolean {
  if (hasWindow() && window.hj) {
    return true;
  }

  return false;
}
