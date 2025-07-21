

export const getGifts = async (category) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=s4QrzL5684yfspG5YuPhaj0AhmpKsbNy&q=${category}&limit=9`;

    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url,
        user: img.username
    }))
    return gifs
}