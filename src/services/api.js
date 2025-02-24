// Handles API calls and external services.


export const fetchData = async (endpoint) => {
    const res = await fetch(`https://api.example.com/${endpoint}`);
    return await res.json();
  };