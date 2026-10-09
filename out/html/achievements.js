(function () {
  var KEY = 'redplanet_achievements';

  var LIST = [
    { id: 'flawless_opening',
      title: '**Flawless Opening**',
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

  var queue = [];
  var showing = false;
  
  function showToast(a) {
    queue.push(a);
    if (!showing) next();
  }
  
  function next() {
    var a = queue.shift();
    if (!a || typeof document === 'undefined') { showing = false; return; }
    showing = true;
  
    var el = document.createElement('div');
    el.className = 'ach-toast';
    el.setAttribute('role', 'status');
    el.innerHTML =
      '<img src="' + a.icon + '" alt="">' +
      '<div><div class="ach-toast-label">Achievement unlocked</div>' +
      '<div class="ach-toast-title">' + a.title + '</div></div>';
    document.body.appendChild(el);
  
    // piccolo ritardo per far partire la transizione CSS
    setTimeout(function () { el.classList.add('show'); }, 50);
    setTimeout(function () {
      el.classList.remove('show');
      setTimeout(function () {
        if (el.parentNode) el.parentNode.removeChild(el);
        next();               // mostra il prossimo in coda
      }, 400);
    }, 4000);
  }

  window.Achievements = {
    isUnlocked: function (id) { return !!load()[id]; },

    unlock: function (id) {
      var data = load();
      if (data[id]) return;
      data[id] = Date.now();
      save(data);
    
      var a = LIST.filter(function (x) { return x.id === id; })[0];
      if (a) showToast(a);
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
