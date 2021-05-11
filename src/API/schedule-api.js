import axios from 'axios'


const instance = axios.create({
    baseURL: 'http://demo3743498.mockable.io/'
})

export const scheduleApi = {
    _path: 'schedule',
    get: () => {
        return instance.get(this._path).then(response => {
            return response.data
        })
    }

}
