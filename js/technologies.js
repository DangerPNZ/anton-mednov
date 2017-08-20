var technologies = document.querySelector('.technologies__container');
var technologiesItem = document.querySelectorAll('.technologies__item');

var deactivItem = function (event) {
  if (!event.target.closest('.technologies__item').classList.contains('technologies__item--active')) {
    for (var i = 0; i < technologiesItem.length; i++) {
      technologiesItem[i].classList.remove('technologies__item--active');
    }
  }
};

technologies.addEventListener('click', function (event) {
  deactivItem(event);
  event.target.closest('.technologies__item').classList.toggle('technologies__item--active');
});
