function topNavfixed(element) {
  console.log('dsdfsdf')
  var _offsetTop = element.offsetTop;
  var offsetTopFixed = document.querySelector('.header').clientHeight;
  window.onscroll = function() {
    var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
    if (scrollTop + offsetTopFixed >= _offsetTop) {
      element.style.position = 'fixed';
      element.style.top = offsetTopFixed + 'px';
    }
    if (scrollTop + offsetTopFixed < _offsetTop) {
      element.removeAttribute('style');
    }
    // element.querySelectorAll('ul li').forEach( function(element, index) {
    //     element.style.width = "";
    // });
  };
}

export default { topNavfixed }
