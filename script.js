const floatAnimation = () => {
  const tlLogo = new TimelineMax({ repeat: -1 });
  tlLogo
    //move top
    .to(".logo_diamond > .diamond", 3, {
      y: "-=10",
      ease: Power1.easeInOut,
    })

    //move down
    .to(".logo_diamond > .diamond", 2, {
      y: "+=10",
      ease: Power1.easeInOut,
    })

    .to(".logo_diamond > .diamond", 3, { y: "-=10", ease: Power1.easeInOut })

    .to(".logo_diamond > .diamond", 3, { y: "+=10", ease: Power1.easeInOut })

    .to(".logo_diamond > .diamond", 3, { y: "-=10", ease: Power1.easeInOut })

    .to(".logo_diamond > .diamond", 3, { y: "+=10", ease: Power1.easeInOut })

    .to(".logo_diamond > .diamond", 2, { y: "-=10", ease: Power1.easeInOut })

    .to(".logo_diamond > .diamond", 2, { y: "+=10", ease: Power1.easeInOut });

  TweenLite.to(tlLogo, 2, { ease: Power1.easeInOut });
};

const floatAnimationLogo = () => {
  const tlLogo = new TimelineMax({ repeat: -1 });
  tlLogo
    //move top
    .to(".logo_diamond > .logo", 1.5, {
      y: "-=10",
      ease: Power1.easeInOut,
    })

    //move down
    .to(".logo_diamond > .logo", 2, {
      y: "+=10",
      ease: Power1.easeInOut,
    })

    .to(".logo_diamond > .logo", 3, { y: "-=10", ease: Power1.easeInOut })

    .to(".logo_diamond > .logo", 3, { y: "+=10", ease: Power1.easeInOut })

    .to(".logo_diamond > .logo", 3, { y: "-=10", ease: Power1.easeInOut })

    .to(".logo_diamond > .logo", 3, { y: "+=10", ease: Power1.easeInOut })

    .to(".logo_diamond > .logo", 2, { y: "-=10", ease: Power1.easeInOut })

    .to(".logo_diamond > .logo", 2, { y: "+=10", ease: Power1.easeInOut });

  TweenLite.to(tlLogo, 2, { ease: Power1.easeInOut });
};
floatAnimation();
floatAnimationLogo();
