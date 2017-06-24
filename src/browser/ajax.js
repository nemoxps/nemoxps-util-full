/**
 * Tiny AJAX implementation.
 *
 * @param {string} url A URL.
 * @param {Object}  [options={}]
 * @param {boolean} [options.async=true]                           Asynchronous/Synchronous request.
 * @param {string}  [options.method='GET']                         A HTTP method to use for the request.
 * @param {string}  [options.mimeType='text/plain; charset=UTF-8'] A mime type to use for the request.
 * @param {boolean} [options.nocache=true]                         `true` if the result shouldn't be cached.
 * @returns {Promise} `Promise.then({ xhr, options }, {Error} err);`
 */
let ajax = (url, options = {}) => {
    options = Object.assign({
        async: true,
        method: 'GET',
        mimeType: 'text/plain; charset=UTF-8',
        nocache: true,
    }, options);
    options.originalUrl = url;
    if (options.nocache)
      url += '?nocache=' + Date.now();
    options.url = url;
    
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.overrideMimeType(options.mimeType);
        xhr.onreadystatechange = () => {
            if (xhr.readyState !== 4)
              return;
            if (xhr.status !== 200 && xhr.status !== 206)
            {
              let err = new Error('AJAX request failed.');
              err.data = { xhr, options };
              return reject(err);
            }
            return resolve({ xhr, options });
        };
        xhr.open(options.method, url, options.async);
        xhr.send(null);
    });
};


module.exports = ajax;