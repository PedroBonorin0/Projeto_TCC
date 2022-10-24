import { PrismaClient } from '@prisma/client';
import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import routes from './routes/index';

const userRoutes = routes.userRoutes;
const disciplinaRoutes = routes.disciplinaRoutes;
const rankRoutes = routes.rankRoutes;
const alunoDisciplinaRoutes = routes.alunoDisciplinaRoutes;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use(userRoutes);
app.use(disciplinaRoutes);
app.use(rankRoutes);
app.use(alunoDisciplinaRoutes);

const prisma = new PrismaClient();

app.get('/', (req: Request, res: Response) => {
  res.send('Hello');
});

app.get('/alunos', async(req: Request, res: Response) => {
  const alunos = await prisma.aluno.findMany();
  res.json(alunos);
});

app.get('/alunos/:aluno_id', (req: Request, res: Response) => {
  
});

app.listen(8000, () => {
  console.log('\nServer is Online at http://localhost:8000\n');
});