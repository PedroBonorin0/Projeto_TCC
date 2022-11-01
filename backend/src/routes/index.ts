import userRouter from './User';
import disciplinaRouter from './Disciplina';
import rankRouter from './Rank';
import alunoDisciplinaRouter from './AlunoDisciplina';
import postRouter from './Posts';
import avisoRouter from './Aviso';

const userRoutes = userRouter.routes;
const disciplinaRoutes = disciplinaRouter.routes;
const rankRoutes = rankRouter.routes; 
const alunoDisciplinaRoutes = alunoDisciplinaRouter.routes;
const postRoutes = postRouter.routes;
const avisoRoutes = avisoRouter.routes;

export default {
  userRoutes,
  disciplinaRoutes,
  rankRoutes,
  alunoDisciplinaRoutes,
  postRoutes,
  avisoRoutes
}