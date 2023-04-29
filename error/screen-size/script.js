const urlParams = new URLSearchParams(window.location.search);
const prevUrl = urlParams.get('prevUrl') ?? 'https://mcmd.github.io/';

function redirectUser(prevUrl) {
    const errors = document.querySelectorAll('.error');
        for (let i = 0; i < errors.length; i++) {
            errors[i].style.display = 'none';
        }
        const redirectText = document.querySelector('.redirect');
        redirectText.style.display = 'flex';

        setTimeout(function() {
            window.location.href = prevUrl;
        }, 2000);
}

if (screen.height > 501) {
    redirectUser(prevUrl);
}

window.addEventListener("resize", function() {
    if (screen.height > 501) {
        redirectUser(prevUrl);
    }
});
