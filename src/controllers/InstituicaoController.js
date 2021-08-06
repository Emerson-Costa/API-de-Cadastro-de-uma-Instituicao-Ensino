const knex = require('../database')

module.exports = {
    async index (req,res,next) {

        const results = await knex('instituicao')

        return res.json(results)
    },

    async create(req, res, next) {   

        try {

            await knex('instituicao').insert(req.body)

            return res.status(201).send({status:"Instituição Criada"})

        } catch (error) {

            next(error)
        }
    },

    async update(req, res, next){
        try {
            const {nome_instituicao} = req.params

            const codErro = await knex('instituicao').update(req.body).where({nome_instituicao})
            
            if(codErro == 1){
                return res.send({status:"Alteração Feita Com Suscesso"}) // Satus 200 já é o status padrão
            }else{
                return res.status(401).send({status:"Instituição Não Encontrada"})
            }
            
            
        } catch (error) {
            next(error)
        }
    },

    async delete(req, res, next){
        try {
            const {nome_instituicao} = req.params

            const codErro = await knex('instituicao').where({nome_instituicao}).del()
            
            if(codErro == 1){
                return res.send({status:"Instituição Deletada"}) // Satus 200 já é o status padrão
            }else{
                return res.status(401).send({status:"Instituição Não Encontrada"})
            }

        } catch (error) {
            next(error)
        }
    }
}