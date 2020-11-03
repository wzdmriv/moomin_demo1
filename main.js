// 画像用配列
var images = [
    'prt1.png',
    'prt2.png',
    'prt3.png',
    'prt4.png',
    'prt5.png',
    'prt6.png'
];

window.onload = function(){
    // 画像プリロード
    for (i = 0; i < images.length; i++){
        var img = document.createElement('img');
        img.src = images[i];
    }
}

(function(){
    // 設定
    
    var interval =3000; // 切り替わりの間隔（ミリ秒）
    var fade_speed = 500;// フェード処理の早さ（ミリ秒）
    $(".fade-img-box img").hide();
    
}());