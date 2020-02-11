// Create UI bringing in basic API star wars
// Make any resource by name search able
// the resource becames what was typed

let ourInfo = {}; // the info that will store our JSON from swapi
// try declaring ourJson for all the api functions 
let ourJson = {};
let getResource = document.getElementById('starwars');
let clientResource;
getResource.addEventListener("keyup", () => clientResource = getResource.value)

// define results section
let resultsSection = document.getElementById("forResults");

// default resource type to fetch
let resourceType = "people";
// bind event listener to update resourceType.

let resourceTypeValue = document.getElementById("resourceType");

resourceTypeValue.addEventListener("change", () => resourceType = resourceTypeValue.value)

// bind the search button
let goButton = document.getElementById('goButton');

// bind the language buttons
let engLang = document.getElementById("English");

//let wookieLang = document.getElementById("Wookie");


// define the base URL for SWAPI (star wars API)
let baseUrl = "https://swapi.co/api/";


goButton.addEventListener("click", function(e) {e.preventDefault; 
  getResource.value = '';
  
  chooseData()});

function chooseData(){

  // put the logic to put in the code block
  // or put in the logic to take it away.

  
  switch (resourceType) {
    case 'people':
      fetchPeople();
      break;
    case 'planets':
      fetchPlanet();
      break;
    case 'starships':
       fetchVehicle();
      break;
    case 'vehicles':
    fetchVehicle();
    break;
    case 'species':
      fetchSpecies();
    break;
  // open D&Dcalc to see how I set the button to delete the table.
  // I guess if something exists then I make it delete, if
    }
}

function fetchPeople(){

  let fullUrl;
  let error;
  //let theJSON;
  fullUrl = baseUrl + resourceType + "/?search=" + clientResource;


  // create headers and request to deal with cors
  
  let h = new Headers();
  h.append('Accept', 'application/json');

  let req = new Request(fullUrl, {
	method: 'GET',
	headers: h,
	mode: 'cors'
	});
  // take the fullURl to fetch the resource
  // take the response stream and call Body.json() method on it
  // that method reads the response until completion
  // then take the promise and assign the json to a variable to use later
  // catch errors bc without a .catch() many browsers won't work with it.
  
  //fetch(fullUrl).then(res => res.json()).then(json => ourInfo = json).catch(err => error = "Something went wrong" )

  insertCodeBlock();
  // .then() chain so that everything is taken care of then callback(theJSON) is called?

  // put the req into fetch to asynchronously deal with the rest
  // of the information

fetch(req).then(res => res.json()).then(json => ourInfo = json)
  .then(ourInfo => theJSON = ourInfo.results[0])
  .then((theJSON) => {document.getElementById('forName').innerText = theJSON.name;
  delete theJSON.name;
   let newOutput ='';

    for (trait in theJSON){
     if (trait === 'homeworld'){
	break;}

	newOutput += `<li>${trait}: ${theJSON[trait]}`}
	document.getElementById('resultList').innerHTML = newOutput;
	}).catch(err => console.log(err))

}
function insertCodeBlock(){
  
 resultsSection.innerHTML = `<pre id="removePre">
                              <code>
                                <ul id="resultList">
                                </ul>
                              </code>
                            </pre>`;
                  
}

// remove the code block when user makes another search



function removeCodeBlock() {
  document.getElementById("removePre").remove();
}


