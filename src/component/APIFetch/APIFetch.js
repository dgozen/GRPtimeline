const APIFetch = () => {
	return fetch('http://www.mocky.io/v2/5ea446a43000005900ce2ca3')
		.then((response) => response.json())
		.then((data) => {
			console.log(data);
			return data;
		});
};

export default APIFetch;
