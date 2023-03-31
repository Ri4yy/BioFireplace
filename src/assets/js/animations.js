gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline();
const laptopScreen = window.matchMedia('(min-width: 992px)');

if(laptopScreen.matches) {
    tl.fromTo(
        '.logo', {
            y: -50,
            opacity: 0
        }, 
        {
            y: 0,
            opacity: 1,
            duration: 1
        }
    )
    .fromTo(
        '.menu li', {
            y: -50,
            opacity: 0,
        }, 
        {
            y: 0,
            opacity: 1,
            duration: 1,
            stagger: 1,
        }
    )
    .fromTo(
        '.header_phone', {
            y: -50,
            opacity: 0,
        }, 
        {
            y: 0,
            opacity: 1,
            duration: 1,
        },
        5
    )

    gsap.from('.main_title', {
        scrollTrigger: {
            trigger: '.sectionMain',
            start: '-100 0',
        },
        xPercent: -20,
        opacity: 0,
        duration: 2
    });
    gsap.from('.title_price', {
        scrollTrigger: {
            trigger: '.sectionMain',
            start: '-100 0',
        },
        xPercent: -30,
        opacity: 0,
        duration: 3
    });

    const img = gsap.utils.toArray('.main_img');
    const imgTitle = gsap.utils.toArray('.img_title');

    gsap.from(img, {
        scrollTrigger: {
            trigger: '.sectionMain',
            start: '-100 0',
        },
        scale: 0,
        opacity: 0,
        stagger: 1,
        transforOrigin: 'left center',
        duration: 3
    });
    gsap.from(imgTitle, {
        scrollTrigger: {
            trigger: '.sectionMain',
            start: '-100 0',
        },
        scale: 0,
        opacity: 0,
        stagger: 1,
        transforOrigin: 'top center',
        duration: 3
    });
    gsap.from('.main_fireplace', {
        scrollTrigger: {
            trigger: '.sectionMain',
            start: '-100 0',
        },
        opacity: 0,
        transforOrigin: 'center',
        duration: 7
    });
}