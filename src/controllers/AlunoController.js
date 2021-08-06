const knex = require('../database')

module.exports = {
    async index (req,res,next) {

        const results = await knex('aluno')

        return res.json(results)
    },

    async create(req, res, next) {   

        try {

            await knex('aluno').insert(req.body)

            return res.status(201).send({status:"Aluno Inserido No Sistema"})

        } catch (error) {

            next(error)
        }
    },

    async update(req, res, next){
        try {
            const {nome_aluno} = req.params

            const codErro = await knex('aluno').update(req.body).where({nome_aluno})
            
            if(codErro == 1){
                return res.send({status:"Alteração feita com suscesso"}) // Satus 200 já é o status padrão
            }else{
                return res.status(401).send({status:"Aluno Não Encontrado"})
            }
            
            
        } catch (error) {
            next(error)
        }
    },

    async delete(req, res, next){
        try {
            const {nome_aluno} = req.params

            const codErro = await knex('aluno').where({nome_aluno}).del()
            
            if(codErro == 1){
                return res.send({status:"Aluno Deletado"}) // Satus 200 já é o status padrão
            }else{
                return res.status(401).send({status:"Aluno Não Encontrado"})
            }

        } catch (error) {
            next(error)
        }
    }
}