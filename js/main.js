var elSiteHeader = document.querySelector('.site-header');
var elSiteHeaderToggler = document.querySelector('.site-header__nav-toggler');
var elSiteMains = document.querySelectorAll('.director');
var elSiteMainTogglers = document.querySelectorAll('.director__card-toggle');

elSiteHeaderToggler.addEventListener('click', function () {
  elSiteHeader.classList.toggle('site-header--open');
});

elSiteMainTogglers.forEach(function (elSiteMainToggler) {
  elSiteMainToggler.addEventListener('click', function () {
    elSiteMainToggler.classList.toggle('director__card-toggle--close');
  });
});

elSiteMainTogglers.forEach(function (elSiteMainToggler, index) {
  elSiteMainToggler.addEventListener('click', function () {
    console.log(index)
    elSiteMains.forEach(function (elSiteMain, number) {
      if (index == number) {
        elSiteMain.classList.toggle('director--open');
      }
    });
  });
});
