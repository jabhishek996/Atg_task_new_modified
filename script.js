let sections = document.querySelectorAll('.panel');
let dot = document.querySelectorAll('.dot');


window.onscroll=()=>{
  sections.forEach(sec=>{
let top=window.scrollY;
let offset=sec.offsetTop-50;
let height=sec.offsetHeight;
let id =sec.getAttribute('id');
  


if(top >= offset && top < offset + height){
  sections.forEach(links =>{
    links.classList.remove('active');
    if(id== 'pg1')
    {
      document.querySelector('#svg_circle').style.strokeDashoffset='1256';
      document.querySelector('.circle_box').style.backgroundColor='#6213ac';
    }
   else if(id== 'pg2')
    {
      document.querySelector('#svg_circle').style.strokeDashoffset='1099';
      document.querySelector('.circle_box').style.backgroundColor='#4925c6';
    }
   else if(id== 'pg3')
    {
      document.querySelector('#svg_circle').style.strokeDashoffset='942';
      document.querySelector('.circle_box').style.backgroundColor='#0d0f38';
    }
   else if(id== 'pg4')
    {
      document.querySelector('#svg_circle').style.strokeDashoffset='785';
      document.querySelector('.circle_box').style.backgroundColor='#122136';
    }
   else if(id== 'pg5')
    {
      document.querySelector('#svg_circle').style.strokeDashoffset='628';
      document.querySelector('.circle_box').style.backgroundColor='#114599';
    }
   else if(id== 'pg6')
    {
      document.querySelector('#svg_circle').style.strokeDashoffset='471';
      document.querySelector('.circle_box').style.backgroundColor='#032a91';
    }
   else if(id== 'pg7')
    {
      document.querySelector('#svg_circle').style.strokeDashoffset='314';
      document.querySelector('.circle_box').style.backgroundColor='#017b49';
    }
  });

}})
}



$(window).scroll(function () {

  // selectors
  var $window = $(window),
    $content = $('.content'),
    $panel = $('.panel');
  $left = $('.left');

  // Change 33% earlier than scroll position so colour is there when you arrive.
  var scroll = $window.scrollTop() + ($window.height() / 3);

  $panel.each(function () {
    var $this = $(this);

    // if position is within range of this panel.
    // So position of (position of top of div <= scroll position) && (position of bottom of div > scroll position).
    // Remember we set the scroll to 33% earlier in scroll var.
    if ($this.position().top <= scroll && $this.position().top + $this.height() > scroll) {

      // Remove all classes on body with color-
      $content.removeClass(function (index, css) {
        return (css.match(/(^|\s)color-\S+/g) || []).join(' ');
      });
      $left.removeClass(function (index, css) {
        return (css.match(/(^|\s)color-\S+/g) || []).join(' ');
      });

      // Add class of currently active div
      $content.addClass('color-' + $(this).data('color'));
      $left.addClass('color-' + $(this).data('color'));
    }
  });

}).scroll();



$(function () {
  $.scrollify({
    section: ".panel",
  });
});







