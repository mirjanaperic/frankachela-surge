const imgAnimation = {

    init: function () {
        var current = 0,
            slides = document.getElementsByClassName("js-img-about");

        setInterval(function () {
            for (var i = 0; i < slides.length; i++) {
                slides[i].style.opacity = 0;
            }
            current = (current != slides.length - 1) ? current + 1 : 0;
            slides[current].style.opacity = 1;
        }, 3000);

        var currentContact = 0,
            slidesContact = document.getElementsByClassName("js-img-contact");

        setInterval(function () {
            for (var i = 0; i < slidesContact.length; i++) {
                slidesContact[i].style.opacity = 0;
            }
            currentContact = (currentContact != slidesContact.length - 1) ? currentContact + 1 : 0;
            slidesContact[currentContact].style.opacity = 1;
        }, 3000);

        var currentBanner = 0,
        slidesBanner = document.getElementsByClassName("js-img-banner");

    setInterval(function () {
        for (var i = 0; i < slidesBanner.length; i++) {
            slidesBanner[i].style.opacity = 0;
        }
        currentBanner = (currentBanner != slidesBanner.length - 1) ? currentBanner + 1 : 0;
        slidesBanner[currentBanner].style.opacity = 1;
    }, 3000);
    }
};

export default imgAnimation;