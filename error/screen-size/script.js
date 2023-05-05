const urlParams = new URLSearchParams(window.location.search);
const prevUrl = urlParams.get('prevUrl') ?? 'https://mcmd-dev.github.io/';

function redirectUser(prevUrl) {
    const errors = document.querySelectorAll('.error');
        for (const error of errors) {
            error.style.display = 'none';;
        }
        const redirectText = document.querySelector('.redirect');
        redirectText.style.display = 'flex';
        setTimeout(function() {
            window.location.replace(prevUrl);
        }, 2000);
}

if (window.innerHeight > 501) {
    redirectUser(prevUrl);
}

window.addEventListener("resize", function() {
    if (window.innerHeight > 501) {
        redirectUser(prevUrl);
    }
});
