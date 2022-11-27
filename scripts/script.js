function changeImage(anything) {
    document.getElementById('slider').src = anything;
}
function toggleMenu() {
    const menuToggle = document.querySelector('.menuToggle');
    const navigation = document.querySelector('.navigation');
    const line = document.querySelector('.line');
    menuToggle.classList.toggle('active');
    navigation.classList.toggle('active');
    line.classList.toggle('active');
}
function toggleAlbum(n) {
    const button = document.querySelector('.button' + n);
    const window = document.querySelector('.window' + n);
    const shadow = document.querySelector('.shadow');
    button.classList.toggle('active');
    window.classList.toggle('active');
    shadow.classList.toggle('active');
}
