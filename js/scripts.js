
// Twitter
!function(d,s,id){
  var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';
  if(!d.getElementById(id)){js=d.createElement(s);
    js.id=id;js.src=p+'://platform.twitter.com/widgets.js';
    fjs.parentNode.insertBefore(js,fjs);
  }}(document, 'script', 'twitter-wjs');

// Facebook SDK
(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = 'https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v2.12';
    fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));

//Google maps API
function initMap() {
        var myLatlng = {lat: 43.7340, lng: 7.4210};

        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 15,
          center: myLatlng
        });

        var marker = new google.maps.Marker({
          position: myLatlng,
          map: map,
          title: 'Click to zoom'
        });

        map.addListener('center_changed', function() {
          // 5 seconds after the center of the map has changed, pan back to the
          // marker.
          window.setTimeout(function() {
            map.panTo(marker.getPosition());
          }, 5000);
        });

        marker.addListener('click', function() {
          map.setZoom(8);
          map.setCenter(marker.getPosition());
        });
      }


// Waits until page is ready before launching
$(document).ready(function(){

  //Tool tip
    $(function () {
      $('[data-toggle="tooltip"]').tooltip()
    })

   // Smooth scrolling
    var $root = $('html, body');
    $('.navbar-nav a').click(function() {
      var href = $.attr(this, 'href');
      if (href != undefined && href != '#') {
        $root.animate({
          scrollTop: $(href).offset().top
        }, 500, function () {
          window.location.hash = href;
        });
      }
    return false;
    });

    // Hides the message box when submit button is pressed.
    $('#form-button').on('click', function() {
      var comment = $('#message').val();


      if(comment === ""){
        $('#message').css('border', 'solid 3px red');
      }else{
        console.log(comment.toUpperCase()+ " : This was your msg") ;
        $('#visible-comment').html(comment);
        $('#message').hide();
      };
      return false;
    });

    // Changes the background color of the form fields
    $('#firstName, #lastName, #email, #message').css('background', 'rgba(219, 241, 251, 1.000)');

    // Alert msg on statup
    $(function(){
      alert("Welcome to my page");
    });

    //Count the message box characters and display number
    $('#message').on('keyup', function(){
      console.log('keyup active');
      var charCount = $('#message').val().length;
      console.log(charCount);
      $("#char-count").html(charCount);

      if(charCount > 50) {
        $('#char-count').css('color', 'red');
      } else {
        $('#char-count').css('color', 'white');
      }
    });


  // work section
  for(var i = 0; i < works.length; ++i ) {
  $("#work").append("\
    <div class='col-sm-6 col-md-4 text-center'>\
      <div class='thumbnail'>\
        <img style='width: 100px; height: 100px' src='" + works[i].img + "' alt='Sample Image'>\
        <div class='caption'>\
          <h3>" + works[i].title + "</h3>\
          <p>" + works[i].description + "</p>\
          <p><a href='"+ works[i].link + "' class='btn btn-primary' role='button'>Show</a> <a href='#'></a></p>\
        </div>\
  ");
    var images = $("#work img");
      if(i%2 === 0){
    $(images[i]).css("border", "2px solid DodgerBlue");
      } else {
    $(images[i]).css("border", "2px solid salmon");
  };
};
$(".thumbnail").mouseenter(function(){
  $(".caption h3, .caption p", this).show();
});
$(".thumbnail").mouseleave(function(){
  $(".caption h3, .caption p", this).hide();
});

});
