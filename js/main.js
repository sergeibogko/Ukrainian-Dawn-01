//  menuBurger
const menuBtn = document.querySelector('.menu__btn');
const menuMobile = document.querySelector('.header__list');
if (menuBtn) {
  menuBtn.addEventListener('click', function (e) {
    document.body.classList.toggle('_lock');
    menuBtn.classList.toggle('menu--open');
    menuMobile.classList.toggle('menu--open');
  });
}
// Прокрутка при клике
const menuLinks = document.querySelectorAll('.header__link[data-goto]');
if (menuLinks.length > 0) {
  menuLinks.forEach((menuLink) => {
    menuLink.addEventListener('click', onMenuLinkClick);
  });
  function onMenuLinkClick(e) {
    const menuLink = e.target;
    if (
      menuLink.dataset.goto &&
      document.querySelector(menuLink.dataset.goto)
    ) {
      const gotoBlock = document.querySelector(menuLink.dataset.goto);
      const gotoBlockValue =
        gotoBlock.getBoundingClientRect().top +
        pageYOffset -
        document.querySelector('header').offsetHeight;
      if (menuBtn.classList.contains('menu--open')) {
        document.body.classList.remove('_lock');
        menuBtn.classList.remove('menu--open');
        menuMobile.classList.remove('menu--open');
      }

      window.scrollTo({
        top: gotoBlockValue,
        behavior: 'smooth',
      });
      e.preventDefault();
    }
  }
}
// arrowUp
const btnUp = {
  el: document.querySelector('.arrow'),
  show() {
    // удалим у кнопки класс btn-up_hide
    this.el.classList.remove('arrow__hide');
  },
  hide() {
    // добавим к кнопке класс btn-up_hide
    this.el.classList.add('arrow__hide');
  },
  addEventListener() {
    // при прокрутке содержимого страницы
    window.addEventListener('scroll', () => {
      // определяем величину прокрутки
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      // если страница прокручена больше чем на 400px, то делаем кнопку видимой, иначе скрываем
      scrollY > 400 ? this.show() : this.hide();
    });
    // при нажатии на кнопку .btn-up
    document.querySelector('.arrow').onclick = () => {
      // переместим в начало страницы
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    };
  },
};

btnUp.addEventListener();
