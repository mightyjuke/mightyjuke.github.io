'use strict';
// Native links and all five sections remain usable when JavaScript is unavailable.
const picker = document.querySelector('.realm-picker');
if (picker) {
  const tabs = [...picker.querySelectorAll('[data-realm]')];
  const panels = tabs.map(tab => document.getElementById(tab.dataset.realm));
  picker.setAttribute('role', 'tablist');
  tabs.forEach((tab, index) => {
    tab.id = `tab-${tab.dataset.realm}`;
    tab.setAttribute('role', 'tab');
    tab.setAttribute('aria-controls', panels[index].id);
    panels[index].setAttribute('role', 'tabpanel');
    panels[index].setAttribute('aria-labelledby', tab.id);
    panels[index].tabIndex = 0;
  });
  function select(index, focus = false) {
    tabs.forEach((tab, i) => {
      tab.setAttribute('aria-selected', String(i === index));
      tab.tabIndex = i === index ? 0 : -1;
      panels[i].hidden = i !== index;
    });
    if (focus) tabs[index].focus();
  }
  function fromHash() {
    const index = panels.findIndex(panel => `#${panel.id}` === location.hash);
    if (index >= 0) select(index);
  }
  tabs.forEach((tab, index) => {
    tab.addEventListener('click', event => {
      event.preventDefault();
      select(index);
      history.replaceState(null, '', `#${panels[index].id}`);
    });
    tab.addEventListener('keydown', event => {
      let next;
      if (event.key === 'ArrowRight') next = (index + 1) % tabs.length;
      if (event.key === 'ArrowLeft') next = (index + tabs.length - 1) % tabs.length;
      if (event.key === 'Home') next = 0;
      if (event.key === 'End') next = tabs.length - 1;
      if (next !== undefined) {
        event.preventDefault();
        select(next, true);
      }
      if (event.key === ' ') { event.preventDefault(); tab.click(); }
    });
  });
  select(0);
  fromHash();
  window.addEventListener('hashchange', fromHash);
}
