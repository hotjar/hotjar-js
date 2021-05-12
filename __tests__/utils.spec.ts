import { checkReadyState, executeHotjarCommand, initScript } from '../src/utils';
import type { WindowWithHotjar } from '../src/utils';

declare const window: WindowWithHotjar;

const fakeHJ = jest.fn(() => {
  return null;
});

const appendSpy = jest.fn();

describe('Utils', () => {
  describe('checkReadyState', () => {
    afterEach(() => {
      jest.clearAllMocks();
    });
    it('should return false if Hotjar is not initiated', () => {
      expect(checkReadyState()).toBe(false);
    });

    it('should return false if window.hj is present', () => {
      window.hj = fakeHJ;
      expect(checkReadyState()).toBe(true);
      window.hj = undefined;
    });
  });

  describe('initScript', () => {
    beforeEach(() => {
      document.head.appendChild = appendSpy;
    });

    afterEach(() => {
      jest.clearAllMocks();
    });
    it('should append a script to the body', () => {
      // in order to not have the code throw
      window.hj = fakeHJ;
      initScript(12345, 1);
      expect(document.head.appendChild).toHaveBeenCalledWith(
        expect.objectContaining({
          id: 'hotjar-init-script',
          crossOrigin: 'anonymous',
          innerText: expect.stringContaining('12345'),
        }),
      );
      window.hj = undefined;
    });
    it('should throw if append did not work', () => {
      appendSpy.mockImplementationOnce(() => {
        throw Error('error');
      });
      expect(() => {
        initScript(12345, 1);
      }).toThrow('Failed to initialize Hotjar tracking script.');
    });
    it('should throw if window.hj does not exist after the append', () => {
      expect(() => {
        initScript(12345, 1);
      }).toThrow('Failed to initialize Hotjar tracking script.');
    });
  });

  describe('executeHotjarCommand', () => {
    it('should execute window.hj command', () => {
      window.hj = fakeHJ;
      executeHotjarCommand('stateChange', 'my/new/url');
      expect(window.hj).toHaveBeenCalledWith('stateChange', 'my/new/url');
      window.hj = undefined;
    });
    it('should throw if window.hj does not exist', () => {
      expect(() => {
        executeHotjarCommand('stateChange', 'my/new/url');
      }).toThrow('Hotjar is not available, make sure init has been called.');
    });
  });
});
