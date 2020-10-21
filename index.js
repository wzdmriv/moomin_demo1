const medias = {
  audio: false,
  video: {
    facingMode: {
        exact: "environment" // リアカメラにアクセス
      }
  }
};
const video = document.getElementById("video");
const promise = navigator.mediaDevices.getUserMedia(medias);

promise.then(successCallback)
       .catch(errorCallback);


function successCallback(stream) {
  video.srcObject = stream;
};

function errorCallback(err) {
  alert(err);
};

$(function(){
    $(window).load(function(){
        $('.contents li').each(function(i){
            $(this).delay(i * 100).css({visibility:'visible',opacity:'0'}).animate({opacity:'1'},1000);
        });
    });
});