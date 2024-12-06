
// Placeholder for animations or interactivity
document.querySelectorAll('.exam-box').forEach(box => {
    box.addEventListener('mouseover', () => {
        box.style.backgroundColor = '#0059b3';
    });
    box.addEventListener('mouseout', () => {
        box.style.backgroundColor = '#004080';
    });
});
