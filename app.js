// Create UI bringing in basic API star wars
// Make any resource by name search able
// the resource becames what was typed

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
let baseUrl = "https://swapi.dev/api/";


goButton.addEventListener("click", function(e) {e.preventDefault; 
  getResource.value = '';
  
  fetchData()});

  async function fetchData() {
    // string to concatenate endpoint
    removeCodeBlock();
    document.getElementById('loading').style.display = "block";
    let fullUrl;
    fullUrl = baseUrl + resourceType + "/?search=" + clientResource;
    // create headers and request to deal with cors
    let h = new Headers();
    h.append('Accept', 'application/json');
     
    let request = new Request(fullUrl, {
    method: 'GET',
    headers: h,
    mode: 'cors'
    });
    // asynch await
    // wrap in try catch

    try {

    
    let response = await fetch(request);
    
    let resJson =  await response.json()
    resJson = await resJson.results[0]
    document.getElementById('forName').innerText = resJson.name;
    delete resJson.name
    insertCodeBlock();
       let newOutput = '';
  // set up a switch to change the logic of filtering out unwanted information
  // in the json based on users search parameters
  switch (resourceType) {
    case 'people':
       for (trait in resJson){
       if (trait === 'homeworld'){
  break;}
  
      newOutput += `<li>${trait}: ${resJson[trait]}`;}
      document.getElementById('resultList').innerHTML = newOutput;
  
    break;
  
    case 'planets':
  
      for (trait in resJson){
        if (trait === 'residents'){
          break;}
          newOutput += `<li>${trait}: ${resJson[trait]}`;}
        document.getElementById('resultList').innerHTML = newOutput;
    break;
  
    case 'starships':
       for (trait in resJson){
        if (trait === 'pilots'){
         break;}
        newOutput += `<li>${trait}: ${resJson[trait]}`;}
      document.getElementById('resultList').innerHTML = newOutput;
  
    break;
  
    case 'vehicles':
    
      for (trait in resJson){
        if (trait === 'pilots'){
          break;}
         newOutput += `<li>${trait}: ${resJson[trait]}`;}
      document.getElementById('resultList').innerHTML = newOutput;
  
    break;
  
    case 'species':
      
    for (trait in resJson){
     if (trait === 'people'){
      break;}
  
    if (trait === 'homeworld'){
      continue;
      }
    newOutput += `<li>${trait}: ${resJson[trait]}`;}
    document.getElementById('resultList').innerHTML = newOutput;}
  
    } // try

    catch(err){
      clearAlert();
      showAlert("error with your search term or server", 'button-primary u-full-width deleteMe')
    }
      document.getElementById("loading").style.display = "none";
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
// if wanted later



function removeCodeBlock() {
  try{

  
  document.getElementById("removePre").remove();
  }
  catch(err){
    
  }
}
// add an id of 
function showAlert(message, className) {
  // clear remaining alerts
  this.clearAlert();
  const div = document.createElement('div');
  div.className = className;
  div.style.backgroundColor = "red";
  div.style.color = 'white';
  div.style.borderRadius = "5px";
  /// add classes
  div.appendChild(document.createTextNode(message));
  // Get parent
  const errorParent = document.getElementById("errorParent");
  const before = document.getElementById("before");

  errorParent.insertBefore(div, before)

  setTimeout(() => {
    this.clearAlert();
  }, 2800);

}

// class has to be button-primary

function clearAlert() {
  const currentAlert = document.querySelector('.deleteMe');

  if(currentAlert){
    currentAlert.remove();
  }
}