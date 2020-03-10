"use strict";

$(document).ready(function() {

    /****************** MAP, FILTER, REDUCE ******************/

        // Array of MacBookPro{} objects
    var mbpModels = [
            {
                id: 'MA464LL/A',
                desc: 'Apple MacBook Pro 15-Inch "Core Duo" 2.0',
                model: 'A1150',
                year: '2006',
                price: 3199
            },
            {
                id: 'MB986LL/A',
                desc: 'Apple MacBook Pro 15-Inch "Core 2 Duo" 2.8',
                model: 'A1286',
                year: 'Mid-2009',
                price: 2799
            },
            {
                id: 'MD311LL/A ',
                desc: 'Apple MacBook Pro 17-Inch "Core i7" 2.4',
                model: 'A1297',
                year: 'Late-2011',
                price: 2399
            },
            {
                id: 'MGXA2LL/A',
                desc: 'Apple MacBook Pro 15-Inch "Core i7" 2.2',
                model: 'A1398',
                year: 'Mid-2014',
                price: 2299
            }
        ];


    // ES6
    // var cartTotal = cart.reduce((total,item) => total + item.cost, 0);

    // *****************   ******     ******************//
    // *****************  TODO: MAP() ******************//
    // *****************   ******     ******************//

    // Print a list of id's of the mbpModels array
    //  1. Use forEach()
    //  2. Use map()
    //  3. Use ES6


    /********************************* 1 *********************************/

    //  1. Using forEach()

    let ids = [];

    mbpModels.forEach(function(mbp){
       ids.push(mbp.id);
    });

    $('#forEach').html(createList(ids)); // createList function already created below

    /********************************* 2 *********************************/

    //  2. Using map()

    let idsMap = mbpModels.map(function(mbp){
        return mbp.id;
        });

    $('#map').html(createList(idsMap));

    /********************************* 3 *********************************/

    //  3. Use ES6

    let idsES6 = mbpModels.map(mbp => mbp.id);

    $('#mapES6').html(createList(idsES6));

    /**************************** createList() ***************************/
    /******* returns a <li> type list in raw HTML ************************/
    function createList(arr) {
        var html = '';
        arr.forEach(function (item) {
            html += '<li>' + item + '</li>';
        });
        return html;
    }
    /**************************** createList() ***************************/


    // *****************   ******     ******************//
    // **************  TODO: FILTER() ******************//
    // *****************   ******     ******************//

    // Print a list of the models made in 2011 and later
    //  1. Use forEach()
    //  2. Use map()
    //  3. Use ES6

    /**************************** LEAVE IN FOR STUDENTS **(********************************/
    /*********************** function to get year from string (e.g. "2011" from "mid-2011")*****************************/
    function getYear(yearString) {
        let yearArr,bucket;
        [yearArr, bucket] = [yearString.split(''),[]];
        for(var i=3; i>=0; i--) {
            bucket[i] = yearArr.pop();
        }
        return bucket.join('');
    }
    /********************* END function to get year from string ***************************/


    /********************************* 1 *********************************/
    //  1. Use forEach()

    var forEach2011 = [];

    mbpModels.forEach(function(mbp){
        // Get the current model's year
       let thisYear = getYear(mbp.year); // Calling pre-made function above
        // Check if thisYear is greater than or equal to 2011
        if(thisYear >= 2011){ // If it is, push the individual mac's description into the bucket
            forEach2011.push(mbp.desc + "<strong>(" + mbp.year + ")</strong>");
            // Apple MacBook Pro 17-Inch "Core i7" 2.4 <strong>(Mid-2011)</strong>
        }
    });

    $('#filterForEach').html(createList(forEach2011));

    /********************************* 2 *********************************/
    //  2. Use filter()

    let filter2011 = mbpModels.filter(function(mbp){
        return getYear(mbp.year) >= 2011;
        });

    $('#filter').html(createList(filter2011.map(mbp => mbp.desc + "<strong>(" + mbp.year + ")</strong>")));
    // If individual mac is greater than or equal to 2011, return the whole object with all properties, then .map filter to only insert the description and year (bolded) in the targeted html element (e.g. #filter)
    // OR
    // $('#filter').html(createList(filter2011.map(mbp => `${mbp.desc} <strong>(${mbp.year})</strong>`)));

    /********************************* 3 *********************************/
    //  3. Use ES6

    let es62011 = mbpModels.filter(mbp => getYear(mbp.year) >= 2011);

    $('#filterEs6').html(createList(es62011.map(mbp => `${mbp.desc} <strong>(${mbp.year})</strong>`)));

    // *****************   ******     ******************//
    // **************  TODO: REDUCE() ******************//
    // *****************   ******     ******************//

    // Determine the total value of all MacBook Pros together
    //  1. Use forEach()
    //  2. Use reduce()
    //  3. Use ES6

    /********************************* 1 *********************************/
    //  1. Use forEach()

    let totalValueFE = 0;

    mbpModels.forEach(function(mbp){
       totalValueFE = totalValueFE + mbp.price;
    });

    $('#reduceForEach').html(commaThousands(totalValueFE)); // Use pre-made function below

    /********************************* 2 *********************************/
    //  2. Use reduce()

    let totalValueReduce = mbpModels.reduce(function(total, mbp){
        return total + mbp.price;
        }, 0); // Starting at 0 for the total

    $('#reduce').html(commaThousands(totalValueReduce));

    /********************************* 3 *********************************/
    //  3. Use ES6

    let totalValueES6 = mbpModels.reduce((total, mbp) => total + mbp.price,0);

    $('#reduceEs6').html(commaThousands(totalValueES6));

    /**************************** LEAVE IN FOR STUDENTS **(********************************/
    /*********************** function to get commas in number *****************************/

    function commaThousands(number) {
        var numArr = number.toString().split('');
        var startPos = numArr.length % 3;
        var initialLength = numArr.length;
        var first = true;
        var extra = 0;
        // add commas every third digit from the end
        if( numArr.length <= 3) {
            return number;
        } else {
            for(var i = 0; i < (numArr.length - numArr.length % 3) / 3; i++) {
                console.log('for iteration');
                console.log(i * 3 + extra + startPos);
                if(i*3+extra+startPos >= initialLength+extra) {
                    // console.log('stop');
                    break;
                } else {
                    if((startPos !== 0) && first) {
                        numArr.splice(startPos,0,',');
                        first = false;
                        extra++;
                    } else{
                        numArr.splice((i*3+extra),0,',');
                        extra++;
                    }
                }
            }
            // console.log(numArr.join(''));
            numArr.splice(0,0,'$');
            return numArr.join('');
        }
    }
    /**************************** DON'T WORRY HOW THIS FUNCTION WORKS ********************************/

});
