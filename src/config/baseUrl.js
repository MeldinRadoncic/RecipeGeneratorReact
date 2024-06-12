const baseUrl = process.env.REACT_APP_ENV === 'development' ? 'http://localhost:5000' : process.env.REACT_APP_API_URL;



export default baseUrl;