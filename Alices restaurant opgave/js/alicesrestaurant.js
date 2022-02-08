/** Opgave: alice'S restaurant. Dette er et javaskrift dokument.
DEl PRO-1 Aflevering d. 08.02.2022
Lavet af Trine Rahbek Markussen
Hold D **/

// Tester console
console.log('alicesrestaurant.js = hej')



// Definere dato - dag, uge og måned
      let d = new Date();
      let uge = ['Søn.','Man.','Tir.','Ons.','Tor.','Fre.','Lør.'];
      let maaneder = ['jan.','feb.','mar.','apr.','maj.','jun.','jul.','aug.','sep.','okt.','nov.','dec.'];

// footer information boks
    const information = {

      dag: uge[ d.getDay() ],
      maaned: maaneder[ d.getMonth() ],
      dagImaaned: d.getDate(),
      aar: d.getFullYear(),
      time: d.getHours(),
      minut: d.getMinutes(),

// Selvstudie dag 1. - opgave 2/4.
      lavetaf: 'Trine Rahbek Markussen',
      restaurant: 'alice\'S restaurant',
      adresse: 'Volden 234 <br>8000 Aarhus C <br> DK <br>',
      telefon: 'Tlf. nr +45 42 43 44 45 <br>',
      bestil: 'Bestil takeaway på Wolt eller ring til os',



//  Selvstudie dag 1. - opgave 1/4.
  javaDato: function() {
    console.log('footeren.javaDato() = aktiv');
    footerInformation.innerHTML += `
      <div id="dato">
        ${this.dag}
        ${this.dagImaaned}.
        ${this.maaned}
        ${this.aar} <br>

        &copy; by ${this.lavetaf}
      </div>
    `;
  },

//  Selvstudie dag 1. - opgave 2/4.
  javaAdresse: function() {
    footerInformation.innerHTML += `
      <div id="adresse">
        <h1>${this.restaurant}</h1>
        <p>
          ${this.adresse}<br>
          ${this.telefon}
          ${this.bestil}
        </p>
      </div>
    `
  }
}

// Selvstudie dag 1. - Funktion til opgave 2.
information.javaAdresse();

// Selvstudie dag 1. - Funktion til opgave 1.
information.javaDato();



// Selvstudie dag 1. - opgave 3/4.
// Liste med alle medarbejdere - definere
    let vis, medarbejder = [
      'ejer: Alice Ellegaard',

      'tjener: Marie-Alberte Hansen',
      'tjener: Peter R. Ibsgaard',
      'tjener: Morgens Carl Andersen',
      'tjener: Lars Preben Petersen',
      'tjener: Fie Frida Rasmussen',
      'tjener: Aya Kok',
      'tjener: Anders Svensson',

      'opvasker: Lise Marie Lynggaard ',
      'opvasker: Viggo Pedersen',
      'opvasker: Mathias Ole Wieland',
      'opvasker: Anton Schultz',

      'kok: Frederik Lundkvist',
      'kok: Thomas Sabro',
      'kok: Nikolaj Schwartz',
      'kok: Sebastian Madsen',

      'vicevært: Carl Carlsen'
// Sortere medarbejdernes navne i alfabetisk orden.
    ].sort();

// Funktionen
    for (vis in medarbejder){
    team.innerHTML += '<li>' + medarbejder [ vis ] + '</li>';
    }

// Selvstudie dag 1. - opgave 4/4.
let citater = [
  '"livet er for kort til dårlig mad" <br> Tjener: Lars Preben Petersen"',

  '"jeg ELSKER ELSKER MAD" <br> Tjener: Marie-Alberte Hansen"',

  '"god vin og ost hænger sammen <br> Tjener: Morgens Carl Andersen"',

  '"bestiller du vin menuen kan det kun blive en god aften;)" <br> Tjener: Peter R. Ibsgaard"',

  '"jeg anbefaler altid IPA til maden" <br> Tjener: Fie Frida Rasmussen"'
];

// Selvkørende funktion til citaterne der kommer tilfældig
(function dagensCitat() {
  rndNo = Math.floor(Math.random() * citater.length );
  citat.innerHTML = '<em>' +  citater[ rndNo ] + '</em>';
})();

// Selvstudie dag 2. - opgave 1/6. - se enten index.html, personale.html, menu.html eller bookbord.html

// Selvstudie dag 2. - opgave 2/6. - se ses i alle html filer og style.css

// Selvstudie dag 2. - opgave 3/6.
// Funktionen når navigationsmenuen er åben.

