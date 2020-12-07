function initMap(){
    let myMap = document.getElementById("map");
    let options = {
      zoom:14,
      center:{
        lat:42.984924,
        lng:-81.245277
      }
    }

    let map = new google.maps.Map(myMap,options);

    let marker = new google.maps.Marker({
      position:{lat:42.984924,lng:-81.245277},
      map:map,
      
    })
  }