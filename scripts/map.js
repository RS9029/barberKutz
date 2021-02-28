
// function to init google maps integration 

function initMap(){
    let myMap = document.getElementById("map");

    // configs to personalize google map
    let options = {
      zoom:14,
      center:{
        lat:42.984924,
        lng:-81.245277
      }
    }

    let map = new google.maps.Map(myMap,options);

    // controls marker on the map
    let marker = new google.maps.Marker({
      position:{lat:42.984924,lng:-81.245277},
      map:map,
      
    })
  }