const marquee = {
    init: function () {
        const mq = window.matchMedia("(max-width: 768px)");
        if (mq.matches) {
            let images = document.getElementById('js-clients-images');
            
            images.addEventListener('touchstart', function () {
                images.classList.add('paused');
            });
            images.addEventListener('touchend', function (e) {
                images.classList.remove('paused');
            });
        }
    }
};

export default marquee;