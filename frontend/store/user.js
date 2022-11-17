import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => {
    return {
      user: {
        id: "cl9u5m7w10000v1jsvaiplo1x",
        mensagem: "Primeiro Aviso",
        data: "2018-02-21T15:00:00.000Z",
        professorUserId: "cl97j59k30004v1y44leqy0fb",
        Professor: {
          siape: "123321123321",
          userId: "cl97j59k30004v1y44leqy0fb",
          user: {
            id: "cl97j59k30004v1y44leqy0fb",
            nomeCompleto: "Pedro Luiz Bonorino Braga",
            nomeUsuario: "Pedro Professor",
            email: "pedro.bonorino@professor.ufjf.br",
            fotoUrl: null
          }
        }
      }
    }
  },
  actions: {
    
  },
  getters: {
    getUserInfo(state) {
      return state.user;
    }
  },
});