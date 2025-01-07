// Toggle Gallery Visibility
document.getElementById('toggle-gallery-button').addEventListener('click', function () {
    const gallery = document.getElementById('gallery');
    if (gallery.style.display === 'none') {
        gallery.style.display = 'grid';
        this.textContent = 'Hide Gallery';
    } else {
        gallery.style.display = 'none';
        this.textContent = 'Show Gallery';
    }
});

// Toggle Video Visibility
document.getElementById('toggle-video-button').addEventListener('click', function () {
    const video = document.getElementById('video');
    if (video.style.display === 'none') {
        video.style.display = 'block';
        this.textContent = 'Hide Video';
    } else {
        video.style.display = 'none';
        this.textContent = 'Show Video';
    }
});

// Divider Animation
document.addEventListener('scroll', function () {
    const divider = document.getElementById('divider-line');
    const gallery = document.getElementById('gallery-section');
    if (window.scrollY > gallery.offsetTop - 200) {
        divider.classList.add('active');
    }
});

function isElementInView(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );
}

function slideInParagraphs() {
    const paragraph1 = document.getElementById('paragraph-1');
    const paragraph2 = document.getElementById('paragraph-2');
    const descriptionSection = document.getElementById('description');
    const rect = descriptionSection.getBoundingClientRect();

    if (rect.top <= 0 && rect.bottom >= window.innerHeight) {
        if (lastScrollTop > window.scrollY) {
            // Scrolling up
            paragraph1.classList.add('in-view');
            paragraph2.classList.remove('in-view');
        } else {
            // Scrolling down
            paragraph1.classList.remove('in-view');
            paragraph2.classList.add('in-view');
        }
    }

    lastScrollTop = window.scrollY;
}

let lastScrollTop = 0;
window.addEventListener('scroll', slideInParagraphs);
