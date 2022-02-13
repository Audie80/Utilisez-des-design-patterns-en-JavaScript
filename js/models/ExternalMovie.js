class ExternalMovie {
    constructor(data) {
        this._duration = data.infos.duration
        this._picture = data.medias.picture
        this._thumbnail = data.medias.thumbnail
        this._released_in = data.infos.released_in
        this._synopsis = data.synopsis
        this._title = data.title_fr
    }

    get duration() {
        return this._duration
    }

    get picture() {
        return `/assets/${this._picture}`
    }

    get thumbnail() {
        return `/assets/thumbnails/${this._thumbnail}`
    }

    get released_in() {
        return this._released_in
    }

    get synopsis() {
        return this._synopsis
    }

    get title() {
        return this._title
    }
}

