const { json } = require('body-parser');
const testeData = require('../data/teste-data')

exports.getPosts = function () {
    const teste = testeData.getTeste()
    if (!validaSoma(1,2)) throw new Error(()=>{
        'Operação fora da regra de negócio.'
       
    })
	return teste
};

function validaSoma(a, b){
    if (a + b > 2){
        return true
    }
    return false
}