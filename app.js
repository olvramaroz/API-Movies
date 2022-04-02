
const apiKey = 'b1e3eec6badf8d3df7fd027c7d4dd4f1';
const baseURL = 'https://api.themoviedb.org/3';
const trendingWeekly = '/trending/movie/week?api_key='
const apiURL = baseURL + trendingWeekly + apiKey;
const imagePoster = 'https://image.tmdb.org/t/p/w500'
const main = document.getElementById('main');

getMovies(apiURL);

function getMovies(url) {
    fetch(url)
    .then(res => res.json())
    .then(data => {
        showMovies(data.results);
    })
}

function showMovies(data) {
    main.innerHTML = '';

    data.forEach(movie => {
        const movieCard = document.createElement('section');
        movieCard.classList.add('cards');

        const {title, poster_path, overview, release_date, vote_average} = movie;

        movieCard.innerHTML = `
            <section class="card">
                <section class="front">
                    <img class="images" src="${imagePoster+poster_path}" alt="${title}">
                    <div class="title-rating">
                        <h2 class="title">${title}</h2>
                        <p class="rating">${vote_average}</p>
                    </div>
                </section>
                <section class="back">
                    <p class="description">${overview}</p>
                    <p class="date">Date de sortie : ${release_date}</p>
                </section>
            </section>
        `
        main.appendChild(movieCard);
    })
}

