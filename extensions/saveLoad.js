// @ts-check

(() => {
  const MENU_BAR_CLASS = "menu-bar_menu-bar_JcuHF";
  const MENU_ITEM_CLASS = "menu-bar_menu-item_2lssx";
  const MENU_ITEM_BUTTON_STYLES = /* css */ `
    button.${MENU_ITEM_CLASS} {
      background: none;
      font: inherit;
      color: inherit;
      border: 0;
    }
  `;

  /**
   * A `document.querySelector` wrapper that errors when the element doesn't exist.
   * @param {string} selector The selector.
   */
  const querySelector = (selector) => {
    const el = document.querySelector(selector);
    if (!el) {
      throw new Error(`Can't find element: ${selector}`);
    }
    return el;
  };

  /**
   * Output XML from the current workspace to the user.
   */
  const save = () => {
    /** @type {HTMLUnknownElement} */
    // @ts-expect-error
    const dom = Blockly.Xml.workspaceToDom(Blockly.getMainWorkspace());
    /** @type {string} */
    // @ts-expect-error
    const text = Blockly.Xml.domToText(dom);
    prompt(
      'This XML represents the blocks of this sprite. It can be loaded with the "Load" button next to this one.\nRemember to put it in [code] tags in the forums!',
      text
    );
  };

  /**
   * Get XML input from the user and load it.
   */
  const load = () => {
    const text = prompt("Paste the XML here...");
    if (!text) {
      return;
    }
    // @ts-expect-error
    Blockly.getMainWorkspace().clear();
    /** @type {HTMLUnknownElement} */
    // @ts-expect-error
    const dom = Blockly.Xml.textToDom(text);
    // @ts-expect-error
    Blockly.Xml.domToWorkspace(dom, Blockly.getMainWorkspace());
  };

  const menuBar = querySelector(`.${MENU_BAR_CLASS}`);
  const saveItem = document.createElement("button");
  saveItem.classList.add(MENU_ITEM_CLASS);
  saveItem.textContent = "Save";
  saveItem.addEventListener("click", save);
  const loadItem = document.createElement("button");
  loadItem.classList.add(MENU_ITEM_CLASS);
  loadItem.textContent = "Load";
  loadItem.addEventListener("click", load);
  const disclaimer = document.createElement("div");
  disclaimer.classList.add(MENU_ITEM_CLASS);
  disclaimer.textContent =
    "(Save and load feature not part of original prototype)";
  menuBar.append(saveItem, loadItem, disclaimer);

  const style = document.createElement("style");
  style.innerHTML = MENU_ITEM_BUTTON_STYLES;
  document.head.appendChild(style);
})();
