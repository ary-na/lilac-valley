// Code sourced and adapted from:
// https://developers.google.com/maps/documentation/javascript/adding-a-google-map

// Initialize and add the map
let map;

async function initMap() {
    // The location of Blue Mountains
    const position = { lat: -33.700001, lng: 150.300003 };
    // Request needed libraries.
    //@ts-ignore
    const { Map } = await google.maps.importLibrary("maps");
    const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

    // The map, centered at Blue Mountains
    map = new Map(document.getElementById("map"), {
        zoom: 6,
        center: position,
        mapId: "BLUE_MOUNTAINS",
    });

    // The marker, positioned at Blue Mountains
    const marker = new AdvancedMarkerElement({
        map: map,
        position: position,
        title: "Blue Mountains",
    });
}

initMap();