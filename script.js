const container = document.querySelector('.container');

const cloneContainer = container.cloneNode(true);
cloneContainer.id = 'dark-container';

document.body.appendChild(cloneContainer);
cloneContainer.classList.remove('active');

const toggleIcons = document.querySelectorAll('.toggle-icon');
const icons = document.querySelectorAll('.toggle-icon i');
const contactLink = document.getElementById('contact-link');
const phoneInfo = document.getElementById('phone-info');
contactLink.addEventListener('click', () => {
    phoneInfo.style.display = phoneInfo.style.display === 'none' ? 'flex' : 'none';
});
const darkContainer = document.querySelector('#dark-container');

const darkContainerImg = document.querySelector('#dark-container .home-img img');

darkContainerImg.src = 'digital-passport.jpg';

toggleIcons.forEach(toggle =>{
    toggle.addEventListener('click', () => {

        toggle.classList.add('disabled');

        setTimeout(() => {
            toggle.classList.remove('disabled');
        }, 1500);
        icons.forEach(icon => {
            icon.classList.toggle('bx-sun');
        });

        container.classList.toggle('active');
        darkContainer.classList.toggle('active');
    });
});