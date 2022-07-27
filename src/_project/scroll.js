import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


const scroll = {
    init: function () {
        // console.log('test');
        // gsap.utils.toArray(".animation").forEach(element => {
        //     gsap.to(element, {
        //         opacity: 1,
        //         ease: "none",
        //         scrollTrigger: {
        //             trigger: element,
        //             start: "center 80%",
        //             end: "center 5%",
        //             // markers: true,
        //             // toggleActions: "play reverse play reverse"
        //         }
        //     })
        // });
        gsap.utils.toArray(".animation").forEach((element) => {
            gsap.to(element, {
              scrollTrigger: {
                trigger: element,
                start: "top 90%",
                end: "bottom 10%",
                // markers: true,
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