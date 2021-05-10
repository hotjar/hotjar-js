import { checkReadyState, initScript } from './utils';

const Hotjar = {
  init: (hotjarId: number, hotjarVersion: number): boolean => {
    try {
      initScript(hotjarId, hotjarVersion);

      return true;
    } catch (error) {
      console.error('Hotjar error:', error);

      return false;
    }
  },
  isReady: checkReadyState,
};

export default Hotjar;
