const API_TOKEN="d218308e8494ec8fd660e5ccd226a962";

export function getFilmsFromApiWithSearchedText(text) {
    const url = 'https://api.themoviedb.org/3/movie/550?api_key='+ API_TOKEN + '&query='+ text + '&language=fr'
    return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.error(error))
}

export function getImageFromApi(name) {
    return 'https://image.tmdb.org/t/p/w300' + name
}
