// let map;

// function initMap() {
//   map = new google.maps.Map(document.getElementById("map"), {
//     center: new google.maps.LatLng(-33.91722, 151.23064),
//     zoom: 16,
//   });

//   const iconBase =
//     "https://developers.google.com/maps/documentation/javascript/examples/full/images/";
//   const icons = {
//     parking: {
//       icon: iconBase + "parking_lot_maps.png",
//     },
//     library: {
//       icon: iconBase + "library_maps.png",
//     },
//     info: {
//       icon: iconBase + "info-i_maps.png",
//     },
//   };


//   // Create markers.
//   for (let i = 0; i < features.length; i++) {
//     const marker = new google.maps.Marker({
//       position: features[i].position,
//       icon: icons[features[i].type].icon,
//       map: map,
//     });
//   }
// }

// window.initMap = initMap;


function initMap() {
  let coordinates = {lat: 47.212325, lng: 38.933663};
  // eslint-disable-next-line no-undef
  let map = new google.maps.Map(document.querySelector('.map'), {
    center: coordinates,
  });

  const image = 'images/marker.png';

  // eslint-disable-next-line no-undef
  marker = new google.maps.Marker({
    position: coordinates,
    map,
    icon: image,
  });
}

export {initMap};
