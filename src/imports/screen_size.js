if (window.innerHeight < 500) {
    window.location.href = "/error/screen-size/index.html?prevUrl=" + encodeURIComponent(window.location.href);
}

window.addEventListener("resize", function() {
    if (window.innerHeight < 500) {
        window.location.href = "/error/screen-size/index.html?prevUrl=" + encodeURIComponent(window.location.href);
    }
});