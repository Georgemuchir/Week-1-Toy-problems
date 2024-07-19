document.addEventListener('DOMContentLoaded', function() {
    const locationInput = document.getElementById('locationInput');
    const searchButton = document.getElementById('searchButton');
    const includeRidesCheckbox = document.getElementById('includeRidesCheckbox');
    const locationList = document.getElementById('locationList');
    const container = document.querySelector(".tab-contents");
    let locations = []; // To store locations from db.json
    let ridesData = []; // To store rides data fetched from server

    // Function to fetch rides data from server
    function fetchRidesData() {
        fetch("http://localhost:3000/rides")
            .then(response => response.json())
            .then(data => {
                ridesData = data.rides; // Store rides data
console.log(data)
                // Display rides data initially
                displayRidesData(data);
            })
            .catch(error => {
                console.error('Error fetching rides data:', error);
            });
    }

    // Fetch locations from db.json
    fetch('db.json')
        .then(response => response.json())
        .then(data => {
            locations = data.locations; // Assuming 'locations' is an array of location objects in db.json
        })
        .catch(error => {
            console.error('Error fetching locations from db.json:', error);
        });

    // Function to filter rides based on selected location
    function filterRidesByLocation(locationName) {
        return ridesData.filter(ride => {
            const pickupLocation = ride.pickup.location.toLowerCase();
            const dropoffLocation = ride.dropoff.location.toLowerCase();
            return pickupLocation.includes(locationName) || dropoffLocation.includes(locationName);
        });
    }

    // Function to display rides data in the UI
    function displayRidesData(rides) {
        container.innerHTML = ''; // Clear previous content
        rides.forEach(ride => {
            const rideElement = document.createElement("div");
            rideElement.classList.add("ride");

            const pickupLocation = document.createElement("h2");
            pickupLocation.textContent = `Pickup: ${ride.pickup.location}`;

            const dropoffLocation = document.createElement("p");
            dropoffLocation.textContent = `Dropoff: ${ride.dropoff.location}`;

            const latitude = document.createElement("div");
            latitude.textContent = `Latitude: ${ride.pickup.latitude}`;

            const longitude = document.createElement("p");
            longitude.textContent = `Longitude: ${ride.pickup.longitude}`;

            rideElement.appendChild(pickupLocation);
            rideElement.appendChild(dropoffLocation);
            rideElement.appendChild(latitude);
            rideElement.appendChild(longitude);

            container.appendChild(rideElement);
        });
    }

    // Event listener for search button click
    searchButton.addEventListener('click', function() {
        const input = locationInput.value.trim();
        const filteredLocations = filterLocations(input);
        displayLocations(filteredLocations);

        if (includeRidesCheckbox.checked) {
            const filteredRides = filterRidesByLocation(input);
            displayRidesData(filteredRides);
        } else {
            displayRidesData(ridesData); // Display all rides
        }
    });

    // Event listener for input changes
    locationInput.addEventListener('input', function() {
        const input = this.value.trim();
        const filteredLocations = filterLocations(input);
        displayLocations(filteredLocations);

        // Optionally update displayed rides based on input
        if (includeRidesCheckbox.checked) {
            const filteredRides = filterRidesByLocation(input);
            displayRidesData(filteredRides);
        }
    });

    // Initial fetch and display of rides data
    fetchRidesData();
});