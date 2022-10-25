import { defineStore } from 'pinia';

export const useDisciplinaStore = defineStore('disciplinas', {
  state: () => {
    return {
      disciplinas: [
        {
          codigo: 'DCC060',
          nome: 'Banco de Dados',
          nomeProfessor: 'Jairo',
          emailProfessor: 'jairo@ufjf.br',
        },
        {
          codigo: 'DCC061',
          nome: 'Engenharia de Software',
          nomeProfessor: 'Alessandreia',
          emailProfessor: 'alessandreia@ufjf.br',
        },
        {
          codigo: 'DCC062',
          nome: 'Inteligência Artificial',
          nomeProfessor: 'Saulo',
          emailProfessor: 'saulo@ufjf.br',
        },
        {
          codigo: 'DCC062',
          nome: 'Inteligência Artificial',
          nomeProfessor: 'Saulo',
          emailProfessor: 'saulo@ufjf.br',
        },
        {
          codigo: 'DCC062',
          nome: 'Inteligência Artificial',
          nomeProfessor: 'Saulo',
          emailProfessor: 'saulo@ufjf.br',
        },
      ]
    }
  },
  actions: {
    
  },
  getters: {
    allDisciplinas(state) {
      return state.disciplinas;
    }
  },
});