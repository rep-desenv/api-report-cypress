const testsData = require('../data/tests-data')
const { json } = require('body-parser');

exports.getTests = function(){
    return testsData.getTests()
}

exports.getTest = async function(id){
    const test = await testsData.getTest(id)
    if(test.length == 0 ) throw new Error("Item not found")
    return test
}

exports.saveTest = async function (test){
    // const existingTest = await testsData.getTestsDesc(test.test_name)
    // if (existingTest > 0 ) throw Error("Post already exists")

    return testsData.postTest(test)
}

exports.updateTest = async function(id, test){
    const existingTest = await testsData.getTest(id)
    if (existingTest.length == 0) throw new Error("Item not found")

    return testsData.putTest(id, test)
}

exports.deleteTest = async function(id){
    const existingTest = await testsData.getTest(id)
    if (existingTest == 0) throw new Error("Item not found")

    return testsData.deleteTest(id)
}