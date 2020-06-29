"use strict";

let superheroes = [
    {name:"Batman", publisher:"DC", alterEgo:"[ENCRYPTED]", firstAppearance:"Detective Comics #27", characters:"[ENCRYPTED]", img: '<img src="classified.jpg" class="card-picture" alt="" onclick="this.src=`batman.gif`"/>', btn: '<button id="batman-btn">Analyze</button>'},
    {name:"Superman", publisher:"DC", alterEgo:"Kal-El", firstAppearance:"Action Comics #1", characters:"N/A", img: '<img src="classified.jpg" class="card-picture" alt="" onclick="this.src=`superman.gif`"/>'},
    {name:"Flash", publisher:"DC", alterEgo:"Jay Garrick", firstAppearance:"Flash Comics #1", characters:"Barry Allen, Wally West, Bart Allen", img: '<img src="classified.jpg" class="card-picture" alt="" onclick="this.src=`flash.gif`"/>'},
    {name:"Green Lantern", publisher:"DC", alterEgo:"Alan Scott", firstAppearance:"All-American Comics #16", characters:"Hal Jordan, Guy Gardner, John Stewart", img: '<img src="classified.jpg" class="card-picture" alt="" onclick="this.src=`green_lantern.gif`"/>'},
    {name:"Green Arrow", publisher:"DC", alterEgo:"Oliver Queen", firstAppearance:"More Fun Comics #73", characters:"N/A", img: '<img src="classified.jpg" class="card-picture" alt="" onclick="this.src=`green_arrow.gif`"/>'},
    {name:"Wonder Woman", publisher:"DC", alterEgo:"Princess Diana", firstAppearance:"All Star Comics #8", characters:"N/A", img: '<img src="classified.jpg" class="card-picture" alt="" onclick="this.src=`wonder_woman.gif`"/>'},
    {name:"Martian Manhunter", publisher:"DC", alterEgo:"J'onn J'onzz", firstAppearance:"Detective Comics #225", characters:"N/A", img: '<img src="classified.jpg" class="card-picture" alt="" onclick="this.src=`martian_manhunter.gif`"/>'},
    {name:"Robin/Nightwing", publisher:"DC", alterEgo:"Dick Grayson", firstAppearance:"Detective Comics #38", characters:"N/A", img: '<img src="classified.jpg" class="card-picture" alt="" onclick="this.src=`nightwing.gif`"/>'},
    {name:"Blue Beetle", publisher:"DC", alterEgo:"Dan Garret", firstAppearance:"Mystery Men Comics #1", characters:"Ted Kord, Jaime Reyes", img: '<img src="classified.jpg" class="card-picture" alt="" onclick="this.src=`blue_beetle.gif`"/>'},
    {name:"Black Canary", publisher:"DC", alterEgo:"Dinah Drake", firstAppearance:"Flash Comics #86", characters:"Dinah Lance", img: '<img src="classified.jpg" class="card-picture" alt="" onclick="this.src=`black_canary.gif`"/>'},
    {name:"Spider Man", publisher:"Marvel", alterEgo:"Peter Parker", firstAppearance:"Amazing Fantasy #15", characters:"N/A", img: '<img src="classified.jpg" class="card-picture" alt="" onclick="this.src=`spiderman.gif`"/>'},
    {name:"Captain America", publisher:"Marvel", alterEgo:"Steve Rogers", firstAppearance:"Captain America Comics #1", characters:"N/A", img: '<img src="classified.jpg" class="card-picture" alt="" onclick="this.src=`captain_america.gif`"/>'},
    {name:"Iron Man", publisher:"Marvel", alterEgo:"Tony Stark", firstAppearance:"Tales of Suspense #39", characters:"N/A", img: '<img src="classified.jpg" class="card-picture" alt="" onclick="this.src=`iron_man.gif`"/>'},
    {name:"Thor", publisher:"Marvel", alterEgo:"Thor Odinson", firstAppearance:"Journey into Mystery #83", characters:"N/A", img: '<img src="classified.jpg" class="card-picture" alt="" onclick="this.src=`thor.gif`"/>'},
    {name:"Hulk", publisher:"Marvel", alterEgo:"Bruce Banner", firstAppearance:"The Incredible Hulk #1", characters:"N/A", img: '<img src="classified.jpg" class="card-picture" alt="" onclick="this.src=`hulk.gif`"/>'},
    {name:"Wolverine", publisher:"Marvel", alterEgo:"James Howlett", firstAppearance:"The Incredible Hulk #180", characters:"N/A", img: '<img src="classified.jpg" class="card-picture" alt="" onclick="this.src=`wolverine.gif`"/>'},
    {name:"Daredevil", publisher:"Marvel", alterEgo:"Matthew Michael Murdock", firstAppearance:"Daredevil #1", characters:"N/A", img: '<img src="classified.jpg" class="card-picture" alt="" onclick="this.src=`daredevil.txt`"/>'},
    {name:"Hawkeye", publisher:"Marvel", alterEgo:"Clinton Francis Barton", firstAppearance:"Tales of Suspense #57", characters:"N/A", img: '<img src="classified.jpg" class="card-picture" alt="" onclick="this.src=`hawkeye.gif`"/>'},
    {name:"Cyclops", publisher:"Marvel", alterEgo:"Scott Summers", firstAppearance:"X-Men #1", characters:"N/A", img: '<img src="classified.jpg" class="card-picture" alt="" onclick="this.src=`cyclops.txt`"/>'},
    {name:"Silver Surfer", publisher:"Marvel", alterEgo:"Norrin Radd", firstAppearance:"The Fantastic Four #48", characters:"N/A", img: '<img src="classified.jpg" class="card-picture" alt="" onclick="this.src=`silver_surfer.webp`"/>'},
    {name:"The Punisher", publisher:"Marvel", alterEgo:"Frank Castle", firstAppearance:"The Amazing Spider-Man #129", characters:"Microchip", img: '<img src="classified.jpg" class="card-picture" alt="" onclick="this.src=`punisher.gif`"/>'}
    ];

