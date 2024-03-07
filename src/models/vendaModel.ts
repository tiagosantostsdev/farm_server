import mongoose from "mongoose"

const vendasSchema = new mongoose.Schema({
    codigo: {type:String, required:true},
    nomeProduto:{type:String, required:true},
    nomeCliente:{type:String, required:true},
    quantidade:{type:String, required:true},
    valor:{type:String, required:true},
})



const produtosVendidosSchema = new mongoose.Schema({
    codigo: {type:String, required:true},
    nomeProduto:{type:String, required:true},
    nomeCliente:{type:String, required:true},
    quantidade:{type:String, required:true},
    total:{type:String, required:true},
    troco:{type:String}
})