async function fetchData() {

	
	let fullUrl;
  	
  	fullUrl = baseUrl + resourceType + "/?search=" + clientResource;


  	// create headers and request to deal with cors
  
  	let h = new Headers();
    h.append('Accept', 'application/json');
    //Access-Control-Allow-Origin: *);

    let request = new Request(fullUrl, {
    method: 'GET',
    headers: h,
    mode: 'cors',
    //'Access-Control-Allow-Origin'
    });
	
	
	let response = await fetch(request);
	
	
 	let resJson =  await response.json()
	resJson = await resJson.results[0]
 	document.getElementById('forName').innerText = resJson.name;
	delete resJson.name
	insertCodeBlock();
	


//document.getElementById('forName').innerText = resJson.name; delete resJson.name;})

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

}