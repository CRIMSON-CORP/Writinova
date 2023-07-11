import './style.css';
import { gsap, Power3, Expo } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';
import Lenis from '@studio-freight/lenis';

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
      stagger: 0.025,
      ease: Power3.easeOut(),
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
  const header = '#services > header > h2';
  const underline = '#services > header > #underline > path';
  const articleContents = '#services .container article header';
  const articleImage = '#services .container article > div > img';
  const teamCall = '#services .container article .team-call';
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
  document.querySelectorAll(articleContents).forEach((element) => {
    gsap.from(element.children, {
      opacity: 0,
      y: '100%',
      ease: Expo.easeOut(),
      duration: 1,
      stagger: 0.25,
      scrollTrigger: {
        trigger: element,
        start: 'top 70%',
      },
    });
  });
  gsap.from(articleImage, {
    scale: 0.9,
    opacity: 0,
    duration: 2,
    ease: Expo.easeOut(),
    scrollTrigger: {
      trigger: articleImage,
      start: 'top 70%',
    },
  });
  document.querySelectorAll(teamCall).forEach((element) => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: element,
        start: 'top 70%',
      },
    });

    timeline
      .from(element, { opacity: 0, duration: 1 })
      .from(element.children, {
        opacity: 0,
        scale: 0.75,
        duration: 0.75,
        ease: 'back.out(2)',
      })
      .from(
        element.children[0].children[0].children[0],
        {
          opacity: 0,
          scale: 0.5,
          duration: 0.75,
          ease: 'back.out(2)',
        },
        '-=0.5'
      )
      .from(
        element.children[0].children[0].children[2],
        {
          opacity: 0,
          scale: 0.5,
          duration: 0.75,
          ease: 'back.out(2)',
        },
        '-=0.5'
      )
      .from(
        element.children[0].children[1].children,
        {
          opacity: 0,
          y: 20,
          stagger: 0.125,
        },
        '-=0.5'
      );
  });
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
        start: 'center 80%',
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
        '-=0.25'
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
    }
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
  });
}

function getStartedAnimation() {
  const timeline = gsap.timeline();
  const header = '#get-started h2';
  const buttonWrapper = '#get-started .container > div > div > div';
  const image = '#get-started .container > div > img';
  const text = new SplitType(header);

  timeline
    .from(text.chars, {
      opacity: 0,
      stagger: 0.025,
      ease: Power3.easeOut(),
      duration: 2,
      scrollTrigger: {
        trigger: header,
        start: 'top 70%',
      },
    })
    .from(buttonWrapper, {
      opacity: 0,
      y: '100%',
      ease: Expo.easeOut(),
      duration: 1,
      scrollTrigger: {
        trigger: buttonWrapper,
        start: 'top 70%',
      },
    })
    .from(image, {
      opacity: 0,
      scrollTrigger: {
        trigger: image,
        start: 'top 70%',
      },
    });

  console.log();
}

initLenis();
headerSectionAnimation();
heroSectionAnimation();
servicesAnimation();
howItWorksAnimation();
getStartedAnimation();
