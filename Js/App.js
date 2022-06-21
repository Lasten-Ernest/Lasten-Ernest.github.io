const navbarItems = document.querySelector('.items');
const menuOpener = document.querySelector('.bi-list');
const menuCloser = document.querySelector('.close');

menuOpener.onclick = () => {
  navbarItems.classList.add('show');
};

menuCloser.onclick = () => {
  navbarItems.classList.remove('show');
};
