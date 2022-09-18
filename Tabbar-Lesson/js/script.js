/* global $ */
$('#tab-contents .tab[id != "tab1"]').hide(); /* tab1以外を非表示 */

$('#tab-menu a').on('click', function(event) { /* クリック時に実行 */
  $("#tab-contents .tab").hide(); /* いったん全コンテンツを非表示 */
  $("#tab-menu .active").removeClass("active"); /* 表示タブのactiveクラス削除 */
  $(this).addClass("active"); /* クリックされたタブにactiveクラスを追加 */
  $($(this).attr("href")).show(); 
  /* ↑矢印クリックされたとき.attr()でhref属性を取得.show()で内容を表示*/
});
