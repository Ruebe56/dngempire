// Section 1 Slideshow
let slideIndex1 = 0;
showSlides1();

function showSlides1() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex1++;
    if (slideIndex1 > slides.length) { slideIndex1 = 1 }    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex1 - 1].style.display = "block";  
    dots[slideIndex1 - 1].className += " active";
    setTimeout(showSlides1, 3000); 
}

function currentSlide(n) {
    slideIndex1 = n - 1;
    showSlides1();
}

// Section 18 Slideshow
let slideIndex18 = 0;
const slides18 = document.querySelectorAll('.slideshow-image-umrah');
const slideshowWrapper18 = document.querySelector('.slideshow-wrapper-umrah');

function showSlides18() {
    slideshowWrapper18.style.transform = `translateX(-${slideIndex18 * 100}%)`;
}

function changeSlideUmrah(n) {
    slideIndex18 = (slideIndex18 + n + slides18.length) % slides18.length;
    showSlides18();
}

setInterval(() => {
    changeSlideUmrah(1);
}, 3000); 

document.getElementById('menu-toggle').addEventListener('click', function() {
    document.getElementById('nav-menu').classList.add('active');
});

document.getElementById('menu-close').addEventListener('click', function() {
    document.getElementById('nav-menu').classList.remove('active');
});

document.addEventListener("DOMContentLoaded", function() {
    const videoSection = document.getElementById('video-section');
    const youtubeVideo = document.getElementById('youtube-video');
    const videoSrc = "https://www.youtube.com/embed/hRd_KX4SqPk?autoplay=1&enablejsapi=1"; 

    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function checkVideoAutoplay() {
        if (isElementInViewport(videoSection)) {
            youtubeVideo.src = videoSrc; 
            window.removeEventListener('scroll', checkVideoAutoplay);
        }
    }

    window.addEventListener('scroll', checkVideoAutoplay);
});

document.addEventListener("DOMContentLoaded", function() {
    const openPopupButton = document.getElementById('open-popup');
    const closePopupButton = document.getElementById('close-popup');
    const popup = document.getElementById('popup');


    openPopupButton.addEventListener('click', function() {
        popup.classList.remove('hidden'); 
    });

    closePopupButton.addEventListener('click', function() {
        popup.classList.add('hidden'); 
    });

    popup.addEventListener('click', function(event) {
        if (event.target === popup) {
            popup.classList.add('hidden'); 
        }
    });
});