import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.unsplash.com',
	headers: {
		Authorization: 'Client-ID s9IwETOVomO1SqWCN_jvdgTOdz9C44vsapQYHrtbe2M',
	},
});
