const config = {
    development: {
      API_BASE_URL: "http://localhost:5000/api",
      DEBUG_MODE: true,
    },
    production: {
      API_BASE_URL: "https://api.example.com",
      DEBUG_MODE: false,
    },
  };
  
  // Determine the current environment (default to development)
  const currentEnv = process.env.REACT_APP_ENV || "development";
  export default config[currentEnv];
  