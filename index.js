const container = document.querySelector('#container');
const signInButton = document.querySelector('#signIn');
const signUpButton = document.querySelector('#signUp');
signUpButton.addEventListener('click', () => container.classList.add
('right-panel-active'));
signInButton.onclick = function () {
    self.location = 'https://qiancong.me/reward/';
}
