// @see https://parceljs.org/plugins.html

// Standard lib.
const path = require('path');

// One-time helper.
let patchBundle = (bundle) => {
  patchBundle = function noop() { }; // Reset to noop so code below is ran once.

  // Extend Bundle.getHashedBundleName to update asset paths.
  const BundlePrototype = Object.getPrototypeOf(bundle);
  const original = BundlePrototype.getHashedBundleName;
  BundlePrototype.getHashedBundleName = function getHashedBundleName(...args) {
    // Run original function.
    const result = original.call(this, ...args);

    // Assets are always stored directly in the output directory.
    if (result.indexOf('/') === -1) {
      return path.join(path.dirname(this.entryAsset.relativeName), result);
    }
    return result; // Return original.
  };
};

// Exports.
module.exports = (bundler) => {
  // Hook into bundler.mainBundle, as it's the only way to retrieve a bundle.
  Object.defineProperty(bundler, 'mainBundle', {
    set: (value) => {
      patchBundle(value);
      this._mainBundle = value; // eslint-disable-line no-underscore-dangle
    },
    get: () => this._mainBundle // eslint-disable-line no-underscore-dangle
  });
};
