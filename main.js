import './style.css';
import { gsap, Power3, Expo } from 'gsap';
import SplitType from 'split-type';
import Lenis from '@studio-freight/lenis';

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
      '-=2'
    )
    .from(
      '#hero .container > div > div',
      { opacity: 0, y: '100%', ease: Expo.easeOut(), duration: 1.2 },
      '-=1.75'
    )
    .from('svg#hero-artwork *', { opacity: 0, stagger: 0.0125 / 3 }, '-=1.5');
}

initLenis();
headerSectionAnimation();
heroSectionAnimation();
