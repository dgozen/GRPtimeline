const APIFetch = () => {
	return fetch('https://www.mocky.io/v2/5ea446a43000005900ce2ca3')
		.then(function(response) {
			return response.json();
		})
		.then(function(data) {
			return data;
		});
};

export default APIFetch;
