// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require jquery
//= require activestorage

window.onload = function () {
  btn = document.getElementsByClassName("btn")
  var btn_submit = document.getElementsByClassName("btn-submit")[0];
  btn_submit.onclick = function () {
    for ( var i=0; i<btn.length; i++ ) {
      document.getElementsByClassName("btn")[i].removeAttribute("href");
    }
  }
}
