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

const slider = document.querySelector('.slide');
const sliderWrapper = document.querySelector('.slider__wrapper')
const slides = document.querySelectorAll('.slide__img');
const slidesContent = document.querySelectorAll('.slide__content');
const prevBtn = document.querySelector('.slider__button--prev');
const nextBtn = document.querySelector('.slider__button--next');
let currentIndex = 0;
const buttons = document.querySelectorAll('.pagination__button');
const buttonWrapper = document.querySelectorAll('.slider__button-wrapper');

function showSlide(index) {
  slides.forEach((slide) => {
    slide.classList.remove('active');
  });
  slidesContent.forEach((slide) => {
    slide.classList.remove('active');
  });
  slides[index].classList.add('active');
  slidesContent[index].classList.add('active');
  buttons[index].classList.add('pagination__button--current');

  if (index === 1) {
    prevBtn.disabled = false;
    nextBtn.disabled = false;
    sliderWrapper.classList.add('slider__wrapper--lavander')
    if (sliderWrapper.classList.contains('slider__wrapper--espresso')) sliderWrapper.classList.remove('slider__wrapper--espresso');
  } else if (index === 2) {
    prevBtn.disabled = false;
    nextBtn.disabled = true;
    if (sliderWrapper.classList.contains('slider__wrapper--lavander')) sliderWrapper.classList.remove('slider__wrapper--lavander');
    sliderWrapper.classList.add('slider__wrapper--espresso')
  } else if (index === 0) {
    prevBtn.disabled = true;
    nextBtn.disabled = false;
    if (sliderWrapper.classList.contains('slider__wrapper--lavander')) sliderWrapper.classList.remove('slider__wrapper--lavander');
    if (sliderWrapper.classList.contains('slider__wrapper--espresso')) sliderWrapper.classList.remove('slider__wrapper--espresso');
  }
}

function goToPrevSlide() {
  if (currentIndex === 1) {
    buttons[currentIndex].classList.remove('pagination__button--current');
    currentIndex--;
    showSlide(currentIndex);
    prevBtn.disabled = true;
  } else {
    buttons[currentIndex].classList.remove('pagination__button--current');
    currentIndex--;
    prevBtn.disabled = false;
    nextBtn.disabled = false;
    showSlide(currentIndex);
  }
}

function goToNextSlide() {
  prevBtn.disabled = false;
  prevBtn.addEventListener('click', goToPrevSlide);
  if (currentIndex === slides.length - 2) {
    buttons[currentIndex].classList.remove('pagination__button--current');
    currentIndex++;
    showSlide(currentIndex);
    nextBtn.disabled = true;
  } else {
    buttons[currentIndex].classList.remove('pagination__button--current');
    currentIndex++;
    prevBtn.disabled = false;
    nextBtn.disabled = false;
    showSlide(currentIndex);
  }
}

prevBtn.addEventListener('mousedown', function() {
  buttonWrapper[0].style.background = 'linear-gradient(90deg, rgba(120, 89, 207, 0.25) 0%, rgba(120, 89, 207, 0) 100%)';
});

prevBtn.addEventListener('mouseup', function() {
  buttonWrapper[0].style.background = 'none';
});

nextBtn.addEventListener('mousedown', function() {
  buttonWrapper[1].style.background = 'linear-gradient(270deg, rgba(120, 89, 207, 0.25) 0%, rgba(120, 89, 207, 0) 100%)';
});

nextBtn.addEventListener('mouseup', function() {
  buttonWrapper[1].style.background = 'none';
});

prevBtn.disabled = true;
nextBtn.addEventListener('click', goToNextSlide);

const buttonsArray = Array.from(buttons);

buttonsArray.forEach((element) => {
  element.addEventListener('click', () => {
    buttons[currentIndex].classList.remove('pagination__button--current');
    currentIndex = buttonsArray.indexOf(element);
    showSlide(currentIndex);
  });
})

showSlide(currentIndex);
