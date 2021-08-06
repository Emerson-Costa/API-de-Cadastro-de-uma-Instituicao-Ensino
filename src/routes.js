const express = require('express')
const routes = express.Router()

const InstituicaoController = require('./controllers/InstituicaoController')
const CursoController       = require('./controllers/CursoController')
const AlunoController       = require('./controllers/AlunoController')
const ProfessorController   = require('./controllers/ProfessorController')
const DisciplinaController  = require('./controllers/DisciplinaController')

routes

// Instituicao

      .get('/instituicao',InstituicaoController.index)
      .post('/instituicao',InstituicaoController.create)
      .put('/instituicao/:nome_instituicao',InstituicaoController.update)
      .delete('/instituicao/:nome_instituicao',InstituicaoController.delete)

// Curso

      .get('/curso',CursoController.index)
      .post('/curso',CursoController.create)
      .put('/curso/:nome_curso',CursoController.update)
      .delete('/curso/:nome_curso',CursoController.delete)


// Aluno

      .get('/aluno',AlunoController.index)
      .post('/aluno',AlunoController.create)
      .put('/aluno/:nome_aluno',AlunoController.update)
      .delete('/aluno/:nome_aluno',AlunoController.delete)

// Professor

      .get('/professor',ProfessorController.index)
      .post('/professor',ProfessorController.create)
      .put('/professor/:nome_professor',ProfessorController.update)
      .delete('/professor/:nome_professor',ProfessorController.delete)

// Disciplina

      .get('/disciplina',DisciplinaController.index)
      .post('/disciplina',DisciplinaController.create)
      .put('/disciplina/:nome_disciplina',DisciplinaController.update)
      .delete('/disciplina/:nome_disciplina',DisciplinaController.delete)


module.exports = routes