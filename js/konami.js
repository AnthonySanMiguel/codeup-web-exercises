"use strict";

//-----------Will Reload Page When 'Random Cheat' Button Clicked-------------

// function refreshPage() {
//     window.location.reload();
// }
//-----------Starts jQuery on Page-------------

$(document).ready(function() {

//-----------Correlates Key Codes with Event Codes-------------

    // Konami Code (aka "God Mode")
    var allowedKeys = {
        37: 'ArrowLeft',
        38: 'ArrowUp',
        39: 'ArrowRight',
        40: 'ArrowDown',
        65: 'a',
        66: 'b',
        13: 'Enter'
    };

    // Unlimited Ammo
    var allowedKeys2 = {
        70: 'f',
        85: 'u',
        76: 'l',
        65: 'a',
        84: 't',
        79: 'o',
        13: 'Enter'
    };

//-----------Stores a Code with a Variable Name & Its Input in an Array-------------

    var konamiCodePosition = 0;
    var konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a', 'Enter'];

    var unlimitedAmmoCodePosition = 0;
    var unlimitedAmmoCode = ['f', 'u', 'l', 'l', 'a', 'u', 't', 'o', 'Enter'];

//-----------Function Determining If Keys Pressed = Correct Code Sequence; Else, Restart Sequence-------------

            // Konami Code (aka "God Mode")

            document.addEventListener('keydown', function(e) {

            var key = allowedKeys[e.keyCode];
            var requiredKey = konamiCode[konamiCodePosition];

            if (key === requiredKey) {
                konamiCodePosition++;
                if (konamiCodePosition === konamiCode.length) {
                    activateCheats();
                    konamiCodePosition = 0;
                }
            } else {
                konamiCodePosition = 0;
            }
        });

            // Unlimited Ammo

            document.addEventListener('keydown', function(e) {

            var key2 = allowedKeys2[e.keyCode];
            var requiredKey2 = unlimitedAmmoCode[unlimitedAmmoCodePosition];

            if (key2 === requiredKey2) {
                unlimitedAmmoCodePosition++;
                if (unlimitedAmmoCodePosition === unlimitedAmmoCode.length) {
                    activateCheats2();
                    unlimitedAmmoCodePosition = 0;
                }
            } else {
                unlimitedAmmoCodePosition = 0;
            }
    });
//-----------Final Function that "Activates" Once Correct Code is Entered-------------

        // Konami Code (aka "God Mode")
        function activateCheats() {
            $('h1').html("<p>Success!</p>" + "<p>God Mode Activated!</p>");

            $('body').css('color', 'white');

            document.body.style.backgroundImage = "url('img/smoke.jpeg')";
            $('body').css('background-size', 'cover');

            var audio = new Audio('audio/proton.mp3');
            audio.play();
        }

        // Unlimited Ammo
        function activateCheats2() {
            $('h1').html("<p>Awesome!</p>" + "<p>Unlimited Ammo!</p>");

            $('body').css('color', 'white');

            document.body.style.backgroundImage = "url('img/veridian-background.jpg')";
            $('body').css('background-size', 'cover');

            var audio2 = new Audio('audio/proton.mp3');
            audio2.play();
        }

//-----------Allows Creation of New Code (for copying into new variable array) by Displaying Key Codes-------------

        // $('#search_bar').keydown(function () {
        //     $('#content').append(event.key + " ")
        // });

});
