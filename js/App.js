class App {
    constructor() {
        this.$moviesWrapper = document.querySelector('.movies-wrapper')
        this.newMoviesApi = new MovieApi('/data/new-movie-data.json')
        this.externalMoviesApi = new MovieApi('/data/external-movie-data.json')
    }

    async main() {
        const newMoviesData = await this.newMoviesApi.getMovies()
        const externalMoviesData = await this.externalMoviesApi.getMovies()

        const newMovies = newMoviesData.map(movie => new MoviesFactory(movie, 'newApi'))
        const externalMovies = externalMoviesData.map(movie => new MoviesFactory(movie, 'externalApi'))

        const fullMovies = newMovies.concat(externalMovies)
        
        fullMovies
            .forEach(movie => {
                const Template = new MovieCard(movie)
                this.$moviesWrapper.appendChild(
                    Template.createMovieCard()
                )
            })
    }
}

const app = new App()
app.main()
