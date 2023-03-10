const { Pool } = require('pg')
const { pgConfig } = require('../config.js')

const pool = new Pool(pgConfig)

async function fetch (SQL, ...params) {
    const client = await pool.connect()
    try {
        let {rows: [row]} = await client.query(SQL, params.length ? params : null)
        return row
    } catch (error) {
        console.log(error);
    } finally {
        await client.release()
    }
}

async function fetchAll( SQL, ...params ) {
    const client = await pool.connect()
    try {
        let {rows} = await client.query(SQL, params.length ? params : null)
        return rows
    } catch (error) {
        console.log(error)
    } finally{
        await client.release()
    }
}

module.exports = {
    fetch, fetchAll
}