// Keep navigation available when JavaScript is disabled.
(() => {
  const header = document.querySelector('.site-header');
  const toggle = header?.querySelector('.menu-toggle');
  const navigation = document.getElementById('primary-navigation');
  if (!header || !toggle || !navigation) return;
  const mobile = window.matchMedia('(max-width: 760px)');
  const setExpanded = (expanded) => {
    header.dataset.expanded = String(expanded);
    toggle.setAttribute('aria-expanded', String(expanded));
  };
  toggle.hidden = false;
  setExpanded(!mobile.matches);
  toggle.addEventListener('click', () => {
    setExpanded(toggle.getAttribute('aria-expanded') !== 'true');
  });
  navigation.addEventListener('click', (event) => {
    if (mobile.matches && event.target.closest('a')) setExpanded(false);
  });
  header.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && mobile.matches) {
      setExpanded(false);
      toggle.focus();
    }
  });
  mobile.addEventListener('change', () => setExpanded(!mobile.matches));
})();
