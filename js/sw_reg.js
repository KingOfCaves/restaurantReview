if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js')
    .then(()=>{ console.log("SERVICE WORKER -- COMPLETE") })
    .catch(()=>{ console.oog("SERVICE WORKER -- FAILED") })
} else {
    console.log( "SERVICE WORKER -- NOT AVAILABLE ON YOUR BROWSER");
}