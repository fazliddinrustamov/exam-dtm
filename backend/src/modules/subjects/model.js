const { GETALL } = require('./query.js')
const { fetchAll } = require('../../lib/postgres.js')

const READ = async ({id = 0}) => {
    try {
        return await fetchAll(GETALL, id)
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    READ
}