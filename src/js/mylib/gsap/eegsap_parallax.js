gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray('.js-parallax').forEach(wrap => {
    const y = wrap.getAttribute('data-y') || -100;
    gsap.to(wrap, {
        y: y,
        scrollTrigger: {
            trigger: wrap,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 0.5,
            //markers: true
        }
    })
});