//Javascript module secara default kode plg atasnya adalah async function
function samplePromise(){
    debugger
    return Promise.resolve("itsaFan");
}

const name = await samplePromise();
console.info(name);