import { PrismaClient } from '@prisma/client';
import express, { Request, Response } from 'express';

const prisma = new PrismaClient();

const routes = express();

routes.post('/avisos', async (req: Request, res: Response) => {
  try {
    const aviso = await prisma.aviso.create({
      data: {
        mensagem: req.body.mensagem,
        data: req.body.dataExpiracao,
        professorUserId: req.body.user
      }
    });
    
    return res.status(200).json(aviso);

  } catch (err: any) {
    return res.status(400).send(err.message);
  }
});

routes.get('/avisos', async (req: Request, res: Response) => {
  try {
    const avisos = await prisma.aviso.findMany({
      include: {
        Professor: {
          include: {
            user: true
          }
        }
      }
    });

    return res.status(200).json(avisos);
    
  } catch (err: any) {
    return res.status(400).send(err.message);
  }
});

routes.get('/avisos/:id', async (req: Request, res: Response) => {
  try {
    const aviso = await prisma.aviso.findUniqueOrThrow({
      where: { id: req.params.id },
      include: {
        Professor: {
          include: {
            user: true
          }
        }
      }
    });

    return res.status(200).json(aviso);
    
  } catch (err: any) {
    return res.status(400).send(err.message);
  }
});

routes.put('/avisos/:id', async (req: Request, res: Response) => {
  try {
    const avisoEditado = await prisma.aviso.update({
      where: { id: req.params.id },
      data: {
        mensagem: req.body.mensagem,
        data: req.body.dataExpiracao,
      },
    });

    return res.status(200).send(avisoEditado);
  } catch (err: any) {
    return res.status(400).send(err.message);
  }
});

routes.delete('/avisos/:id', async (req: Request, res: Response) => {
  try {
    const avisoDeletado = await prisma.aviso.delete( {
      where: { id: req.params.id },
    });

    return res.status(200).send(avisoDeletado);

  } catch (err: any) {
    return res.status(400).send(err.message);
  }
});

export default {
  routes
};