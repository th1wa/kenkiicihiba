// JavaScript Document

$(function () {
  var topBtn = $("#call");
  topBtn.hide();
  //スクロールが500に達したらボタン表示
  $(window).scroll(function () {
    if ($(this).scrollTop() > 500) {
      topBtn.fadeIn();
    } else {
      topBtn.fadeOut();
    }
  });
});
$(function () {
  var topBtn = $("#page-top");
  topBtn.hide();
  //スクロールが1000に達したらボタン表示
  $(window).scroll(function () {
    if ($(this).scrollTop() > 1000) {
      topBtn.fadeIn();
    } else {
      topBtn.fadeOut();
    }
  });
});

$(function () {
  var topBtn = $("#btn_top,#page-top");
  //スクロールでトップへもどる
  topBtn.click(function () {
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      500
    );
    return false;
  });
});

// sp-nav
$(function () {
  $(".hamburger").click(function () {
    $(this).toggleClass("active");

    if ($(this).hasClass("active")) {
      $(".globalMenuSp").addClass("active");
    } else {
      $(".globalMenuSp").removeClass("active");
    }
  });
});

// リンクスクロール
$(function () {
  $('a[href^="#"]').click(function () {
    var speed = 500;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? "html" : href);
    var position = target.offset().top;
    $("html, body").animate({ scrollTop: position }, speed, "swing");
    return false;
  });
});

(function () {
  document.addEventListener("DOMContentLoaded", function () {
    const btn = document.getElementById("dropdown__btn");
    if (btn) {
      btn.addEventListener("click", function () {
        this.classList.toggle("is-open");
      });
    }
  });
})();

$(function () {
  $("#subImg img").on("click", function () {
    //mainに切り替えるimgのsrc取得
    img = $(this).attr("src");
    //currentクラス付け替え
    $("#subImg li").removeClass("current");
    $(this).parent().addClass("current");
    //fadeOutできたらsrc変更してfadeIn
    $("#mainImg img").fadeOut(50, function () {
      $("#mainImg img")
        .attr("src", img)
        .on("load", function () {
          $(this).fadeIn();
        });
    });
  });

  var footer = $("footer").innerHeight();

  window.onscroll = function () {
    var point = window.pageYOffset; // 現在のスクロール地点
    var docHeight = $(document).height(); // ドキュメントの高さ
    var dispHeight = $(window).height(); // 表示領域の高さ

    if (point > docHeight - dispHeight - footer) {
      // スクロール地点>ドキュメントの高さ-表示領域-footerの高さ
      $(".fix_bar").addClass("is-hidden"); //footerより下にスクロールしたらis-hiddenを追加
    } else {
      $(".fix_bar").removeClass("is-hidden"); //footerより上にスクロールしたらis-hiddenを削除
    }
  };
});
