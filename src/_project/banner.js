const banner = {

    init: function () {
        const bannerTitle = document.getElementById('js-banner-inner');

        // hide logo on scroll
        function logoHide() {
            const bannerImg = document.querySelector('.js-img-banner');
            if (window.scrollY > (bannerImg.clientHeight / 2)) {
                bannerTitle.style.display = 'none';
            } else {
                bannerTitle.style.display = 'block';
            }
        }
        document.addEventListener('scroll', () => {
            logoHide();
        });
        window.onload = () => {
            logoHide();
            document.querySelector('.js-img-banner').style.opacity = '0';
        };
    }
};

export default banner;