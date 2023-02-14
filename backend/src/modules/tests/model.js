const { GETALL } = require('./query.js')
const { fetchAll } = require('../../lib/postgres.js')

const READ = async ({firstSubject = 1, secondSubject = 2}) => {
    try {
        return await fetchAll(GETALL, firstSubject, secondSubject)
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    READ
}