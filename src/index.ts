import { checkReadyState, initScript, executeHotjarCommand } from './utils';

type UserInfo = Record<string | number, string | number | Date | boolean>;

const Hotjar = {
  init: (hotjarId: number, hotjarVersion: number): boolean => {
    try {
      initScript(hotjarId, hotjarVersion);
      return true;
    } catch (error) {
      console.error('Error:', error);
      return false;
    }
  },
  event: (actionName: string): boolean => {
    try {
      executeHotjarCommand('event', actionName);
      return true;
    } catch (error) {
      console.error('Error:', error);
      return false;
    }
  },
  identify: (userId: string | null, userInfo: UserInfo): boolean => {
    try {
      executeHotjarCommand('identify', userId, userInfo);
      return true;
    } catch (error) {
      console.error('Error:', error);
      return false;
    }
  },
  stateChange: (relativePath: string): boolean => {
    try {
      executeHotjarCommand('stateChange', relativePath);
      return true;
    } catch (error) {
      console.error('Error:', error);
      return false;
    }
  },
  isReady: checkReadyState,
};

export default Hotjar;
