function tapBeer(){

}
function trappistBeer(){
    
}
function bottledBeer(){
    
}
function fruitBeer(){
    
}

window.addEventListener("load", () => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("sw.js");
    }
  });