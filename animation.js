const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            entry.target.classList.add('reveal');
        }
    })
})

const observerRepeat = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            entry.target.classList.add('reveal');
        } else {
            entry.target.classList.remove('reveal');
        }
    })
})

const conceal = document.querySelectorAll(`.conceal-left, .conceal-right, .slide-up, .slide-in, 
    #asgard, #alfheim, #jotunheim, #vanaheim, #midgard, #svartalfheim, #muspelheim, #niflheim, #helheim,
    #compass-arrows`);
conceal.forEach((conc) => observer.observe(conc));

const concealRepeat = document.querySelectorAll(`.slide-in`);
concealRepeat.forEach((conc) => observerRepeat.observe(conc));
