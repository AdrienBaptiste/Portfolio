const map = document.querySelector('#map');
const mapImage = document.querySelector('#map img');

const maxAngleX = 15;
const maxAngleY = 15;

map.addEventListener('mousemove', event => {

    mapImage.style.transition = 'transform 0.1s';


    const { offsetX, offsetY } = event;
    const width = mapImage.offsetWidth;
    const height = mapImage.offsetHeight;
    let angleX = (offsetY - height / 2) / (height / 2) * -maxAngleX;
    let angleY = (offsetX - width / 2) / (width / 2) * maxAngleY;
    angleX = Math.max(-maxAngleX, Math.min(maxAngleX, angleX));
    angleY = Math.max(-maxAngleY, Math.min(maxAngleY, angleY));
    mapImage.style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg)`;

    // Calculer l'offset de l'ombre en fonction de l'angle de rotation
    const shadowX = Math.sin(angleX * Math.PI / 180) * 10;
    const shadowY = Math.sin(angleY * Math.PI / 180) * 10;
    mapImage.style.boxShadow = `0px 0px 100px 20px rgba(143, 0, 131, 0.568)`;
});

map.addEventListener('mouseleave', () => {
    mapImage.style.transform = 'rotateX(10deg) rotateY(20deg)';
    mapImage.style.transition = 'transform 0.5s';
});