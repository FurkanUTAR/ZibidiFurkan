function showContent(sectionId) {
    // Tüm içerik bölümlerini gizle
    document.querySelectorAll('.contentSection').forEach(section => {
        section.style.display = 'none';
    });

    // Seçilen bölümü göster
    document.getElementById(sectionId).style.display = 'block';
}

// Varsayılan olarak HTML içeriğini göster
document.addEventListener("DOMContentLoaded", function() {
    showContent('html');
});
