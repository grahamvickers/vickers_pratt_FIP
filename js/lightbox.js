(() => {

console.log("Lightbox Javascript is Linked");

const   lightbox   = document.querySelector('.lightbox'),
        video      = document.querySelector('video'),
        lbClose    = document.querySelector('.lightbox-close'),
        lbBtn      = document.querySelector('#lightboxBtn');




    function showLightbox() {

        video.src = `video/traa_promo.mp4`;
        lightbox.classList.add('show-lightbox');

        video.load();
        video.play();
    }


    function hideLightbox() {
        lightbox.classList.remove('show-lightbox');

        video.currentTime = 0;
        video.pause();
    }

    lbBtn.addEventListener('click', showLightbox);
    video.addEventListener('ended', hideLightbox);
    lbClose.addEventListener('click', hideLightbox);

})();
