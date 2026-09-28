window.AchievementSystem = {
  // 1. Define all achievements
  registry: {
    spm_victory: {
      title: "Arbeiter von Mars",
      desc: "Achieve an election victory with the SPM.",
      icon: "img/achievements/spm_victory.png"
    },
    culture_war: {
      title: "Facts Don't Care",
      desc: "Engage in culture war actions five times.",
      icon: "img/achievements/culture_war.png"
    },
    cdu_formed: {
      title: "You Shouldn't Be Here!",
      desc: "Form a conservative coalition.",
      icon: "img/achievements/cdu_formed.png"
    }
  },

  // 2. Unlock function
  unlock: function(key) {
    if (!this.registry[key]) return;
    let unlocked = JSON.parse(localStorage.getItem('dendry_achievements') || '{}');
    
    if (!unlocked[key]) {
      unlocked[key] = new Date().toISOString();
      localStorage.setItem('dendry_achievements', JSON.stringify(unlocked));
    }
  },

  // 3. Render function for the gallery
  renderGrid: function() {
    let unlocked = JSON.parse(localStorage.getItem('dendry_achievements') || '{}');
    let html = '<div class="achievement-grid">';

    for (let key in this.registry) {
      let ach = this.registry[key];
      let isUnlocked = !!unlocked[key];

      html += `
        <div class="ach-card ${isUnlocked ? 'unlocked' : 'locked'}">
          <div class="ach-card-img-container">
            <img src="${ach.icon}" alt="${ach.title}">
          </div>
          <div class="ach-card-info">
            <h4>${ach.title}</h4>
            <p>${ach.desc}</p>
          </div>
        </div>
      `;
    }

    html += '</div>';
    return html;
  }
};
