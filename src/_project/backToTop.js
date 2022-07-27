
const backToTop = {

    init: function () {
        let scrollToTopBtn = document.getElementById('js-back-to-top');
        scrollToTopBtn.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }
};

export default backToTop;