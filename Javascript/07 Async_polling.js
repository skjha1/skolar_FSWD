// Async/await example 

async function fetchData () {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve("Data fetched Successfully");
        }, 10000);
    });
}



// Function to process data using async/await 

async function processData (){
    let pollingCount = 0;
  // polling function 
    const pollingInterval = setInterval(async () => {
        pollingCount++;
    

    if (pollingCount === 5) {
        clearInterval(pollingInterval); // stop polling after 5 attempt

        try {
            const data = await fetchData(); // Fetch data
            console.log("Data: ", data);
        } catch (error) {
            console.error("Error", error);
        }
    } else {
        console.log("Polling....") // Log msg at each poll
    }

    }, 2000);

    console.log("Polling...."); // Initial log msg

}


// Call processdata

processData();
