
// document.querySelector('')は、HTML全体を表すdocumentオブジェクトの名からセレクターを持つ"要素"を取得
  // ここでは、htmlから[<p id="colortext">カラーコードを検索</p>]の要素が取得できる
const text = document.querySelector('#colortext');
  // ここでは、htmlから[<input id="colorPicker" type="color">]の要素が取得できる
const color = document.querySelector('#colorPicker');

// id="colortext"のp要素のテキストを変える
//  .textContentで、要素内のテキストを変えることができる
  // 何に変えるかは、
  //    先頭に、カラーコードの文字列
  //    その後に、id="colorPicker"のinput要素の値（#000000など）

// 関数colorBgの定義
const colorBg = () => {
text.textContent = `カラーコード：${color.value}`;
}




// カラーピッカーで色を選んだときにイベントを動作させる
  // 何が=>色が；最初のcolorは、定義された定数：colorでinput要素のこと・・・これがきっかけとなる要素
  // addEventListenerはイベントを設定する時のメソッド
  // カッコの中に
  //  1.イベント名：input=入力されたときにイベントが発生する
  //  2.イベントが起きた時の処理を設定　ここでは、colorBgという処理(関数)
color.addEventListener('input',colorBg);
