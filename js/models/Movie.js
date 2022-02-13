class Movie {
    constructor(data){
        this._title = data.title;
        this._synopsis = data.synopsis;
        this._picture = data.picture;
        this._duration = data.duration;
        this._released_in = data.released_in;
    }

    get title() {
        return this._title.fr ? this._title.fr : this._title.en
    }

    get synopsis() {
        return this._synopsis;
    }

    get picture() {
        return `/assets/${this._picture}`;
    }

    get thumbnail() {
        return `/assets/thumbnails/${this._picture}`;
    }

    get duration() {
        const nombreHeures = Math.floor(this._duration / 60);
        const nombreMinutes = this._duration - (nombreHeures * 60);
        return `${nombreHeures}h${nombreMinutes}`;
    }

    get released_in() {
        return this._released_in;
    }
}
