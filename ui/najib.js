/* NaJiB Blueprint — tombol ganti tema yang sama di semua halaman (localStorage "theme"). */
(function () {
  function pasang() {
    document.querySelectorAll('[data-nj-toggle]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var t = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        var ubah = function () {
          document.documentElement.setAttribute('data-theme', t);
          var meta = document.querySelector('meta[name="theme-color"]');
          if (meta) meta.setAttribute('content', t === 'dark' ? '#0d2240' : '#f2f6fa');
        };
        if (document.startViewTransition && !matchMedia('(prefers-reduced-motion: reduce)').matches) document.startViewTransition(ubah);
        else ubah();
        try { localStorage.setItem('theme', t); } catch (e) {}
      });
    });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', pasang);
  else pasang();
})();
