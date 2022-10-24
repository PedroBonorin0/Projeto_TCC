import { PrismaClient } from '@prisma/client';
import express, {Request, Response } from 'express';

const prisma = new PrismaClient();

const routes = express();

routes.post('/ranks', async (req: Request, res: Response) => {
  try {
    const rank = await prisma.rank.create({
      data: {
        nome: req.body.nome,
        fotoUrl: req.body.fotoUrl,
      }
    });

    return res.status(200).json(rank);
    
  } catch (err: any) {
    return res.status(400).send(err.message);
  }
});

routes.get('/ranks', async (req: Request, res: Response) => {
  try {
    const ranks = await prisma.rank.findMany();

    return res.status(200).json(ranks);
  } catch (err: any) {
    return res.status(400).send(err.message);
  }
});

routes.put('/ranks/:id', async (req: Request, res: Response) => {
  try {
    const rankEditado = await prisma.rank.update({
      where: { id: Number(req.params.id) },
      data: {
        nome: req.body.nome,
        fotoUrl: req.body.fotoUrl,
      },
    });

    res.send(rankEditado);
  } catch (err: any) {
    return res.status(400).send(err.message);
  }
});

routes.delete('/ranks/:id', async (req: Request, res: Response) => {
  try {
    const rankDeletado = await prisma.rank.delete( {
      where: { id: Number(req.params.id) },
    });

    res.send(rankDeletado);

  } catch (err: any) {
    return res.status(400).send(err.message);
  }
});

export default {
  routes
};