"use strict";

//-----------Starts jQuery on Page-------------

$(document).ready(function() {

//-----------Correlates Key Codes with Event Codes-------------

    // Konami Code (Invincibility)
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
        32: '(Space character)',
        65: 'a',
        84: 't',
        79: 'o',
        13: 'Enter'
    };

    // All Weapons
    var allowedKeys3 = {
        72: 'h',
        69: 'e',
        65: 'a',
        86: 'v',
        89: 'y',
        32: '(Space character)',
        77: 'm',
        84: 't',
        76: 'l',
        13: 'Enter'
    };

    // Unlimited Lives
    var allowedKeys4 = {
        68: 'd',
        79: 'o',
        87: 'w',
        78: 'n',
        32: '(Space character)',
        66: 'b',
        85: 'u',
        84: 't',
        13: 'Enter'
    };

//-----------Stores a Code with a Variable Name & Its Input in an Array-------------

    var konamiCodePosition = 0;
    var konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a', 'Enter'];

    var unlimitedAmmoCodePosition = 0;
    var unlimitedAmmoCode = ['f', 'u', 'l', 'l', '(Space character)' ,'a', 'u', 't', 'o', 'Enter'];

    var allWeaponsCodePosition = 0;
    var allWeaponsCode = ['h', 'e', 'a', 'v', 'y', '(Space character)' ,'m', 'e', 't', 'a', 'l', 'Enter'];

    var unlimitedLivesCodePosition = 0;
    var unlimitedLivesCode = ['d', 'o', 'w', 'n', '(Space character)', 'b', 'u', 't', '(Space character)', 'n', 'o', 't', '(Space character)', 'o', 'u', 't', 'Enter'];

//-----------Function Determining If Keys Pressed = Correct Code Sequence; Else, Restart Sequence-------------

            // Konami Code (Invincibility)

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

            // All Weapons

            document.addEventListener('keydown', function(e) {

            var key3 = allowedKeys3[e.keyCode];
            var requiredKey3 = allWeaponsCode[allWeaponsCodePosition];

            if (key3 === requiredKey3) {
                allWeaponsCodePosition++;
                if (allWeaponsCodePosition === allWeaponsCode.length) {
                    activateCheats3();
                    allWeaponsCodePosition = 0;
                }
            } else {
                allWeaponsCodePosition = 0;
            }
    });

            // Unlimited Lives

            document.addEventListener('keydown', function(e) {

            var key4 = allowedKeys4[e.keyCode];
            var requiredKey4 = unlimitedLivesCode[unlimitedLivesCodePosition];

            if (key4 === requiredKey4) {
                unlimitedLivesCodePosition++;
                if (unlimitedLivesCodePosition === unlimitedLivesCode.length) {
                    activateCheats4();
                    unlimitedLivesCodePosition = 0;
                }
            } else {
                unlimitedLivesCodePosition = 0;
            }
    });
//-----------Final Function that "Activates" Once Correct Code is Entered-------------

        // Konami Code (Invincibility)
    function activateCheats() {
        $('h1').html("<p>Invincibility Activated!</p>" + "<p>You are unstoppable!</p>");
        $('h1').css('color', 'white');
        $('h1').css('margin-top', '4%');

        $('button').css('display', 'none');
        $('ul').css('display', 'none');

        $('body').css('background-color', 'black');

        $('.main_gif').prepend($('<img>',{src:'img/terminator_walk.gif'}));
        $('img').css('margin-left', '35%');
        $('img').css('height', 'auto');
        $('img').css('width', 'auto');

        var audio = new Audio('audio/well_done.mp3');
        audio.play();
    }

        // Unlimited Ammo
        function activateCheats2() {
            $('h1').html("<p>Unlimited Ammo!</p>" + "<p>Lock n' Load!</p>");
            $('h1').css('color', 'white');
            $('h1').css('margin-top', '4%');

            $('ul').css('display', 'none');
            $('button').css('display', 'none');
            $('body').css('background-color', 'black');

            $('.main_gif').prepend($('<img>',{src:'img/predator_jungle.gif'}));
            $('img').css('margin-left', '23%');
            $('img').css('height', 'auto');
            $('img').css('width', 'auto');

            var snd1  = new Audio();
            var src1  = document.createElement("source");
            src1.type = "audio/mp3";
            src1.src  = "audio/machine_gun_1.mp3";
            snd1.appendChild(src1);

            var snd2  = new Audio();
            var src2  = document.createElement("source");
            src2.type = "audio/mp3";
            src2.src  = "audio/machine_gun_2.mp3";
            snd2.appendChild(src2);

            var snd3  = new Audio();
            var src3  = document.createElement("source");
            src3.type = "audio/mp3";
            src3.src  = "audio/boom.mp3";
            snd3.appendChild(src3);

            snd1.play(); snd2.play(); snd3.play();
        }

        // All Weapons
        function activateCheats3() {
            $('h1').html("<p>All Weapons Unlocked!</p>" + "<p>Rack & Attack!</p>");
            $('h1').css('color', 'white');
            $('h1').css('margin-top', '4%');

            $('ul').css('display', 'none');
            $('button').css('display', 'none');
            $('body').css('background-color', 'black');

            $('.main_gif').prepend($('<img>',{src:'img/matrix.gif'}));
            $('img').css('margin-left', '33.8%');
            $('img').css('height', 'auto');
            $('img').css('width', 'auto');

            var audio = new Audio('audio/reload.mp3');
            audio.play();
    }


        // Unlimited Lives
        function activateCheats4() {
            $('h1').html("<p>Unlimited Lives Unlocked!</p>" + "<p>Death Eludes You!</p>");
            $('h1').css('color', 'white');
            $('h1').css('margin-top', '4%');

            $('ul').css('display', 'none');
            $('button').css('display', 'none');
            $('body').css('background-color', 'black');

            $('.main_gif').prepend($('<img>',{src:'img/second_chance.gif'}));
            $('img').css('margin-left', '33.5%');
            $('img').css('height', 'auto');
            $('img').css('width', 'auto');

            var audio = new Audio('audio/undying.mp3');
            audio.play();
    }
//-----------Will Load a 'Random Cheat' When Clicked-------------

    $("button").click(function() {
        var n = Math.floor(Math.random() * 4);
        switch (n) {
            case 0:
                activateCheats();
                break;

            case 1:
                activateCheats2();
                break;

            case 2:
                activateCheats3();
                break;

            case 3:
                activateCheats4();
                break;
        }

//-----------Allows Creation of New Code (for copying into new variable array) by Displaying Key Codes-------------

        // $('#search_bar').keydown(function () {
        //     $('#content').append(event.key + " ")
        // });
    })
});
