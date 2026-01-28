// Toggle Video Visibility
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
