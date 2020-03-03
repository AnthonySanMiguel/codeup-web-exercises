"use strict";

// .html()
//   .css()
//     .addClass()
//       .removeClass()
//         .toggleClass()


// ******* Getters and Setters **********

// Getter for text of logo color
function getColorText(){ // Will return a string inside the #colorText span
    return $('#colorText').html();
}
// console.log(getColorText());

// Setter for text of logo color
function setColorText(color){ // Will set the text to the passed in color, and also change its CSS color
    return $('#colorText').removeClass(getColorText()).html(color).addClass(color); // Will change #colorText, remove its current class, change the color to color input, and change CLASS to the color input (e.g. class='purple'); WE ONLY WANT ONE CLASS AT A TIME
}
// console.log(setColorText('purple'));

// Getter for section color
function getSectionColor(section){ // <-- NOTE: "section" input is targeting the 'path#' IDs as a variable, rather than specifying each (e.g. '#path1')
    return $(section).attr('class');
}
// console.log(getSectionColor('#path1')); // Call function and specify the path/section to see current color

// Setter for the section color
function setSectionColor(color, section){
    // change all sections if 'all' is passed in
    if(section === "all"){
        // set all sections to specified 'color'
        resetColor();
        setColorText(color);
        return $('.codeup-logo > path').addClass(color);
    } else{ // run if an individual section was passed in, rather than 'all' (e.g. 'path2')
        $(section).removeClass(getSectionColor(section));
        return $(section).addClass(color);
    } // we don't have to change the #colorText element because we're going to set that in the next rainbow function
    // if individual section is passed in, change its color (used for Rainbow effect)
}
setSectionColor('purple', 'all');
// setSectionColor('orange', '#path3');


// reset all path elements to default, and change the 'color' text in the h2 to 'green'
function resetColor(){
    $('.codeup-logo > path').removeClass(function(){
        return $(this).attr('class'); // $(this) <-- all the '.codeup-logo > path' elements
    })
}

// write a function called rainbowLogo() that changes the logo to rainbow colors
// PSEUDO CODE:
// 1. Create some text 'r a i n b o w' with letters individually colored in rainbow colors
    //a. set that text in the #colorText span (inside the header 'Codeup Logo in SVG Form')
// 2. Target each path(section) in the logo individually, and color them rainbow colors
    //e.g. path1 = red, path2 = orange, path3 = yellow, etc.
function rainbowLogo(){
    var text = 'rainbow';
    var logoSections = ['#path1', '#path2', '#path3', '#path4', '#path5', '#path6'];
    var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];
    var i = 0;
    var counter = 0;

    logoSections.forEach(function (sectionId) { // iterates through the logoSections array, beginning at the first target (colors[counter] OR colors[i = 0]), and assigning a color from the colors array as it progresses
        setSectionColor(colors[counter], sectionId);
        counter++;
    });
    // split up the 'rainbow' text and make it rainbow
    var colorfulText = []; // empty bucket
    var i = 0; // have two counters, as there are more letters than colors...thus, once all colors run, reset and start back at beginning color until letters finished
    counter = 0; // variable already stated above
    text.split('').forEach(function (letter) { // splits up variable word 'rainbow' into individual letters in an array
        //text.split --> ['r','a','i','n','b','o','w']
        //forEach loop --> (1) letter = r, (2) letter = a, ...
        colorfulText[i] = '<span class="' + colors[counter] + '">' + letter + '</span>'; // adds individual letters into the array bucket and assigns each a <span> with ALSO a class name of the color it hits with in sequence. (e.g. expected output array with each letter: ['<span class="red">r</span>', <span class="orange">a</span>', ...])
        if(counter === 5){
            counter = 0; // reset once all colors in array are assigned, and start over again (at red)
        }
        counter++; i++;
    });
    text = colorfulText.join(' ');
    // console.log(text);

    return $('#colorText').removeClass(getColorText()).html(text);

}

// console.log(rainbowLogo());

// Set a variable called circleClickCount, to keep track of how many times an individual circle has been clicked
var circleClickCount = 0;

