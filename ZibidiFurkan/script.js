function showContent(section) {
    let sections = document.querySelectorAll('.contentSection');
    sections.forEach(sec => sec.classList.remove('active'));
    document.getElementById(section).classList.add('active');
}

document.addEventListener("DOMContentLoaded", () => {
    showContent('html'); // Varsayılan olarak HTML sayfasını göster
});