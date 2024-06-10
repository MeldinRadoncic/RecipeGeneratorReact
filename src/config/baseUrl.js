const baseUrl = process.env.NODE_ENV === 'development' ? 'http://localhost:5000/api/generate_recipe' : process.env.PROD_URL;



export default baseUrl;