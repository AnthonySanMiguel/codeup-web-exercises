(function() {
    "use strict";

    // create a circle object
    var circle = {
        radius: 3,

        getArea: function () { // TODO: complete this method...
            // hint: area = pi * radius^2
            return (Math.PI * Math.pow(circle.radius, 2)); //// TODO: ...and return the proper value
        },

        logInfo: function (doRounding) {
            var area;
            if (doRounding === true) { // If doRounding is true, round the result to the nearest integer.
                area = Math.round(this.getArea())
            } else { // Otherwise, output the complete value
                area = this.getArea();
            }
            // TODO: complete this method.
            console.log("Area of a circle with radius: " + this.radius + ", is: " + area)
        }
    };

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    // console.log("Circle information rounded to the nearest whole number is: ");
    circle.logInfo(true);

    console.log("=======================================================");

    // TODO: Change the radius of the circle to 5.

    var circle2 = {
        radius: 5,

        getArea: function () { // TODO: complete this method...
            // hint: area = pi * radius^2
            return (Math.PI * Math.pow(circle2.radius, 2)); //// TODO: ...and return the proper value
        },

        logInfo: function (doRounding) {
            var area;
            if (doRounding === true) { // If doRounding is true, round the result to the nearest integer.
                area = Math.round(this.getArea())
            } else { // Otherwise, output the complete value
                area = this.getArea();
            }
            // TODO: complete this method.
            console.log("Area of a circle with radius: " + this.radius + ", is: " + area)
        }
    };

    // log info about the circle
    console.log("Raw circle information");
    circle2.logInfo(false);
    // console.log("Circle information rounded to the nearest whole number is: ");
    circle2.logInfo(true);
})();
