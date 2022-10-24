import userRouter from './User';
import disciplinaRouter from './Disciplina';
import rankRouter from './Rank';
import alunoDisciplinaRouter from './AlunoDisciplina';

const userRoutes = userRouter.routes;
const disciplinaRoutes = disciplinaRouter.routes;
const rankRoutes = rankRouter.routes; 
const alunoDisciplinaRoutes = alunoDisciplinaRouter.routes; 

export default {
  userRoutes,
  disciplinaRoutes,
  rankRoutes,
  alunoDisciplinaRoutes
}