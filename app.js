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

resourceTypeValue.addEventListener("click", () => resourceType = resourceTypeValue.value)

// bind the search button
let goButton = document.getElementById('goButton');

// bind the language buttons
let engLang = document.getElementById("English");

//let wookieLang = document.getElementById("Wookie");


// define the base URL for SWAPI (star wars API)
let baseUrl = "https://swapi.co/api/";


goButton.addEventListener("click", chooseData());

function chooseData(){

  // put the logic to put in the code block
  // or put in the logic to take it away.

  
  switch (resourceType) {
    case 'people':
      fetchData(insertPeopleInfo);
      break;
    case 'planets':
      fetchData(insertPlanetInfo);
      break;
    case 'starships':
       fetchData(insertVehiclesShipsInfo);
      break;
    case 'vehicles':
    fetchData(insertVehiclesShipsInfo)
    break;
  // open D&Dcalc to see how I set the button to delete the table.
  // I guess if something exists then I make it delete, if
    }
}

function fetchData(callback){
  let fullUrl;
  let error;
  let theJSON;
  fullUrl = baseUrl + resourceType + "?search=" + clientResource;
  // take the fullURl to fetch the resource
  // take the response stream and call Body.json() method on it
  // that method reads the response until completion
  // then take the promise and assign the json to a variable to use later
  // catch errors bc without a .catch() many browsers won't work with it.
  
  //fetch(fullUrl).then(res => res.json()).then(json => ourInfo = json).catch(err => error = "Something went wrong" )


  // .then() chain so that everything is taken care of then callback(theJSON) is called?
  fetch(fullUrl).then(res => res.json()).then(json => ourInfo = json)
  .then(ourInfo => theJSON = ourInfo.results[0])
  .then(callback(theJSON))
  .catch(err => error = "Something went wrong" )

  //theJSON = ourInfo.results[0];
  // switch on the button submit
  //callback(theJSON);
}

// insert code block with skeleton's format.
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

// functions to determine when to stop displaying information

//

function insertPeopleInfo(ourJson){
 
  document.getElementById('forName').innerText = ourJson.name;
  delete ourJson.name;
let newOutput ='';

for (trait in ourJson){
     if (trait === 'homeworld'){
	break;}

	newOutput += `<li>${trait}: ${ourJson[trait]}`
	}

document.getElementById('resultList').innerHTML = newOutput;
}



function insertPlanetInfo(planetJson){
 
  document.getElementById('forName').innerText = planetJson.name;
  delete planetJson.name;
  let newOutput ='';
  
  for (trait in planetJson){
       if (trait === 'residents'){
    break;}
  
    newOutput += `<li>${trait}: ${planetJson[trait]}`
    }
  
  document.getElementById('resultList').innerHTML = newOutput;
  }


  
function insertSpeciesInfo(speciesJson){
 
  document.getElementById('forName').innerText = speciesJson.name;
  delete speciesJson.name;
  let newOutput ='';
  
  for (trait in speciesJson){
       if (trait === 'people'){
    break;}

    if (trait === 'homeworld'){
      continue;
    }
      
    newOutput += `<li>${trait}: ${speciesJson[trait]}`
    }
  
  document.getElementById('resultList').innerHTML = newOutput;
  }


  
  
function insertVehiclesShipsInfo(vehiclesJson){
 
  
  document.getElementById('forName').innerText = vehiclesJson.name;
  delete vehiclesJson.name;
  let newOutput ='';
  
  for (trait in vehiclesJson){
       if (trait === 'pilots'){
    break;}

      
    newOutput += `<li>${trait}: ${vehiclesJson[trait]}`
    }
  
  document.getElementById('resultList').innerHTML = newOutput;
  }









