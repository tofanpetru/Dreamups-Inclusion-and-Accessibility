// IIFE function. 
(function() {
    "use strict"; 
  
    if (typeof speechSynthesis === 'undefined')
      return;
  
    var myPhrase = 'Sistemul audio a fost activat!';
    var voices = [];
    
    var ready = function(callback) { 
      var d = document, s = d.readyState;
  
      // DOMContentLoaded was fired
      if (s == "complete" || s == "loaded" || s == "interactive") {
        callback();
      } else {
        if (d.addEventListener) {
          d.addEventListener("DOMContentLoaded", callback, false);
        } else {
          d.attachEvent("onDOMContentLoaded", callback);
        }
      }
    };
 
    function handler() {

      if (document.body.className.match("text_speech_on")) {
        speekResponse(myPhrase)
      }
    };
  
    function getSelectionText() {
      var text = "";
      if (window.getSelection) {
        text = window.getSelection().toString();
      } else if (document.selection && document.selection.type != "Control") {
        text = document.selection.createRange().text;
      }
      return text;
    }
  
    // This is the on mouse up event 
    document.onmouseup = function(e) {
      if (!document.body.classList.contains("web_asset_on") && document.body.className.match("text_speech_on"))
      {
        setTimeout(function() {
          speechSynthesis.cancel();
          myPhrase = getSelectionText();
          handler();
        }, 1);
      }
    };
    function start() {
      if (speechSynthesis.onvoiceschanged !== undefined)
        speechSynthesis.onvoiceschanged = "ro-RO";
  
      setTimeout(handler, 75);
    }
  
    ready(start);
  })();
