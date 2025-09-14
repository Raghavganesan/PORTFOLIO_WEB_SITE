(function () {
  
  if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
  }
  if (location.hash) {
    history.replaceState(null, '', location.pathname + location.search);
  }

  document.addEventListener('DOMContentLoaded', () => window.scrollTo(0, 0));
  window.addEventListener('load', () => window.scrollTo(0, 0));

  const scrollDown = document.getElementById('scrollLink');
  if (scrollDown) {
    scrollDown.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector('#cards');
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      history.replaceState(null, '', location.pathname + location.search);
    });
  }
  const backToTop = document.querySelector('a.scroll-down[href="#top"]');
  if (backToTop) {
    backToTop.addEventListener('click', (e) => {
      e.preventDefault();
      document.querySelector('#top')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      history.replaceState(null, '', location.pathname + location.search);
    });
  }
})();
