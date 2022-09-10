// $(function(){
  // div要素のスタイル変更
  // $('.box1').css({
  //   'background-color': '#0000FF',
  //   'height': '100px'
  // });

  // アニメーションの追加
  // $('.box1').slideDown();
  // $('.box1').slideUp();

  // 非表示要素をjQueryで表示させる
    // $('.box1').show();
    // $('.box1').css({'background-color': '#0000FF'});

  // 要素の非表示
  // $('.box1').hide();
// });


// 確認問題
$(function(){
  $('.box1').slideDown(function (){
    $('.box1').css({
      'background-color': '#0000FF',
      'width': '200px',
      'height': '100px'
    }).slideUp();
  });
});
