$(document).on("click", ".close-asistent", function () {
    $(".tap-target").tapTarget("close");
});

function signAsistentAddHelper() {
    var els = document.querySelectorAll("p, h5, h1, span, spec, h3, hello");
    for (var i = 0, all = els.length; i < all; i++) {
        els[i].classList.add('signly-text-segment', 'play');
    }
}
function signAsistentRemoveHelper() {
    if (!document.body.classList.contains("signly-text-segment")) {
        var els = document.querySelectorAll("p, h5, h1, span, spec, h3, hello");
        for (var i = 0, all = els.length; i < all; i++) {
            els[i].classList.remove('signly-text-segment', 'play');
        }
    }

}
function signAsistentHelper() {
    if (!document.body.classList.contains("web_asset_on")) {
        document.body.classList.add("web_asset_on");
        signAsistentAddHelper();
        document.getElementById('web_asset').style.color = "red";
    } else {
        document.body.classList.remove("web_asset_on");
        signAsistentRemoveHelper();
        document.getElementById('web_asset').style.color = "";
    }
}

function getElementAttribute(elemID) {
    var signPlayAttribute = 'sign-play';
    if (elemID && document.getElementById(elemID).getAttribute(signPlayAttribute) && document.getElementById('web_asset').style.color.match("") != null) {
        var theElement = document.getElementById(elemID);
        var theAttribute = theElement.getAttribute(signPlayAttribute);
        console.log(theAttribute);
    }
}
function getAllElementAttribute() {
    document.querySelectorAll("[sign-play]").forEach(function (element) {
        // element refers to the DOM node

        textToSpeech(element.getAttribute('sign-play'));
    });
}

$(document).on("click", "p, h5, h1, span, h3, spec, hello", function () {
    if (document.body.classList.contains("web_asset_on")) {
        var srcVideo = $(this).attr("sign-play") //cu index va fi in viitor
        if (srcVideo && document.getElementById('web_asset').style.color.match("") != null) {
            $('.tap-target').tapTarget("open");
            document.getElementById("asistent-p").src = "media/videos/" + srcVideo + ".mp4";
        }

        if (document.body.className.match("text_speech_on") != null) {
            speekResponse($(this).text());
        }
    }
});