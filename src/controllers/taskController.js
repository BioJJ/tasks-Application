const knex = require('../database')

module.exports = {

    async index(req, res) { 
        const results = await knex('tasks')

        return res.json(results)
    },
    async create(req, res, next) {
        try {
            const { descricao, status, titulo} = req.body

            await knex('tasks').insert({
                descricao, 
                status, 
                titulo
            })

            return res.status(201).send()
        } catch (error) {
            next(error)
        }
    },
    async update(req, res, next) {
        try {
            const { descricao, status, titulo  } = req.body
            const { id } = req.params
            
            
            await knex('tasks')
            .update({ descricao, status, titulo })
            .where({ id })

            return res.send()

        } catch (error) {
            next(error)
        }
    },
    async delete(req, res, next) {
        try {
            const { id } = req.params

            await knex('tasks')
            .where({ id })
            .del()
            

            return res.send()
        } catch (error) {
            next(error)
        }
    }
}