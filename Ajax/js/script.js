/*global $*/
const API_KEY = "XXX(APIキーを)";

$(function(){
  $('#btn').on('click', function() {
    // 入力された都市名でWebAPIに天気情報をリクエスト
    $.ajax({
      url: "https://api.openweathermap.org/data/2.5/weather?q="+$('#cityname').val()+"&units=metric&appid="+API_KEY,
      dataType : 'jsonp',
    // .done()は通信成功時を記述するメソッド
    }).done(function (data){
      // 場所
      $('#place').text(data.name);
      // 最高気温
      $('#temp_max').text(data.main.temp_max);
      // 最低気温
      $('#temp_min').text(data.main.temp_min);
      // 湿度
      $('#humidity').text(data.main.humidity);
      // 風速
      $('#speed').text(data.wind.speed);
      // 天気
      $('#weather').text(data.weather[0].main);
      // 天気アイコン
      $('img').attr("src","https://openweathermap.org/img/w/" + data.weather[0].icon + ".png");
      $('img').attr("alt",data.weather[0].main);

    // .fail()は通信失敗時を記述するメソッド
    }).fail(function (data) {
      alert('通信に失敗しました。');
    });
  });
});
