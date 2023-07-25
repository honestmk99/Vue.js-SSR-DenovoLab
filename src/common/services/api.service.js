import axios from 'axios'

const ApiService = {
    setHeader() {},
    get(resource) {
        this.setHeader()
        return axios.get(`${resource}`).catch((error) => {
            console.log(`ApiService ${error}`)
            return error.response
        })
    },

    post(resource, params) {
        this.setHeader()
        return axios.post(`${resource}`, params).catch((error) => {
            console.log(`ApiService ${error}`)
            return error.response
        })
    },

    update(resource, slug, params) {
        this.setHeader()
        return axios.put(`${resource}/${slug}`, params).catch((error) => {
            console.log(`ApiService ${error}`)
            return error.response
        })
    },

    put(resource, params) {
        this.setHeader()
        return axios.put(`${resource}`, params).catch((error) => {
            console.log(`ApiService ${error}`)
            return error.response
        })
    },

    patch(resource, params) {
        this.setHeader()
        return axios.patch(`${resource}`, params).catch((error) => {
            console.log(`ApiService ${error}`)
            return error.response
        })
    },

    delete(resource) {
        this.setHeader()
        return axios.delete(resource).catch((error) => {
            console.log(`ApiService ${error}`)
            return error.response
        })
    },
}

export default ApiService
