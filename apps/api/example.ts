import axios from 'axios';

export const getUsers = async () => {
	try {
    console.log('calling api.');
		const res = await axios.get('https://jsonplaceholder.typicode.com/users');
		return res;
	} catch (error) {
		console.log(error);
	}
};
