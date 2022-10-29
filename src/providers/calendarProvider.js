export class CalendarAPI {
    constructor() {
        this.url = 'http://localhost:3005/meetings'
    }

    load() {
        return this._fetch()
    }

    add(data) {
        const options = {
            method: 'POST',
            body: JSON.stringify(data),
            headers: { 'Content-Type': 'application/json' }
        };

        return this._fetch(options)
    }

    remove(id) {
        const options = { method: 'DELETE' }
        return this._fetch(options, `/${id}`)
    }

    _fetch(options, additionalPath = '') {
        const url = this.url + additionalPath
        return fetch(url, options)
            .then(resp => {
                if (resp.ok) { return resp.json() }
                return Promise.reject(resp)
            })
            .catch(err => console.log(err))
    }
}

export default CalendarAPI
