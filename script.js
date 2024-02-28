async function fetchData() {
    try {
        const response = await fetch('travelapi.json');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}

// Example usage:
fetchData()
    .then(data => {
        console.log(data);
        // You can do whatever you need with the fetched data here
    })
    .catch(error => {
        // Handle errors here
        console.error('Error:', error);
    });
