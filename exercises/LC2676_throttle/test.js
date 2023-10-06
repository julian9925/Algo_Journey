const throttle = require('./index'); // Assuming throttle function is exported from throttle.js

describe('throttle', () => {
  jest.useFakeTimers(); // Use Jest's timer control methods

  it('should execute function immediately when called for the first time', () => {
    const fn = jest.fn();
    const throttledFn = throttle(fn, 1000);

    throttledFn('test');

    expect(fn).toBeCalledTimes(1);
    expect(fn).toBeCalledWith('test');
  });

  it('should not execute function again if called within delay period', () => {
    const fn = jest.fn();
    const throttledFn = throttle(fn, 1000);

    throttledFn('test1');
    throttledFn('test2');

    expect(fn).toBeCalledTimes(1);
    expect(fn).toBeCalledWith('test1');
  });

  it('should execute function with latest arguments after delay period', () => {
    const fn = jest.fn();
    const throttledFn = throttle(fn, 1000);

    throttledFn('test1');
    throttledFn('test2');
    
    // Fast-forward until all timers have been executed
    jest.runAllTimers();

    expect(fn).toBeCalledTimes(2);
    expect(fn.mock.calls[1][0]).toBe('test2');
  });
});
