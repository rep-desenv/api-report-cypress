const { json } = require('body-parser');
const testeData = require('../data/teste-data')

// exports.getTeste = function () {
//     const teste = testeData.getTeste()
//     if (!validaSoma(1,2)) throw new Error("Operação fora da regra de negócio.")      
//     return teste
// };

// function validaSoma(a, b){
//     if (a + b > 2){
//         return true
//     }
//     return false
// }

exports.getTestes = function () {
    return testeData.getTestes()
};

exports.getTeste = async function(id){    
    const teste = await testeData.getTeste(id)
    if (teste.length == 0) throw new Error("Item not found")
    return teste
}

exports.saveTeste = async function(teste) {
    //console.log(teste.desc_teste)
    const existingTeste = await testeData.getTesteDesc(teste.desc_teste)    
    if (existingTeste.length > 0) throw new Error("Post already exists")

    return testeData.saveTeste(teste)    
}

exports.updateTeste = async function(id, teste){
    const existingTeste = await testeData.getTesteDesc(teste.desc_teste)    
    if (existingTeste.length > 0) throw new Error("Post already exists")

    await exports.getTeste(id)
    return testeData.updateTeste(id, teste)
}

exports.deleteTeste = async function (id) {
    const existingTeste = await testeData.getTeste(id)
    if (existingTeste.length == 0) throw new Error("Item not found")

    return testeData.deleteTeste(id)
}