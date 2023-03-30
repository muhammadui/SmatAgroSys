// let map: google.maps.Map;
// async function initMap(): Promise<void> {
//   //@ts-ignore
//   const { Map } = await google.maps.importLibrary("maps");
//   map = new Map(document.getElementById("map") as HTMLElement, {
//     center: { lat: -34.397, lng: 150.644 },
//     zoom: 8,
//   });
// }

// initMap();


// Create the script tag, set the appropriate attributes
// const API_KEY = "";
// const script = document.createElement('script');
// script.src = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&callback=initMap`;
// script.async = true;

// // Attach your callback function to the `window` object
// window.initMap = function() {
//   // JS API is loaded and available

// };

// // Append the 'script' element to 'head'
// document.head.appendChild(script);


// import { Loader } from "@googlemaps/js-api-loader";

// const loader = new Loader({
//     apiKey: "YOUR_API_KEY",
//     version: "weekly"
//   });
  
//   loader.load().then(async () => {
//     const { Map } = await google.maps.importLibrary("maps") as google.maps.MapsLibrary;
//     map = new Map(document.getElementById("map") as HTMLElement, {
//       center: { lat: -34.397, lng: 150.644 },
//       zoom: 8,
//     });
//   });
