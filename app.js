// アラートメッセージ表示
// alert("Hello World");


// 変数定義
// let hello = "Hellow World";
// alert(hello);

// 文字列つなげる
// alert("Hello" + "World");

// 変数定義してつなげる
// let str1 = "Hello";
// let str2 = "World!";
// alert(str1 + str2);

// 変数定義して条件分岐
// let orange = 100;
// let apple = 120;

// if(orange < apple) {
//   alert("みかんの値段がりんごより安い");
// } else if(orange == apple){
//   alert("みかんとりんごが同じ値段");
// } else{
//   alert("みかんの値段がりんごより高い");
// }

// 変数定義して繰り返し処理1
// let max = 100;
// let num = 1;
// let count = 0;

// while(num < max){
//   num = num * 2;
//   count = count + 1;
// }

// alert("2をかけ続けて" + max + "を超えるのに必要だった回数は" + count + "回です");


// 変数定義して必要な回数繰り返し処理をする
// let i;
// let num = 0;
// for(i = 1; i < 11; i++){
//   num = num + i;
// }

// alert("1から10まで足し算した結果は" + num + "です");


// alert(5 - 2);
// alert(192 * 333);
// alert(1941566 / 2);

// 練習
// let money = 150
// let orange = 1000
// let diff = (money - orange)

// if (diff >= 0){
//   alert
//   ("所持金は" + money + "円、みかんは" + orange + "円です。"
//   + "残金は" + diff + "円です")
// } else{
//   alert("所持金は" + money + "円、みかんは" + orange + "円です。"
//   + "みかんは買えません")
// }

// ------------------------------------------

// 関数(結合)　引数と戻り値
// function addString(strA){
//   let addStr = "Hello" + strA;
//   return addStr;
// }

// メイン部分
// let alertString;
// alertString = addString("WebCamp");

// 作成した関数の呼び出し
// alert(alertString);

// // 作成した関数
// function addString(strA){
//   let addStr = "Hello" + strA;
//   return addStr;
// }

// 入力ダイアログ
// let promptStr = prompt('何か好きな文字を入力してください。');
// alert(promptStr);

// 複数関数の定義
// let user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください。');
// alert('あなたの選んだ手は' + user_hand + 'です。');

// function getJShand(){
//   let js_hand_num = Math.floor( Math.random() * 3 );

//   if(js_hand_num == 0){
//     js_hand = "グー";
//   } else if(js_hand_num == 1){
//     js_hand = "チョキ";
//   } else if(js_hand_num == 2){
//     js_hand = "パー";
//   }

//   return js_hand;
// }

// JavaScriptとのじゃんけん作成
let user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください。');


let js_hand = getJShand();
let judge = winLose(user_hand, js_hand);

alert('あなたの選んだ手は' + user_hand + 'です。\n\rJavaScriptの選んだ手は' + js_hand + 'です。\n\r結果は' + judge + 'です。');

// ランダムでJSのじゃんけんの手を作成
function getJShand(){
  let js_hand_num = Math.floor( Math.random() * 3 );
  let hand_name;

  if(js_hand_num == 0){
    hand_name = "グー";
  } else if(js_hand_num == 1){
    hand_name = "チョキ";
  } else if(js_hand_num == 2){
    hand_name = "パー";
  }

  return hand_name;
}

// ユーザの手をJSの手を比べる
function winLose(user, js){
  let winLoseStr;

  if(user == "グー"){
    if(js == "グー"){
      winLoseStr = "あいこ";
    } else if(js == "チョキ"){
      winLoseStr = "勝ち";
    } else if(js == "パー"){
      winLoseStr = "負け";
    }
  } else if(user == "チョキ"){
    if(js == "グー"){
      winLoseStr = "負け";
    } else if(js == "チョキ"){
      winLoseStr = "あいこ";
    } else if(js == "パー"){
      winLoseStr = "勝ち";
    }
  } else if(user == "パー"){
    if(js == "グー"){
      winLoseStr = "勝ち";
    } else if(js == "チョキ"){
      winLoseStr = "負け";
    } else if(js == "パー"){
      winLoseStr = "あいこ";
    }
  }

  return winLoseStr;
}
