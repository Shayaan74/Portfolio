document.addEventListener('DOMContentLoaded', function() {

  const skillCards = document.querySelectorAll('.skill-card');
  const panel = document.getElementById('skillInfoPanel');
  const tagEl = document.getElementById('skillInfoTag');
  const titleEl = document.getElementById('skillInfoTitle');
  const yearsEl = document.getElementById('skillInfoYears');
  const descEl = document.getElementById('skillInfoDesc');

  skillCards.forEach(card => {

    card.addEventListener('mouseenter', () => {

      tagEl.textContent = card.dataset.tag;
      titleEl.textContent = card.dataset.title;
      descEl.textContent = card.dataset.desc;

      const years= card.dataset.years;
      yearsEl.textContent = years === '1' ? '1 Year Experience' : `${years} Years Experience`;

      panel.classList.add('active');

    });

    card.addEventListener('mouseleave', () => {

      panel.classList.remove('active');

    });

  });

});