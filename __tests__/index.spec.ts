import Hotjar from '../src/index';
import * as utils from '../src/utils';

const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation();
const initSpy = jest.spyOn(utils, 'initScript');
const executeCommandSpy = jest.spyOn(utils, 'executeHotjarCommand');

describe('Hotjar library', () => {
  it('should return methods', () => {
    expect(Hotjar.init).toBeDefined();
    expect(Hotjar.isReady).toBeDefined();
    expect(Hotjar.event).toBeDefined();
    expect(Hotjar.identify).toBeDefined();
    expect(Hotjar.stateChange).toBeDefined();
  });

  describe('init', () => {
    it('should init script and return true', () => {
      initSpy.mockReturnValueOnce(undefined);
      const init = Hotjar.init(123, 1);
      expect(initSpy).toHaveBeenCalled();
      expect(init).toBe(true);
    });
    it('should return false in case of error', () => {
      initSpy.mockImplementationOnce(() => {
        throw Error('error');
      });
      const init = Hotjar.init(123, 1);
      expect(initSpy).toHaveBeenCalled();
      expect(init).toBe(false);
      expect(consoleErrorSpy).toHaveBeenCalled();
    });
  });

  describe('event', () => {
    it('should use event and return true', () => {
      executeCommandSpy.mockReturnValueOnce(undefined);
      const event = Hotjar.event('BugSplat!');
      expect(executeCommandSpy).toHaveBeenCalled();
      expect(event).toBe(true);
    });
    it('should return false in case of error', () => {
      executeCommandSpy.mockImplementationOnce(() => {
        throw Error('error');
      });
      const event = Hotjar.event('BugSplat!');
      expect(executeCommandSpy).toHaveBeenCalled();
      expect(event).toBe(false);
      expect(consoleErrorSpy).toHaveBeenCalled();
    });
  });

  describe('identify', () => {
    it('should use identify and return true', () => {
      executeCommandSpy.mockReturnValueOnce(undefined);
      const identify = Hotjar.identify('321', { foo: 'bar' });
      expect(executeCommandSpy).toHaveBeenCalled();
      expect(identify).toBe(true);
    });
    it('should return false in case of error', () => {
      executeCommandSpy.mockImplementationOnce(() => {
        throw Error('error');
      });
      const identify = Hotjar.identify('321', { foo: 'bar' });
      expect(executeCommandSpy).toHaveBeenCalled();
      expect(identify).toBe(false);
      expect(consoleErrorSpy).toHaveBeenCalled();
    });
  });

  describe('stateChange', () => {
    it('should use stateChange and return true', () => {
      executeCommandSpy.mockReturnValueOnce(undefined);
      const stateChange = Hotjar.stateChange('/my/url');
      expect(executeCommandSpy).toHaveBeenCalled();
      expect(stateChange).toBe(true);
    });
    it('should return false in case of error', () => {
      executeCommandSpy.mockImplementationOnce(() => {
        throw Error('error');
      });
      const stateChange = Hotjar.stateChange('/my/url');
      expect(executeCommandSpy).toHaveBeenCalled();
      expect(stateChange).toBe(false);
      expect(consoleErrorSpy).toHaveBeenCalled();
    });
  });
});
