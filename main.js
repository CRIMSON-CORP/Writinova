import './style.css';
import { gsap, Power3, Power1, Expo } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';
import Lenis from '@studio-freight/lenis';
import Typewriter from 'typewriter-effect/dist/core';

gsap.registerPlugin(ScrollTrigger);

const utils = {
  getElem: (query) => document.querySelector(query),
  getAllElem: (query) => document.querySelectorAll(query),
  getChild: (parent, childQuery) => parent.querySelector(childQuery),
};

function initLenis() {
  const lenis = new Lenis({ lerp: 0.075 });

  lenis.on('scroll', () => {});

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
}

function typeWritterEffect() {
  setTimeout(() => {
    new Typewriter('#hero h1 .writer', {
      strings: [
        'Essays',
        'Letters',
        'SMS',
        'IT LogBook',
        'IT Report',
        'Project',
        'Proposals',
        'Presentations',
      ],
      autoStart: true,
      loop: true,
    });
  }, 5000);
}

function headerSectionAnimation() {
  gsap.from('header .container > div > *', {
    opacity: 0,
    y: 10,
    stagger: 0.125,
    delay: 0.25,
  });
}

function heroSectionAnimation() {
  const text = new SplitType('#hero h1');
  const heroAnimationTimeline = gsap.timeline();
  heroAnimationTimeline
    .from(text.chars, {
      opacity: 0,
      stagger: 0.125 / 3.5,
      ease: Power1.easeOut(),
      duration: 2,
    })
    .from(
      '#hero .container > div > p',
      { opacity: 0, y: '100%', ease: Expo.easeOut() },
      '-=2.25'
    )
    .from(
      '#hero .container > div > div > div',
      {
        opacity: 0,
        y: '100%',
        ease: Expo.easeOut(),
        duration: 1,
        stagger: 0.125 / 2,
      },
      '-=2'
    )
    .from('svg#hero-artwork *', { opacity: 0, stagger: 0.0125 / 3 }, '-=1.75');
}

function servicesAnimation() {
  function headerAnimation() {
    const header = '#services  header > h2';
    const underline = '#services  header > #underline > path';

    const text = new SplitType(header);
    gsap.from(text.chars, {
      opacity: 0,
      stagger: 0.025,
      ease: Power3.easeOut(),
      duration: 2,
      scrollTrigger: {
        trigger: header,
        start: 'top 70%',
      },
    });
    gsap.from(underline, {
      strokeDashoffset: 611.617,
      ease: Expo.easeOut(),
      duration: 2,
      scrollTrigger: {
        trigger: underline,
        start: 'top 70%',
      },
    });
  }
  function commonAnimationTimeline() {
    const serviceImageContainer = utils.getAllElem(
      '#services .service-image-container'
    );
    const serviceContent = utils.getAllElem('#services article header');

    serviceImageContainer.forEach((element) => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: element,
          start: 'top 70%',
        },
      });

      timeline
        .from(element, {
          scale: 0.5,
          opacity: 0,
          ease: 'back.out(2)',
          duration: 1.25,
        })
        .from(
          element.children[0],
          {
            opacity: 0,
            y: '80%',
            ease: 'expo.out()',
            duration: 1.25,
          },
          '-=0.75'
        )
        .from(
          utils.getChild(element, '.content'),
          {
            opacity: 0,
            y: '80%',
            ease: 'expo.out()',
            duration: 1.25,
          },
          '-=0.85'
        );
    });

    serviceContent.forEach((element) => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: element,
          start: 'top 70%',
        },
      });

      timeline.from(element.children, {
        y: 100,
        opacity: 0,
        ease: 'expo.out()',
        stagger: 0.175,
        duration: 1.5,
      });
    });
  }
  function businessProposalAnimationTimeline() {
    const businessProposal = utils.getElem(
      '#business-proposals .service-image-container'
    );

    const timeline = gsap.timeline({
      delay: 1.25,
      scrollTrigger: {
        trigger: businessProposal,
        start: 'top 70%',
      },
    });

    timeline
      .from('#business-proposals svg#fingerprint', {
        ease: Expo.easeOut(),
        x: '-80%',
        opacity: 0,
        duration: 2,
        transformOrigin: 'left top',
      })
      .from(
        '#business-proposals .content > div > div > svg',
        {
          ease: Expo.easeOut(),
          x: 100,
          opacity: 0,
        },
        '-=2'
      )
      .from(
        '#business-proposals .content > div > div > div > *',
        {
          ease: Expo.easeOut(),
          y: 20,
          opacity: 0,
          stagger: 0.25,
        },
        '-=1.5'
      );
  }
  function studentProjectAnimationTimeline() {
    const studentProject = utils.getElem(
      '#student-project .service-image-container'
    );
    const text = new SplitType('#student-project .content span');

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: studentProject,
        start: 'top 70%',
      },
      delay: 1.5,
    });

    timeline
      .from(text.chars, {
        opacity: 0,
        stagger: 0.025,
        ease: Power3.easeOut(),
        duration: 2,
      })
      .from(
        utils.getChild(studentProject, 'svg').children,
        {
          scale: 0.4,
          opacity: 0,
          ease: 'back.out(2)',
          duration: 1,
          stagger: 0.125,
          transformOrigin: 'center',
        },
        '-=2.25'
      );
  }
  function projectProposalsAnimationTimeline() {
    const projectProposals = utils.getElem(
      '#project-proposals .service-image-container'
    );
    const text = new SplitType(
      '#project-proposals .service-image-container span'
    );

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: projectProposals,
        start: 'top 70%',
      },
      delay: 1.5,
    });

    timeline
      .from(text.chars, {
        opacity: 0,
        stagger: 0.025,
        ease: Power3.easeOut(),
        duration: 2,
      })
      .from(
        '#project-proposals .service-image-container svg #background',
        {
          scale: 0.4,
          opacity: 0,
          ease: 'back.out(1.7)',
          duration: 1,
          stagger: 0.125,
          transformOrigin: 'center',
        },
        '-=2.25'
      )
      .from(
        utils.getAllElem(
          '#project-proposals .service-image-container svg .wrapper > g > *'
        ),
        {
          y: 50,
          opacity: 0,
          ease: 'expo.out()',
          duration: 1,
          stagger: 0.125,
          transformOrigin: 'center',
        },
        '-=2'
      );
  }
  function iTReportAnimationTimeline() {
    const projectProposals = utils.getElem(
      '#it-reports .service-image-container'
    );
    const text = new SplitType(
      '#it-reports .service-image-container span:first-child'
    );

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: projectProposals,
        start: 'top 70%',
      },
      delay: 1.5,
    });

    timeline
      .from(text.chars, {
        opacity: 0,
        stagger: 0.025,
        ease: Power3.easeOut(),
        duration: 2,
      })
      .from(
        '#it-reports .service-image-container span:last-child',
        {
          y: 50,
          opacity: 0,
          ease: 'expo.out()',
          duration: 1.5,
        },
        '-=2'
      )
      .from(
        '#it-reports .service-image-container svg>g>*',
        {
          opacity: 0,
          stagger: 0.125 / 3,
        },
        '-=2'
      );
  }
  headerAnimation();
  commonAnimationTimeline();
  businessProposalAnimationTimeline();
  studentProjectAnimationTimeline();
  projectProposalsAnimationTimeline();
  iTReportAnimationTimeline();
}

