import { PrismaClient } from '@prisma/client';
import express, {Request, Response } from 'express';

const prisma = new PrismaClient();

const routes = express();

routes.post('/disciplinas', async (req: Request, res: Response) => {
  try {
    const disciplina = await prisma.disciplina.create({
      data: {
        codigo: req.body.codigo,
        nome: req.body.nome,
        fotoUrl: req.body.fotoUrl,
        professorUserId: req.body.professorId
      }
    });

    return res.status(200).json(disciplina);
    
  } catch (err: any) {
    return res.status(400).send(err.message);
  }
});

routes.get('/disciplinas', async (req: Request, res: Response) => {
  try {
    const disciplinas = await prisma.disciplina.findMany({
      include: {
        Professor: {
          include: {
            user: true
          }
        },
      }
    });

    return res.status(200).json(disciplinas);
    
  } catch (err: any) {
    return res.status(400).send(err.message);
  }
});

routes.get('/disciplinas/:id', async (req: Request, res: Response) => {
  try {
    const disciplinas = await prisma.disciplina.findUniqueOrThrow({
      where: { id: req.params.id },
      include: {
        Professor: {
          include: {
            user: true,
          }
        },
        alunoDisciplinas: {
          include: {
            aluno: true
          }
        }
      }
    });

    return res.status(200).json(disciplinas);
    
  } catch (err: any) {
    return res.status(400).send(err.message);
  }
});

routes.put('/disciplinas/:id', async (req: Request, res: Response) => {
  try {
    const disciplinaEditada = await prisma.disciplina.update({
      where: { id: req.params.id },
      data: {
        nome: req.body.nome,
        codigo: req.body.codigo,
        fotoUrl: req.body.fotoUrl,
      },
    });

    res.send(disciplinaEditada);
  } catch (err: any) {
    return res.status(400).send(err.message);
  }
});

routes.delete('/disciplinas/:id', async (req: Request, res: Response) => {
  try {
    const disciplinaDeletada = await prisma.disciplina.delete( {
      where: { id: req.params.id },
    });

    res.send(disciplinaDeletada);

  } catch (err: any) {
    return res.status(400).send(err.message);
  }
});

export default {
  routes
};