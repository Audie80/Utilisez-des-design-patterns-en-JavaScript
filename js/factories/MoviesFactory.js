class MoviesFactory {
    constructor(data, type) {
        // Si le type correspond à new-movie-data, alors retourne-moi le formatage Movie
        if (type === 'newApi') {
            return new Movie(data)
        // Sinon retourne-moi le formatage external
        } else if (type === 'externalApi') {
            return new ExternalMovie(data)
        // Une bonne pratique est de déclencher une erreur si le format n'est pas reconnu
        } else {
            throw 'Unknown type format'
        }
    }
 }