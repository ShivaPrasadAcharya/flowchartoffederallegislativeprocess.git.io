// script.js
document.addEventListener('DOMContentLoaded', function() {
    const features = document.querySelectorAll('.feature-item');
    
    features.forEach((feature, index) => {
        feature.style.animationDelay = `${index * 0.2}s`;
        feature.classList.add('fade-in');
    });

    // Add hover effect
    features.forEach(feature => {
        feature.addEventListener('mouseenter', () => {
            feature.style.transform = 'translateY(-5px)';
        });
        
        feature.addEventListener('mouseleave', () => {
            feature.style.transform = 'translateY(0)';
        });
    });
});