document.addEventListener('DOMContentLoaded', () => {
  const tiltWrapper = document.querySelector('.tilt-wrapper');
  const tiltImage = document.querySelector('.tilt-image');

  tiltWrapper.addEventListener('mousemove', (event) => {
    const rect = tiltWrapper.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const deltaX = x - centerX;
    const deltaY = y - centerY;

    const rotateX = deltaY / centerY * -10; // Adjust tilt intensity
    const rotateY = deltaX / centerX * 10;  // Adjust tilt intensity

    tiltImage.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });

  tiltWrapper.addEventListener('mouseleave', () => {
    tiltImage.style.transform = 'rotateX(0deg) rotateY(0deg)';
  });
});
