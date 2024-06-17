type ContentsquareCommand = 'event' | 'identify' | 'stateChange';

export type InitOpts = {
  debug?: boolean;
  nonce?: string;
};

export interface WindowWithContentsquare extends Window {
  hj?: (method: ContentsquareCommand, ...data: unknown[]) => void;
}

declare const window: WindowWithContentsquare;

const hasWindow = () => typeof window !== 'undefined';

export const checkReadyState = (): boolean => {
  if (hasWindow() && window.hj) {
    return true;
  }

  return false;
};

export const executeContentsquareCommand = (
  command: ContentsquareCommand,
  ...args: unknown[]
): void => {
  if (hasWindow() && window.hj) {
    return window.hj(command, ...args);
  }

  throw Error('Contentsquare is not available, make sure init has been called.');
};

const appendScript = (
  scriptText: string,
  scriptId: string,
  nonce: undefined | string = undefined,
): boolean => {
  try {
    const existingScript = document.getElementById(scriptId) as HTMLScriptElement;
    const script = existingScript || document.createElement('script');
    script.id = scriptId;
    script.nonce = nonce;
    script.innerText = scriptText;
    script.crossOrigin = 'anonymous';

    document.head.appendChild(script);
    return true;
  } catch {
    return false;
  }
};

export const initScript = (
  contentsquareId: number,
  contentsquareVersion: number,
  opts?: InitOpts,
): void => {
  const isDebug = opts?.debug || false;

  const contentsquareScriptCode = `(function(h,o,t,j,a,r){h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};h._hjSettings={hjid:${contentsquareId},hjsv:${contentsquareVersion},hjdebug:${isDebug}};a=o.getElementsByTagName('head')[0];r=o.createElement('script');r.async=1;r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;a.appendChild(r);})(window,document,'https://static.contentsquare.com/c/contentsquare-','.js?sv=');`;
  const isAppended = appendScript(
    contentsquareScriptCode,
    'contentsquare-init-script',
    opts?.nonce,
  );
  if (isAppended && checkReadyState()) {
    return;
  }
  throw Error('Failed to initialize Contentsquare tracking script.');
};
