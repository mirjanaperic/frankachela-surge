const marquee = {
    init: function () {
        const mq = window.matchMedia("(max-width: 768px)");
        if (mq.matches) {
            let images = document.getElementById('js-clients-images');
            
            images.addEventListener('mousedown', function (e) {
                // if(e.type == 'mousedown') {
                    this.style.animationPlayState = 'paused';
                // }
            });
            images.addEventListener('mouseup', function (e) {
                // console.log('test');
                // if(e.type == 'mouseup') {
                    this.style.animationPlayState = 'running';
                // }
            });
        }
    }
};

export default marquee;