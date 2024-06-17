import { checkReadyState, executeContentsquareCommand, initScript } from '../src/utils';
import type { WindowWithContentsquare } from '../src/utils';

declare const window: WindowWithContentsquare;

const fakeHJ = jest.fn(() => {
  return null;
});

const appendSpy = jest.fn();

describe('Utils', () => {
  describe('checkReadyState', () => {
    afterEach(() => {
      jest.clearAllMocks();
    });
    it('should return false if Contentsquare is not initiated', () => {
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
          id: 'contentsquare-init-script',
          crossOrigin: 'anonymous',
          innerText: expect.stringMatching(/(?=.*hjdebug:false)(?=.*12345).*/i),
        }),
      );
      window.hj = undefined;
    });
    it('should append a script with debug option to the body', () => {
      // in order to not have the code throw
      window.hj = fakeHJ;
      initScript(12345, 1, { debug: true });
      expect(document.head.appendChild).toHaveBeenCalledWith(
        expect.objectContaining({
          id: 'contentsquare-init-script',
          crossOrigin: 'anonymous',
          innerText: expect.stringMatching(/(?=.*hjdebug:true)(?=.*12345).*/i),
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
      }).toThrow('Failed to initialize Contentsquare tracking script.');
    });
    it('should throw if window.hj does not exist after the append', () => {
      expect(() => {
        initScript(12345, 1);
      }).toThrow('Failed to initialize Contentsquare tracking script.');
    });
  });

  describe('executeContentsquareCommand', () => {
    it('should execute window.hj command', () => {
      window.hj = fakeHJ;
      executeContentsquareCommand('stateChange', 'my/new/url');
      expect(window.hj).toHaveBeenCalledWith('stateChange', 'my/new/url');
      window.hj = undefined;
    });
    it('should throw if window.hj does not exist', () => {
      expect(() => {
        executeContentsquareCommand('stateChange', 'my/new/url');
      }).toThrow('Contentsquare is not available, make sure init has been called.');
    });
  });
});