// Add a click listener to each of the 'circle' elements at the bottom of the page, and make each color circle
$('.circle').click(function(){
// change the logo to the clicked color, or rainbow, if rainbow was clicked
    // if 'red' is clicked --> change the logo color (all paths) to red AND change the header text to say 'red' with a red font color
    var clickedColor = $(this).attr('id'); // whichever circle is clicked, return the id of the element (e.g. 'red', 'orange', etc.)
    circleClickCount++;
    // user either clicks 1. a single color circle, or 2. the 'rainbow' circle
    if(clickedColor === 'rainbow'){
        console.log('rainbow was clicked'); // shows rainbow button was clicked in log
        resetColor(); // removes all current classes from the logo path elements after the rainbow button is clicked
        rainbowLogo(); // will run the rainbow function and change all path elements to rainbow colors
    } else { // if user does NOT click on the rainbow circle and selects on the of the single color buttons
        console.log(clickedColor + " was clicked"); // shows which color button was clicked in log
        setColorText(clickedColor); // will run setColorText function for the user selected color (e.g. clickedColor input) and change the text appropriately
        setSectionColor(clickedColor, 'all'); // will run the setSectionColor function, inputting the user clickedColor, and selecting 'all' logo paths/parts
    }
    // If the same color is clicked twice, toggle the 'caps' class to UPPERCASE and lowercase the color name
    if($('.codeup-logo').attr('id') === clickedColor){ // if the header text matches the color of the button clicked...
        $('#colorText').toggleClass('caps'); // ... toggle the font to upperCase ; NOTE: 'caps' has been previously defined in the style sheet (e.g. see HTML style definitions) --> ".caps{text-transform: uppercase;}"
        console.log("clicked the same color")
    } else { // Once user clicks a different color circle, remove the upperCase class and reset the click counter
        $('#colorText').removeClass('caps');
        circleClickCount = 0;
    }
    console.log(circleClickCount);// See how many times user clicked
    // After we've checked for multiple clicks, set .codeup-log element id, to 'clickedColor'
    $('.codeup-logo').attr('id', clickedColor);
});

// CHECK CONSOLE LOG FOR CLICKS AND TO CHECK COUNTER...IF SAME COLOR IS CLICKED = COUNTER INCREASES...IF A DIFFERENT COLOR IS CLICKED = COUNTER RESETS BACK TO 0

// *********************** Traversing Methods ********************************* //

// now let's traverse some elements

// .each()   .first()    .last()    .children()    .parent()    .next()

// TODO: Let's give each of the selection circles a 1px black border
$('.circle').each(function(index){
    console.log(("added border to circle" + index));
    return $(this).css('border', '1px solid black');
});

// TODO: Let's take the border away from the first circle
$('.circle').first().css('border', 'none');

// TODO: Let's make the last circle disappear
$('.circle').last().css('display', 'none'); // NOTE: DISPLAY FLEX STILL KEEPS CIRCLES ALIGNED, EVEN AFTER REMOVING LAST ONE (e.g. rainbow one) SEE CSS DISPLAY BELOW

// TODO: Find the children of the circle row, and remove borders from all of them, then unhide the last circle
$('.circles').children().css('border', 'none').last().css('display', 'inline-flex');

// TODO: while changing the fist path element to have a black fill, give its grandparent a light gray background and 10px padding
$('#path1').removeClass().addClass('black').parent().parent().css({ // TO GET "GRANDPARENT", TARGET "PARENT" TWICE (e.g. "PARENT" --> THEN "GRANDPARENT")
    'background': 'lightgray', // NOTE: EXAMPLE OF ADDING STYLE 'OBJECT' TO .CSS
    'margin': '20px'
});

// TODO: change the second path element to blue, then change the 'next' element to yellow
$('#path2').removeClass().addClass('blue').next().removeClass().addClass('yellow'); // Before adding the class name, make sure to .removeClass() to erase any existing classes and avoid conflict/multiple class names.

// TODO: What's the difference between changing the class to change the color, and simply changing the color directly?
// By calling a specific class, you can use custom css colors rather than the default hex or color options...also, if making a manual css change, there is no quick way to unset that color...but you can toggle a class for efficiency.