function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

// Funktionen når navigationsmenuen er lukket.
function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}
// Selvstudie dag 2. - opgave 4/6.
function myFunction() {
  var x = document.getElementById("openbtn");
  if ("main".style.display = "block") {
    "mySidebar".style.display = "none";
  }
}

// Selvstudie dag 2. - opgave 5/6. - se personale.html

// Selvstudie dag 2. - opgave 6/6. -  nåede desværre ikke denne opgave!

//  Selvstudie dag 3. - opgave 1/7. - ses i png filen ("flowchart.png")

//  Selvstudie dag 3. - opgave 2/7. - bookbord.html

// Selvstudie dag 3. - opgave 3/7. -  alicesrestaurant.js og bookbord.html
btn1.addEventListener('click', function(){
  gaester.style.display = "block";
  navn.style.display = "none";

})

btn2.addEventListener('click', function(){
  tak.style.display = "block";
  gaester.style.display = "none";
})

// Selvstudie dag 3. - opgave 4/7. - bookbord.html

// Selvstudie dag 3. - opgave 5/7 - kunne ikke få det til at virke.

// Selvstudie dag 3. - opgave 6/7. - style.css

//  Selvstudie dag 3. - opgave 7/7. - kunne ikke få det til at virke.

// Selvstudie dag 4. - opgave 1/1. (se også youtubevideo.js, lyd.js, index.html og css.style)

// Selvstudie dag 5. - opgave 1/1. - menukort JSON

menu = `{
  "menu": [
    {
      "id": 1,
      "titel": "Carpaccio",
      "beskrivelse": "Carpaccio med rucola og pinjekerner",
      "pris": 90,
      "ret": "Forret "
    },
    {
      "id": 2,
      "titel": "Tatar",
      "beskrivelse": "Rørt oksetatar med jordskokkechips hertil brød med aioli",
      "pris": 90,
      "ret": "Forret"
    },
    {
      "id": 3,
      "titel": "Moules Frites",
      "beskrivelse": "Danske hvidvinsdampet blåmuslinger med brød og urtesmør",
      "pris": 90,
      "ret": "Forret"
    },
    {
      "id": 4,
      "titel": "Bøf Bearnaise",
      "beskrivelse": "Rosa oksebøf med bearnaise og rustikke fritter",
      "pris": 150,
      "ret": "Hovedret"
    },
    {
      "id": 5,
      "titel": "Oksemørbrad",
      "beskrivelse": "Rosa oksemørbrad med rødvinsovs og kartofler",
      "pris": 150,
      "ret": "Hovedret"
    },
    {
      "id": 6,
      "titel": "Tunbøf",
      "beskrivelse": "Rosa tunbøf med hvidvinsauce og kartofler",
      "pris": 150,
      "ret": "Hovedret"
    },
    {
      "id": 7,
      "titel": "Chokoladekage med is",
      "beskrivelse": "Mørk chokoladekage med passionis og karmelsovs",
      "pris": 50,
      "ret": "Dessert"
    },
    {
      "id": 8,
      "titel": "Créme Brulé",
      "beskrivelse": "Fransk vanilje budding med en karmeliseret top",
      "pris": 50,
      "ret": "Dessert "
    },
    {
      "id": 9,
      "titel": "Tiramisu",
      "beskrivelse": "Italienske ladyfingers dryppet i en kaffe-amaretto blanding samt mascarpone",
      "pris": 50,
      "ret": "Dessert"
    },
    {
      "id": 10,
      "titel": "Brød",
      "beskrivelse": "Blandet grov og lyst brød",
      "pris": 20,
      "ret": "Tilbehør"
    },
    {
      "id": 11,
      "titel": "Salat",
      "beskrivelse": "Årstiden salater",
      "pri": 30,
      "ret": "Tilbehør"
    },
    {
      "id": 12,
      "titel": "Kartofler ",
      "beskrivelse": "Rusikke fitter, kartoffelbåde og råstegte kartofler",
      "pris": 30,
      "ret": "Tilbehør"
    }
  ]
}`;

const xxx = JSON.parse(menu);
console.log( xxx.menu[1].titel )

// loop der henter hele arrayet
for (let i = 0; i < xxx.menu.length; i++ ){
  console.log( xxx.menu[i].titel )
  result.innerHTML += `
    <div class="menuTing">
      <h2> ${xxx.menu[i].titel} </h2>
      <p> ${xxx.menu[i].beskrivelse} </p>
    </div>
  `
}

document.getElementById("kort").innerHTML = menu;
