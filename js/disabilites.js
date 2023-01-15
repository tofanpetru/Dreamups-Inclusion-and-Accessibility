function helper_generalDisabilitySet(classStr) {
    $('body').toggleClass(classStr);
}
function helper_SelectToAudio() {
    var textSpeechOn = "text_speech_on";
    if (!document.body.className.match(textSpeechOn)) {
        $('body').addClass(textSpeechOn);
        document.getElementById('sound-helper').textContent = "volume_off";
    } else {
        $('body').toggleClass(textSpeechOn);
        document.getElementById('sound-helper').textContent = "volume_up";
    }
}

function helper_DisabilitySet(clicked_id, disabilityClass, disabilityImgOn, disabilityImgOff) {
    if (!document.body.className.match(disabilityClass)) {
        $('body').addClass(disabilityClass);
        document.getElementById(clicked_id).textContent = disabilityImgOff;

        //M.toast({ html: 'S-a activat modul: ' + disabilityImgOn })
    } else {
        $('body').toggleClass(disabilityClass);
        document.getElementById(clicked_id).textContent = disabilityImgOn;
        //M.toast({ html: 'S-a dezactivat modul: ' + disabilityImgOn })
    }
}
function helper_highlightStr(classStr) {
    if (document.querySelector(".highlight_text") == null) {
        $("body").addClass("_" + classStr);
        $("a").addClass(classStr);
        $("input[type='submit']").addClass(classStr);
        $('.tooltipped').tooltip();
    } else {
        var allTagsContain = document.getElementsByClassName(classStr);
        while (allTagsContain.length) {
            try {
                allTagsContain[0].classList.remove(classStr);
            }
            catch (err) {
                console.log(err);
            }
        }
        $('.tooltipped').tooltip("destroy");
        removeAllClassesWhoContain("_highlight_text");

    }
}

function removeDisSets() {
    removeAllClassesWhoContain("highlight_text");
    removeAllClassesWhoContain("day_state");
    document.getElementById("day_state").textContent = "blur_circular";
    removeAllClassesWhoContain("invert_mode_on");
    removeAllClassesWhoContain("text_speech_on");
    removeAllClassesWhoContain("web_asset_on");
    removeAllClassesWhoContain("_highlight_text");
    document.getElementById("invert_colors").textContent = "invert_colors";

    document.getElementById("sound-helper").textContent = "volume_up";
    document.getElementById("web_asset").style.color = "";
    setDefaultSize();
    signAsistentRemoveHelper();
    M.toast({ html: 'Resetat cu succes!' })
}
function removeAllClassesWhoContain(className) {
    var name = document.getElementsByClassName(className);
    while (name.length)
        try {
            name[0].classList.remove(className);
        } catch {

        }
}

function increseFontSize() {
    var actualFontSize = parseInt($("#html").css('font-size'));

    if ((actualFontSize >= 12 || actualFontSize >= 10) && actualFontSize <= 22) {
        actualFontSize = actualFontSize + 2;
    }
    document.getElementById('html').style.fontSize = actualFontSize + "px";
}
function decreseFontSize() {
    var actualFontSize = parseInt($("#html").css('font-size'));

    if ((actualFontSize >= 12) && actualFontSize <= 24) {
        actualFontSize = actualFontSize - 2;
    }
    document.getElementById('html').style.fontSize = actualFontSize + "px";
}
function setDefaultSize() {
    $('html').css("font-size", 16);
}

function textToSpeech(text) {
    speekResponse(text)
}

function AvoidSpace(event) {
    var k = event ? event.which : window.event.keyCode;
    if (k == 32) return false;
}

/* Remove Blank Space Automatically Before, After & middle of String */

function removeSpaces(string) {
    return string.split(' ').join('');
}