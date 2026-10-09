(function () {
  var KEY = 'redplanet_achievements';

  var LIST = [
    { id: 'flawless_opening',
      title: 'Flawless Opening',
      desc: 'Complete a perfect Prime Minister inaugural address.',
      icon: 'img/ach_opening.png' }
    // altri achievement qui
  ];

  function load() {
    try { return JSON.parse(localStorage.getItem(KEY)) || {}; }
    catch (e) { return {}; }
  }
  function save(data) {
    try { localStorage.setItem(KEY, JSON.stringify(data)); } catch (e) {}
  }

  window.Achievements = {
    isUnlocked: function (id) { return !!load()[id]; },

    unlock: function (id) {
      var data = load();
      if (data[id]) return;            // già sbloccato: non fare nulla
      data[id] = Date.now();
      save(data);
    },

    render: function (containerId) {
      var el = document.getElementById(containerId);
      if (!el) return;
      var data = load();
      el.innerHTML = LIST.map(function (a) {
        var done = !!data[a.id];
        return '<div class="ach-card' + (done ? '' : ' locked') + '">' +
          '<img src="' + a.icon + '" alt="">' +
          '<div><div class="ach-title">' + a.title + '</div>' +
          '<div class="ach-desc">' + a.desc + '</div></div></div>';
      }).join('');
    }
  };
})();
