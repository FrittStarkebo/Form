$(document).ready(function() {

  $("#fornamn").keyup(function() {

    var re = /^[a-z ,.'-]+$/i;

    var OK = re.exec($('#fornamn').val());

    if (!OK) {

      $(".felbild2").show(0)
      $(".rättbild2").hide(0)
      $("#fornamn").css("background-color", "red");

    } else {

      $('.rättbild2').show(0)
      $('.felbild2').hide(0)
      $('#fornamn').css('background', "green");
    }

    if ($('#fornamn').val().length === 0) {
      $(".felbild2").hide(0)
      $(".rättbild2").hide(0)
      $("#fornamn").css("background-color", "white");

    }
  });


  $("#phone").keyup(function() {

    var re = /^[0]{1}[0-9]{6,15}$/;

    var OK = re.exec($('#phone').val());

    if (!OK) {

      $(".felbild").show(0)
      $('.rättbild').hide(0)
      $('#phone').css('background', "red");

    } else {

      $('.rättbild').show();
      $(".felbild").hide(0)
      $('#phone').css('background', "green");

    }

    if ($('#phone').val().length === 0) {
      $(".felbild").hide(0)
      $('.rättbild').hide(0);
      $('#phone').css('background', "white");

    }
  });

  $("#efternamn").keyup(function() {

    var re = /^[a-z ,.'-]+$/i;

    var OK = re.exec($('#efternamn').val());

    if (!OK) {

      $(".felbild3").show(0)
      $(".rättbild3").hide(0)
      $("#efternamn").css("background-color", "red");

    } else {

      $('.rättbild3').show(0)
      $('.felbild3').hide(0)
      $('#efternamn').css('background', "green");
    }

    if ($('#efternamn').val().length === 0) {
      $(".felbild3").hide(0)
      $(".rättbild3").hide(0)
      $("#efternamn").css("background-color", "white");

    }
  });


  $("#email").keyup(function() {

    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    var OK = re.exec($('#email').val());

    if (!OK) {

      $(".felbild4").show(0)
      $(".rättbild4").hide(0)
      $("#email").css("background-color", "red");

    } else {

      $('.rättbild4').show(0)
      $('.felbild4').hide(0)
      $('#email').css('background', "green");
    }

    if ($('#email').val().length === 0) {
      $(".felbild4").hide(0)
      $(".rättbild4").hide(0)
      $("#email").css("background-color", "white");


    }
  });





});
