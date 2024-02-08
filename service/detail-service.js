const detailData = require('../data/detail-data')
const { json } = require('body-parser');

exports.getDetails = function(){
    return detailData.getDetails()
}

exports.getDetail = async function(id){
    const detail = await detailData.getDetail(id)
    if(detail.length == 0 ) throw new Error("Item not found")
    return detail
}

exports.saveDetail = async function (detail){
    return detailData.postDetail(detail)
}

exports.updateDetail = async function(id, detail){
    const existingDetail = await detailData.getDetail(id)
    if (existingDetail.length == 0) throw new Error("Item not found")

    return detailData.putDetail(id, detail)
}

exports.deleteDetail = async function(id){
    const existingDetail = await detailData.getDetail(id)
    if (existingDetail == 0) throw new Error("Item not found")

    return detailData.deleteDetail(id)
}