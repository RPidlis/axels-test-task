import axios from 'axios'


const instance = axios.create({
    baseURL: 'http://demo3743498.mockable.io/'
})

export const scheduleApi = {
    get: () => {
        return instance.get('schedule').then(respons=>{
            // console.log(JSON.parse(respons.data))
            console.log(respons)
        })
    }

}
