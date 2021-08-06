const knex = require('../database')

module.exports = {
    async index (req,res,next) {
        const results = await knex('curso')
        return res.json(results)
    },

    async create(req, res, next) {   
        try {

            await knex('curso').insert(req.body)

            return res.status(201).send({status:"Curso Criado"})

        } catch (error) {
            next(error)
        }
    },

    async update(req, res, next){
        try {
            const {nome_curso} = req.params

            const codErro = await knex('curso').update(req.body).where({nome_curso})
            
            if(codErro == 1){
                return res.send({status:"Alteração feita com suscesso"}) // Satus 200 já é o status padrão
            }else{
                return res.status(401).send({status:"Curso Não Encontrado"})
            }
             
        } catch (error) {
            next(error)
        }
    },

    async delete(req, res, next){
        try {
            const {nome_curso} = req.params

            const codErro = await knex('curso').where({nome_curso}).del()
            
            if(codErro == 1){
                return res.send({status:"Curso Deletado"}) // Satus 200 já é o status padrão
            }else{
                return res.status(401).send({status:"Curso Não Encontrado"})
            }

        } catch (error) {
            next(error)
        }
    }
}