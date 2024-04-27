// Callback example 
function fetchData(Callback) {
    // simulate fetching data async after 2 sec 
    setTimeout(() => {
        Callback("Data fetched successfully");
    }, 2000)
}


function processData (data){
    console.log("processing data: ", data);
}


// Call fetchdata with processdata as a callback 

fetchData(processData);


// Async example 

console.log("Strat");

setTimeout(() => {
    console.log("Async operation completed");
}, 2000)

console.log("End");


// Javascript Promise 

function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("data fetched successfully");
        }, 5000);
    });
}


// Using the promise 
fetchData()
    .then(data => console.log("Data:", data)) // Success callback
    .then(error => console.error("Error:", error)); // Error callback


// Async/Await example


async function fetchData() {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve("data fetched successfully");
        }, 10000);
    });
}

async function processData(){
    try {
        const data = await fetchData(); // wait for the promise to resolve 
        console.log("Data: ",data)
    } catch (error) {
        console.log("Error: ", error);
    }
}

// Call processdata
processData();
