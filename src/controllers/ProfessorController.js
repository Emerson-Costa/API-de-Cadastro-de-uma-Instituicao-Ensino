const knex = require('../database')

module.exports = {
    async index (req,res,next) {
        const results = await knex('professor')
        return res.json(results)
    },

    async create(req, res, next) {   
        try {

            await knex('professor').insert(req.body)

            return res.status(201).send({status:"Professor Inserido No Sistema"})

        } catch (error) {
            next(error)
        }
    },

    async update(req, res, next){
        try {
            const {nome_professor} = req.params

            const codErro = await knex('professor').update(req.body).where({nome_professor})
            
            if(codErro == 1){
                return res.send({status:"Alteração feita com suscesso"}) // Satus 200 já é o status padrão
            }else{
                return res.status(401).send({status:"Professor Não Encontrado"})
            }
             
        } catch (error) {
            next(error)
        }
    },

    async delete(req, res, next){
        try {
            const {nome_professor} = req.params

            const codErro = await knex('professor').where({nome_professor}).del()
            
            if(codErro == 1){
                return res.send({status:"Professor Deletado"}) // Satus 200 já é o status padrão
            }else{
                return res.status(401).send({status:"Professor Não Encontrado"})
            }

        } catch (error) {
            next(error)
        }
    }
}