function howItWorksAnimation() {
  const header = '#how-it-works > header > h2';
  const underline = '#how-it-works > header > #underline > path';
  const howItWorksArtwork = '#how-it-works #how-it-works-artwork';
  const howItWorksSteps = '#how-it-works .container article';
  const text = new SplitType(header);
  gsap.from(text.chars, {
    opacity: 0,
    stagger: 0.025,
    ease: Power3.easeOut(),
    duration: 2,
    scrollTrigger: {
      trigger: header,
      start: 'top 70%',
    },
  });
  gsap.from(underline, {
    strokeDashoffset: 611.617,
    ease: Expo.easeOut(),
    duration: 2,
    scrollTrigger: {
      trigger: underline,
      start: 'top 70%',
    },
  });
  gsap.from(howItWorksArtwork, {
    opacity: 0,
    y: 200,
    duration: 1.5,
    ease: 'expo.out()',
    scrollTrigger: {
      trigger: howItWorksArtwork,
      start: '50% 80%',
    },
  });

  utils.getAllElem(howItWorksSteps).forEach((element) => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: element,
        start: 'top 80%',
      },
    });

    timeline
      .from(element, { y: 100, opacity: 0, ease: 'expo.out()' })
      .from(element.children[0].children[0], {
        scale: 0.2,
        opacity: 0,
        ease: 'back.out(1.7)',
      })
      .from(
        element.children[0].children[0].children[0],
        {
          scale: 0.2,
          opacity: 0,
          ease: 'back.out(1.7)',
        },
        '-=1'
      );
    if (element.children[0].children[1] !== undefined) {
      timeline.from(
        element.children[0].children[1],
        {
          scaleY: 0,
          transformOrigin: 'top',
          ease: 'ease.out()',
          duration: 1.5,
        },
        '-=0.125'
      );
      timeline.from(
        element.children[1].children,
        {
          opacity: 0,
          y: 150,
          ease: 'expo.out()',
          duration: 1.5,
          stagger: 0.125,
        },
        '-=1'
      );
    } else {
      timeline.from(
        element.children[1].children,
        {
          opacity: 0,
          y: 150,
          ease: 'expo.out()',
          duration: 1.5,
          stagger: 0.125,
          delay: 1.5,
        },
        '-=1'
      );
    }
  });
}

function getStartedAnimation() {
  const getStarted = '#get-started';
  const header = '#get-started h2';
  const buttonWrapper = '#get-started .container > div > div > div';
  const image = '#get-started .container > div > img';
  const text = new SplitType(header);
  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: getStarted,
      start: 'top 70%',
    },
  });

  timeline
    .from(text.chars, {
      opacity: 0,
      stagger: 0.025,
      ease: Power3.easeOut(),
      duration: 2,
    })
    .from(
      buttonWrapper,
      {
        opacity: 0,
        y: '100%',
        ease: Expo.easeOut(),
        duration: 1,
      },
      '-=1.5'
    )
    .from(
      image,
      {
        opacity: 0,
        x: '5%',
        duration: 2,
        ease: 'expo.out()',
      },
      '-=1.5'
    );
}

function followCursor() {
  const element = utils.getElem('.follow-cursor');

  window.addEventListener('mousemove', (e) => {
    element.animate(
      {
        left: e.pageX + 'px',
        top: e.pageY + 'px',
      },
      { duration: 400, fill: 'forwards' }
    );
  });
}

initLenis();
typeWritterEffect();
headerSectionAnimation();
heroSectionAnimation();
servicesAnimation();
howItWorksAnimation();
getStartedAnimation();
followCursor();
