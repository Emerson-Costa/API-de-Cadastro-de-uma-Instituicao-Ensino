const knex = require('../database')

module.exports = {
    async index (req,res,next) {
        const results = await knex('disciplina')
        return res.json(results)
    },

    async create(req, res, next) {   
        try {

            await knex('disciplina').insert(req.body)

            return res.status(201).send({status:"Disciplina Criada"})

        } catch (error) {
            next(error)
        }
    },

    async update(req, res, next){
        try {
            const {nome_disciplina} = req.params

            const codErro = await knex('disciplina').update(req.body).where({nome_disciplina})
            
            if(codErro == 1){
                return res.send({status:"Disciplina Atualizada"}) // Satus 200 já é o status padrão
            }else{
                return res.status(401).send({status:"Disciplina Não Encontrada"})
            }
             
        } catch (error) {
            next(error)
        }
    },

    async delete(req, res, next){
        try {
            const {nome_disciplina} = req.params

            const codErro = await knex('disciplina').where({nome_disciplina}).del()
            
            if(codErro == 1){
                return res.send({status:"Disciplina Deletada"}) // Satus 200 já é o status padrão
            }else{
                return res.status(401).send({status:"Disciplina Não Encontrada"})
            }

        } catch (error) {
            next(error)
        }
    }
}