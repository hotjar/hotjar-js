type HotjarCommand = 'event' | 'identify' | 'stateChange';

export type InitOpts = {
  debug?: boolean
};

export interface WindowWithHotjar extends Window {
  hj?: (method: HotjarCommand, ...data: unknown[]) => void;
}

declare const window: WindowWithHotjar;

const hasWindow = () => typeof window !== 'undefined';

export const checkReadyState = (): boolean => {
  if (hasWindow() && window.hj) {
    return true;
  }

  return false;
};

export const executeHotjarCommand = (command: HotjarCommand, ...args: unknown[]): void => {
  if (hasWindow() && window.hj) {
    return window.hj(command, ...args);
  }

  throw Error('Hotjar is not available, make sure init has been called.');
};

const appendScript = (scriptText: string, scriptId: string): boolean => {
  try {
    const existingScript = document.getElementById(scriptId) as HTMLScriptElement;
    const script = existingScript || document.createElement('script');
    script.id = scriptId;
    script.nonce = scriptId;
    script.innerText = scriptText;
    script.crossOrigin = 'anonymous';

    document.head.appendChild(script);
    return true;
  } catch {
    return false;
  }
};

export const initScript = (
  hotjarId: number,
  hotjarVersion: number, 
  opts?: InitOpts
): void => {
  const isDebug = opts?.debug || false;

  const hotjarScriptCode = `(function(h,o,t,j,a,r){h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};h._hjSettings={hjid:${hotjarId},hjsv:${hotjarVersion},hjdebug:${isDebug}};a=o.getElementsByTagName('head')[0];r=o.createElement('script');r.async=1;r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;a.appendChild(r);})(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`;
  const isAppended = appendScript(hotjarScriptCode, 'hotjar-init-script');
  if (isAppended && checkReadyState()) {
    return;
  }
  throw Error('Failed to initialize Hotjar tracking script.');
};
