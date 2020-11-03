// 画像用配列
var images = [
    'prt1.png',
    'prt2.png',
    'prt3.png',
    'prt4.png',
    'prt5.png',
    'prt6.png'
];



(function(){
    // 設定
    
    var interval =3000; // 切り替わりの間隔（ミリ秒）
    var fade_speed = 500;// フェード処理の早さ（ミリ秒）
    $("#img").hide();
    $(".fade-img-box img:first").addClass("active").show();
    var changeImage = function(){
            var $active = $(".fade-img-box img.active");
            var $next = $active.next("img").length?$active.next("img"):$(".fade-img-box img:first");
       
            $active.fadeOut(fade_speed).removeClass("active");
            $next.fadeIn(fade_speed).addClass("active");
            console.log("hello")
    }
    
    $(document).ready(setInterval(changeImage,interval));
}());