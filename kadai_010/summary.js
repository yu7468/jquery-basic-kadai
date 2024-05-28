$(function () {
  //文字カラー変更
  $("#change-color").on("click", function () {
    $("#target").css("color", "blue");
  });
  //文字内容変更
  $("#change-text").on("click", function () {
    $("#target").text("Hello!");
  });
  // フェイドアウト
  $("#fade-out").on("click", function () {
    $("#target").fadeOut();
  });

  // フェードインする
  $("#fade-in").on("click", function () {
    $("#target").fadeIn();
  });
});
