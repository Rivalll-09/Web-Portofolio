    // Mobile nav toggle
    const navToggle = document.getElementById('navToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    navToggle?.addEventListener('click', ()=>{
      mobileMenu.classList.toggle('hidden');
    });

    // Reveal on scroll + progress bars
    const revealItems = document.querySelectorAll('.reveal');
    const progressBars = document.querySelectorAll('[data-progress]');

    const io = new IntersectionObserver((entries)=>{
      entries.forEach(e=>{
        if(e.isIntersecting){
          e.target.classList.add('show');
          if(e.target.querySelector('[data-progress]')){
            e.target.querySelectorAll('[data-progress]').forEach(bar=>{
              const val = bar.getAttribute('data-progress');
              bar.style.width = val + '%';
            });
          }
        }
      })
    },{threshold: .2});

    revealItems.forEach(el=> io.observe(el));

    // Footer year
    document.getElementById('year').textContent = new Date().getFullYear();

    // Fake form submit
    document.getElementById('fakeSubmit')?.addEventListener('click', ()=>{
      alert('Thanks! This is a demo form. You can wire this to your backend or a form service (e.g., Formspree) later.');
    });