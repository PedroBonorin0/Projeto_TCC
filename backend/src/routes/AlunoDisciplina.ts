import { PrismaClient } from '@prisma/client';
import express, {Request, Response } from 'express';

const prisma = new PrismaClient();

const routes = express();

routes.post('/alunoDisciplina', async (req: Request, res: Response) => {
  try {
    const alunoDisciplina = await prisma.alunoDisciplina.create({
      data: {
        alunoUserId: req.body.alunoId,
        disciplinaId: req.body.disciplinaId,
        rankId: req.body.rankId,
      }
    });

    return res.status(200).json(alunoDisciplina);
    
  } catch (err: any) {
    return res.status(400).send(err.message);
  }
});

routes.get('/alunoDisciplina', async (req: Request, res: Response) => {
  try {
    const alunoDisciplinas = await prisma.alunoDisciplina.findMany({
      include: {
        aluno: {
          include: {
            user: true,
          }
        },
        Disciplina: {
          include: {
            Professor: {
              include: {
                user: true,
              }
            }
          }
        },
        rank: true,
      }
    });

    return res.status(200).json(alunoDisciplinas);
  } catch (err: any) {
    return res.status(400).send(err.message);
  }
});

export default {
  routes
};