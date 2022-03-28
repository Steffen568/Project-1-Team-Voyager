function eventData() {
    var apiURL = `https://lldev.thespacedevs.com/2.2.0/event/`;

    fetch(apiURL).then(function(response) {
        if (response.ok) {
            console.log(response);
            response.json().then(function(data) {
                console.log(data);
                console.log(response);
                displayEventData(data);
            });
        }
    });
}

function fetchData() {
    //check to if document contains a div with the specified ID and display the correct js to the HTML page
    if (document.getElementById("eventInfoContainer")) {
        eventData();
    }
}

// console.log("hello");
eventData();

var displayEventData = function(event) {
    $('.astroEvent').remove()
    // loop through astronaut info
    for (var i = 0; i < event.results.length; i++) {
        //format information from api fetch
        var eventName = event.results[i].name;
        var eventDescription = event.results[i].description;
        var eventPicture = event.results[i].feature_image;

        var eventDate = event.results[i].date;

        // create container for astronaut info
        var infoDivElement = document.createElement("div");
        infoDivElement.classList =
            "astroEvent event-border w3-center w3-dark-gray w3-round-xxlarge w3-margin";
        //append div to parent container
        var infoContainerElement = document.getElementById("eventInfoContainer");
        infoContainerElement.appendChild(infoDivElement);

        // element to hold image
        var eventElement = document.createElement("img");
        eventElement.src = eventPicture;
        eventElement.classList = "w3-round w3-image w3-margin-top w3-mobile";
        // correct display if no mission data available
        eventElement.height = 400;
        eventElement.width = 400;
        infoDivElement.append(eventElement);

        // create element to hold formated information (name)
        var eventNameElement = document.createElement("h2");
        eventNameElement.textContent = eventName;
        // append name to parent div
        infoDivElement.appendChild(eventNameElement);

        // create element to hold formated information (astronaut info)
        var eventInfoElement = document.createElement("p");
        eventInfoElement.innerHTML = eventDescription;
        eventInfoElement.classList = "w3 padding-16";
        // append astronaut info to parent
        infoDivElement.appendChild(eventInfoElement);

        var eventDateElement = document.createElement("p");
        eventDateElement.innerHTML = eventDate.substring(0, 10);
        eventDateElement.classList = "w3 padding-16";
        // append astronaut info to parent
        infoDivElement.appendChild(eventDateElement);
    }
};

fetchData();