function renderCoffee(x) {
    let html = '<div style="border: 12px solid lightslategray; border-radius: 15px; margin: 0 0 1em 0; background-color: linen;">';
    html = html + '<div style="color: red; margin: 5px 0 5px 0; font-size: 1.5em;">' + 'Subject:' + '</div>';
    html = html + '<span>' + x.img + '</span>';
    html = html + '<h3><em>' + x.name + '</em></h3>';
    html = html + '<p>' + 'Alter Ego: ' + x.alterEgo + '</p>';
    html = html + '<p>' + 'Known Associates: ' + x.characters + '</p>';
    html = html + '<p>' + 'Affiliation: ' + x.publisher + '</p>';
    html = html + '<p>' + 'Case Origin: ' + x.firstAppearance + '</p>';
    html = html + '<p>' + x.btn + '</p>';
    html = html + '</div>';
    return html;
}

function renderCoffees(superheroes) {
    let html = '';
    for (let i = superheroes.length - 1; i >= 0; i--){
        html = html + renderCoffee(superheroes[i]);
    }
    return html;
}

function updateSuperHeroesDropDown(e) { // Dynamically adjusts display based on roast type selected in dropdown
    e.preventDefault(); // don't submit the form, we just want to update the data
    let selectedRoast = publisherSelection.value;
    let filteredCoffees = [];
    superheroes.forEach(function(superhero) {
        if (superhero.publisher === selectedRoast) {
            filteredCoffees.push(superhero);
        }
        console.log(superhero.publisher === selectedRoast);

    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}

function updateSuperHeroesSearch(e) { // Dynamically adjusts display based on letters typed in search bar
    e.preventDefault(); // don't submit the form, we just want to update the data
    let selectedCoffee = searchBar.value;
    let filteredCoffees = [];
    superheroes.filter(function(superheroes) {
        if (superheroes.name.toLowerCase().match(selectedCoffee) || superheroes.alterEgo.toLowerCase().match(selectedCoffee) || superheroes.characters.toLowerCase().match(selectedCoffee) || superheroes.publisher.toLowerCase().match(selectedCoffee) || superheroes.firstAppearance.toLowerCase().match(selectedCoffee)) {
            filteredCoffees.push(superheroes);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}

superheroes.reverse();
let tbody = document.querySelector('#superheroes');
let submitButton = document.querySelector('#submit');
let searchBar = document.querySelector('#search');
let publisherSelection = document.querySelector('#publisher-selection');

tbody.innerHTML = renderCoffees(superheroes);

searchBar.addEventListener('keyup', updateSuperHeroesSearch);
submitButton.addEventListener('click', updateSuperHeroesDropDown);

function singLyrics(lyrics, pitch) {
    return new Promise((res) => {
        let lyric = new SpeechSynthesisUtterance(lyrics);
        lyric.pitch = pitch;
        lyric.rate = .9;
        speechSynthesis.speak(lyric);
        setTimeout(res, 1500);
    });
}

const singPromises = () => {
    return singLyrics('File encrypted', 0);
        // .then(() => singLyrics('file', 1))
        // .then(() => singLyrics('redacted', 1.5));
};

document.getElementById('batman-btn').addEventListener('click', singPromises);
