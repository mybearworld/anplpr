// This file is not part of the original prototype.
// @ts-check

(() => {
  "use strict";

  /**
   * Asserts that `node` is an image.
   * @param {Node} node The node to check.
   * @returns {asserts node is SVGImageElement}
   */
  const ensureImage = (node) => {
    if (node.nodeName !== "image") {
      throw new Error(`Not an image: ${node}`);
    }
  };

  const seenImages = [];

  setInterval(() => {
    document.querySelectorAll("image").forEach((image) => {
      if (seenImages.includes(image)) {
        return;
      }
      try {
        ensureImage(image);
      } catch {
        return;
      }
      image.href.baseVal = image.href.baseVal.replace("/scratch-gui/", "");
      seenImages.push(image);
    });
  });
})();
