function getJSON(url) {
	if (url !== null) {
		return fetch(url).then(function (response) {
			return response.json();
		}).catch(function (error) {
			window.alert(error);
		});
	}
}
//lets get some ships
function fetchShips() {
	for (var i = 1; i < 50; i++) {
		var url = "https://swapi.co/api/starships/" + i + "/";
		//call getJSON function to get the list of ships from the api
		getJSON(url).then(function (json) {
			for (var property in json) {
				if (property == "url") {
					var link = json[property].replace(json[property], "<a href='$&' target='_blank'>" + json[property] + "</a> &#8594; " + json.name + "<br>" + "<br>");
					document.getElementById("ships").innerHTML += link;
				}
			}
		})
	}
}

function getData() {
	var url = json[proper]
	getJSON(url).then(function (json) {})
}