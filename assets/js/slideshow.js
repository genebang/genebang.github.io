$(document).ready(function() {
  $('.slideshow.email > .slide:gt(0)').hide();
  $('.slideshow.metrics > .slide:gt(0)').hide();
  // $('.slideshow.share > .slide:gt(0)').hide();
  $('.slideshow.ideas > .slide:gt(0)').hide();

  $('#newsletter-modal .arrow.right').click(function() {
    $(this).prev().find('.slide:first').hide().next().show().end().appendTo('.slideshow.email');
  })
  $('#newsletter-modal .arrow.left').click(function() {
    $(this).next().find('.slide:last').prependTo('.slideshow.email').end().show().next().hide();
  })
  $('#metrics-modal .arrow.right').click(function() {
    $(this).prev().find('.slide:first').hide().next().show().end().appendTo('.slideshow.metrics');
  })
  $('#metrics-modal .arrow.left').click(function() {
    $(this).next().find('.slide:last').prependTo('.slideshow.metrics').end().show().next().hide();
  })
  // $('#share-modal .arrow.right').click(function() {
  //   $(this).prev().find('.slide:first').hide().next().show().end().appendTo('.slideshow.share');
  // })
  // $('#share-modal .arrow.left').click(function() {
  //   $(this).next().find('.slide:last').prependTo('.slideshow.share').end().show().next().hide();
  // })
  $('#ideas-modal .arrow.right').click(function() {
    $(this).prev().find('.slide:first').hide().next().show().end().appendTo('.slideshow.ideas');
  })
  $('#ideas-modal .arrow.left').click(function() {
    $(this).next().find('.slide:last').prependTo('.slideshow.ideas').end().show().next().hide();
  })
})