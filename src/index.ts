import { checkReadyState, initScript, executeContentsquareCommand } from './utils';
import type { InitOpts } from './utils';

type UserInfo = Record<string | number, string | number | Date | boolean>;

const Contentsquare = {
  init: (contentsquareId: number, contentsquareVersion: number, opts?: InitOpts): boolean => {
    try {
      initScript(contentsquareId, contentsquareVersion, opts);
      return true;
    } catch (error) {
      console.error('Error:', error);
      return false;
    }
  },
  event: (actionName: string): boolean => {
    try {
      executeContentsquareCommand('event', actionName);
      return true;
    } catch (error) {
      console.error('Error:', error);
      return false;
    }
  },
  identify: (userId: string | null, userInfo: UserInfo): boolean => {
    try {
      executeContentsquareCommand('identify', userId, userInfo);
      return true;
    } catch (error) {
      console.error('Error:', error);
      return false;
    }
  },
  stateChange: (relativePath: string): boolean => {
    try {
      executeContentsquareCommand('stateChange', relativePath);
      return true;
    } catch (error) {
      console.error('Error:', error);
      return false;
    }
  },
  isReady: checkReadyState,
};

export default Contentsquare;
