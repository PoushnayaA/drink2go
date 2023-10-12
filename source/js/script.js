/* в этот файл добавляет скрипты*/
const toggleButton = document.querySelector('.navigation__toggle')
const navigation = document.querySelector('.navigation')
const navigationList = document.querySelector('.navigation__list')


toggleButton.addEventListener('click', function () {
  if (navigation.classList.contains('navigation--closed')) {
    navigation.classList.remove('navigation--closed');
    navigation.classList.add('navigation--opened');
    navigationList.classList.remove('navigation__list--closed')
  } else {
    navigation.classList.add('navigation--closed');
    navigation.classList.remove('navigation--opened');
    navigationList.classList.add('navigation__list--closed')
  }
});
