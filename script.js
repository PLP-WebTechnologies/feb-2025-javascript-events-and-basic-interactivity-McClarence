// script.js

// Button Click + Long Press
const magicButton = document.getElementById('magicButton');
let pressTimer;

magicButton.addEventListener('click', () => {
    magicButton.textContent = 'You clicked me!';
    magicButton.style.backgroundColor = '#28a745';
});

magicButton.addEventListener('mousedown', () => {
    pressTimer = setTimeout(() => {
        alert('🎉 Long press activated! Surprise! 🎉');
    }, 1000);
});

magicButton.addEventListener('mouseup', () => {
    clearTimeout(pressTimer);
});

// Image Gallery
const images = ['images/image1.jpg', 'images/image2.jpg', 'images/image3.jpg'];
let currentIndex = 0;
const galleryImage = document.getElementById('galleryImage');

document.getElementById('prevBtn').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    galleryImage.src = images[currentIndex];
});

document.getElementById('nextBtn').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    galleryImage.src = images[currentIndex];
});

// Tabs
const tabButtons = document.querySelectorAll('.tabButton');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        tabContents.forEach(content => content.classList.remove('active'));
        document.getElementById(button.dataset.tab).classList.add('active');
    });
});

// Form Validation
const passwordInput = document.getElementById('password');
const feedback = document.getElementById('passwordFeedback');

passwordInput.addEventListener('input', () => {
    const value = passwordInput.value;
    if (value.length >= 8 && /[A-Z]/.test(value) && /\d/.test(value)) {
        feedback.textContent = '✔️ Good password strength!';
        feedback.style.color = 'green';
    } else {
        feedback.textContent = '❌ Password must be 8 chars, 1 uppercase, 1 number';
        feedback.style.color = 'red';
    }
});

// Secret Double Click
const secretArea = document.getElementById('secretArea');
secretArea.addEventListener('dblclick', () => {
    alert('🎉 You found the secret! 🎉');
});

// Keypress Detection
window.addEventListener('keydown', (e) => {
    if (e.key === 's') {
        alert('🔒 Secret key activated!');
    }
});
