async function fetchData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
    
    const data = await response.json();
    console.log('Success:', data);
  } catch (error) {
    console.error('Fetch failed:', error);
  }
}

// Example usage:
fetchData('https://typicode.com');
