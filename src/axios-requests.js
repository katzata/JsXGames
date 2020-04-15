import axios from 'axios';

const instance = axios.create({
	baseURL: "https://jsx-games.firebaseio.com"
	// baseURL: "https://jsonplaceholder.typicode.com"
});

instance.defaults.headers.common["Authorisation"] = "AUTH TOKEN FROM INSTANSE";

export default instance;