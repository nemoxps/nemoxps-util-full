// Based on `lodash`'s `debounce`.
/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * @param {function} func The function to debounce.
 * @param {int} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false] Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.trailing=true] Specify invoking on the trailing edge of the timeout.
 * @param {int} [options.maxWait] The maximum time `func` is allowed to be delayed before it's invoked.
 * @returns {function} Returns the new debounced function.
 */
let debounce = (func, wait = 0, options = {}) => {
    let lastArgs, lastThis, result, timerId, lastCallTime;
    let lastInvokeTime = 0;
    let maxing = Object.hasOwnProperty.call(options, 'maxWait');
    let maxWait = (maxing) ? Math.max(options.maxWait, wait) : undefined;
    let { leading = false, trailing = true } = options;
    
    let shouldInvoke = (time) => {
        let timeSinceLastCall = time - lastCallTime;
        let timeSinceLastInvoke = time - lastInvokeTime;
        
        // Either this is the first call,
        // activity has stopped and we're at the trailing edge,
        // the system time has gone backwards and we're treating it as the trailing edge,
        // or we've hit the `maxWait` limit.
        return (
          lastCallTime === undefined ||
          timeSinceLastCall >= wait ||
          timeSinceLastCall < 0 ||
          maxing && timeSinceLastInvoke >= maxWait
        );
    };
    
    let invokeFunc = (time) => {
        let args = lastArgs;
        let thisArg = lastThis;
        
        lastArgs = lastThis = undefined;
        lastInvokeTime = time;
        result = func.apply(thisArg, args);
        return result;
    };
    
    let remainingWait = (time) => {
        let timeSinceLastCall = time - lastCallTime;
        let timeSinceLastInvoke = time - lastInvokeTime;
        let timeWaiting = wait - timeSinceLastCall;
        
        return (maxing)
          ? Math.min(timeWaiting, maxWait - timeSinceLastInvoke)
          : timeWaiting;
    };
    
    let trailingEdge = (time) => {
        timerId = undefined;
        
        // Only invoke if we have `lastArgs` which means `func` has been debounced at least once.
        if (trailing && lastArgs)
          return invokeFunc(time);
        
        lastArgs = lastThis = undefined;
        return result;
    };
    
    let timerExpired = () => {
        let time = Date.now();
        
        if (shouldInvoke(time))
          return trailingEdge(time);
        
        // Restart the timer.
        timerId = setTimeout(timerExpired, remainingWait(time));
    };
    
    let leadingEdge = (time) => {
        // Reset any `maxWait` timer.
        lastInvokeTime = time;
        // Start the timer for the trailing edge.
        timerId = setTimeout(timerExpired, wait);
        // Invoke the leading edge.
        return (leading) ? invokeFunc(time) : result;
    };
    
    let debounced = function (...args) {
        let time = Date.now();
        let isInvoking = shouldInvoke(time);
        
        lastArgs = args;
        lastThis = this;
        lastCallTime = time;
        
        if (isInvoking)
        {
          if (timerId === undefined)
            return leadingEdge(lastCallTime);
          
          if (maxing)
          {
            // Handle invocations in a tight loop.
            timerId = setTimeout(timerExpired, wait);
            return invokeFunc(lastCallTime);
          }
        }
        if (timerId === undefined)
          timerId = setTimeout(timerExpired, wait);
        
        return result;
    };
    debounced.cancel = () => {
        if (timerId !== undefined)
          clearTimeout(timerId);
        lastInvokeTime = 0;
        lastArgs = lastCallTime = lastThis = timerId = undefined;
    };
    debounced.flush = () => {
        return (timerId === undefined) ? result : trailingEdge(Date.now());
    };
    return debounced;
};


module.exports = debounce;