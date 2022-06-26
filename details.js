jsonData = localStorage['jsonData'];

var countriesData = JSON.parse(jsonData);

for(var i = 0; i < countriesData.length; i++){
	console.log(countriesData[i].name);
}


//JSON.parse()=  process of converting JSON object in text format to javascript object
//localStorage = allow javascript sites and apps to save key value pair in web browser with no expiration date.
