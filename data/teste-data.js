const database = require('../infra/database')

exports.getTeste = function() {
    //return database.query('select * from report_cypress.teste')
    return database.select().from('teste')
}