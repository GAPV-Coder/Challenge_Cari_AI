export const getGifs = async (category) => {
	const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
		category
	)}&limit=10&api_key=y5o7xSqH2Z2MYbMf2EJlusk2QhN2Sk9X`;
	const resp = await fetch(url);
	const { data } = await resp.json();

	const gifs = data.map((img) => ({
		id: img.id,
		title: img.title,
		url: img.images?.downsized_medium.url,
	}));

	return gifs;
};
