import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


const scroll = {
    init: function () {
        gsap.utils.toArray(".animation").forEach((element) => {
            gsap.to(element, {
              scrollTrigger: {
                trigger: element,
                start: "top 90%",
                end: "bottom 10%",
                invalidateOnRefresh: true,
                onEnter: () => {
                  gsap.to(element, {
                    y: -50,
                    duration: 1,
                    opacity: 1
                  });
                },
                onLeave: () => {
                  gsap.to(element, {
                    y: -100,
                    duration: 1,
                    opacity: 0
                  });
                },
                onEnterBack: () => {
                  gsap.to(element, {
                    y: -50,
                    duration: 1,
                    opacity: 1
                  });
                },
                onLeaveBack: () => {
                  gsap.to(element, {
                    y: 0,
                    duration: 1,
                    opacity: 0
                  });
                }
              }
            });
          });
    }
};

export default scroll;