function fetchVehicle(){

  let fullUrl;
  //let theJSON;
  fullUrl = baseUrl + resourceType + "/?search=" + clientResource;


  // create headers and request to deal with cors
  
  let h = new Headers();
  h.append('Accept', 'application/json');

  let req = new Request(fullUrl, {
	method: 'GET',
	headers: h,
	mode: 'cors'
	});
  // take the fullURl to fetch the resource
  // take the response stream and call Body.json() method on it
  // that method reads the response until completion
  // then take the promise and assign the json to a variable to use later
  // catch errors bc without a .catch() many browsers won't work with it.
  
  //fetch(fullUrl).then(res => res.json()).then(json => ourInfo = json).catch(err => error = "Something went wrong" )

  insertCodeBlock();
  // .then() chain so that everything is taken care of then callback(theJSON) is called?

  // put the req into fetch to asynchronously deal with the rest
  // of the information

fetch(req).then(res => res.json()).then(json => ourInfo = json)
  .then(ourInfo => theJSON = ourInfo.results[0])
  .then((theJSON) => {document.getElementById('forName').innerText = theJSON.name;
  delete theJSON.name;
   let newOutput ='';


   for (trait in theJSON){
    if (trait === 'pilots'){
 break;}

   
 newOutput += `<li>${trait}: ${theJSON[trait]}`
 }

document.getElementById('resultList').innerHTML = newOutput;
}).catch(err => console.log(err)); 

}






function fetchSpecies() {



  let fullUrl;
  //let theJSON;
  fullUrl = baseUrl + resourceType + "/?search=" + clientResource;


  // create headers and request to deal with cors
  
  let h = new Headers();
  h.append('Accept', 'application/json');

  let req = new Request(fullUrl, {
	method: 'GET',
	headers: h,
	mode: 'cors'
	});
  // take the fullURl to fetch the resource
  // take the response stream and call Body.json() method on it
  // that method reads the response until completion
  // then take the promise and assign the json to a variable to use later
  // catch errors bc without a .catch() many browsers won't work with it.
  
  //fetch(fullUrl).then(res => res.json()).then(json => ourInfo = json).catch(err => error = "Something went wrong" )

  insertCodeBlock();
  // .then() chain so that everything is taken care of then callback(theJSON) is called?

  // put the req into fetch to asynchronously deal with the rest
  // of the information

fetch(req).then(res => res.json()).then(json => ourInfo = json)
  .then(ourInfo => theJSON = ourInfo.results[0])
  .then((theJSON) => {document.getElementById('forName').innerText = theJSON.name;

  document.getElementById('forName').innerText = theJSON.name;
  delete theJSON.name;
  let newOutput ='';
  

for (trait in theJSON){
  if (trait === 'people'){
break;}

if (trait === 'homeworld'){
 continue;
}
}
newOutput += `<li>${trait}: ${theJSON[trait]}`


document.getElementById('resultList').innerHTML = newOutput;
}).catch(err => console.log(err)) }




// fetch the planet


function fetchPlanet(){
  

let fullUrl;
  //let theJSON;
  fullUrl = baseUrl + resourceType + "/?search=" + clientResource;


  // create headers and request to deal with cors
  
  let h = new Headers();
  h.append('Accept', 'application/json');

  let req = new Request(fullUrl, {
	method: 'GET',
	headers: h,
	mode: 'cors'
	});
  // take the fullURl to fetch the resource
  // take the response stream and call Body.json() method on it
  // that method reads the response until completion
  // then take the promise and assign the json to a variable to use later
  // catch errors bc without a .catch() many browsers won't work with it.
  
  //fetch(fullUrl).then(res => res.json()).then(json => ourInfo = json).catch(err => error = "Something went wrong" )

  insertCodeBlock();
  // .then() chain so that everything is taken care of then callback(theJSON) is called?

  // put the req into fetch to asynchronously deal with the rest
  // of the information

fetch(req).then(res => res.json()).then(json => ourInfo = json)
  .then(ourInfo => theJSON = ourInfo.results[0])
  .then((theJSON) => {document.getElementById('forName').innerText = theJSON.name;
  delete theJSON.name;
   let newOutput ='';


   for (trait in planetJson){
    if (trait === 'residents'){
 break;}

 newOutput += `<li>${trait}: ${planetJson[trait]}`
 }

document.getElementById('resultList').innerHTML = newOutput;

  }).catch(err => console.log(err)); 

}