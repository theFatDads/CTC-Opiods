# The Next Step
## Our Goal
When designing our submission for the Connecticut College Tech Challenge, we acknowledged that opioids effected all demographics of people. Anyone who was in pain was at risk of using, and the subsequently abusing opioids.

We wanted to create a webapp which could provide resources for as many groups of people as possible. Our webapp should be able to assist anyone who has or will take opioids.

## Our Direction
_The Next Step_ is a timeline style information resource for providing people in Connecticut with data and resources to assist them with Opioids in every step of the process. 

_The Next Step_ should be used as a quick, easy to navigate resource to provide suggestions to lead people away from opioid usage, and towards recovery or an alternative.


## The Code
In designing our website, we used:
* HTML, CSS, and JavaScript
* Bootstrap 4 for card creation
* Jquery for webpage interaction
* The Google Maps API
* Data from https://data.CT.gov acquired with the REST API.

## The Framework
* https://github.com/theFatDads/GoogleMapsData

To represent the data from data.ct.gov in a map, we used the Google Maps embed and geolocation APIs to interpret data and represent it.

* https://github.com/theFatDads/Fetch-Geolocations

Fetch-geolocations is a web server created by us to regularly refresh our geolocated data with that from data.ct.gov. By using the Google Maps geolocation API we are able to make certain datasets visible on a map with directions, when they normally couldn't be.

## Additional programs and libraries used
* https://github.com/flesler/jquery.scrollTo a Jquery scrolling library for easily controlling the user's location on the page
* https://realfavicongenerator.net for favicon generation from our logo
* Google Data Studio for creating our pie chart
