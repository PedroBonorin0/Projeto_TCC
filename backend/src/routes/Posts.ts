import { PrismaClient } from '@prisma/client';
import express, { Request, Response } from 'express';

const prisma = new PrismaClient();

const routes = express();

routes.post('/posts', async (req: Request, res: Response) => {
  if(!req.body.tipo)
    return res.status(400).send('Campos obrigatórios não informados');
  
  var post;

  try {
    post = await prisma.post.create({
      data: {
        mensagem: req.body.mensagem,
        arquivoUrl: req.body.arquivoUrl,
        tipo: req.body.tipo,
        disciplinaId: req.body.disciplinaId,
        userId: req.body.userId,
      }
    });

    if(req.body.tipo === 'Atividade')
      await createAtividade(post, req.body);
    
    return res.status(200).json(post);

  } catch (err: any) {
    return res.status(400).send(err.message);
  }
});

routes.get('/posts', async (req: Request, res: Response) => {
  try {
    const posts = await prisma.post.findMany({
      include: {
        comentarios: {
          include: {
            user: true
          }
        },
        User: true
      }
    });

    return res.status(200).json(posts);
    
  } catch (err: any) {
    return res.status(400).send(err.message);
  }
});

routes.get('/posts/:id', async (req: Request, res: Response) => {
  try {
    const posts = await prisma.post.findUniqueOrThrow({
      where: { id: req.params.id },
      include: {
        comentarios: {
          include: {
            user: true
          }
        },
        User: true
      }
    });

    return res.status(200).json(posts);
    
  } catch (err: any) {
    return res.status(400).send(err.message);
  }
});

routes.put('/posts/:id', async (req: Request, res: Response) => {
  try {
    const postEditado = await prisma.post.update({
      where: { id: req.params.id },
      data: {
        mensagem: req.body.mensagem,
        arquivoUrl: req.body.arquivoUrl,
      },
    });

    return res.status(200).send(postEditado);
  } catch (err: any) {
    return res.status(400).send(err.message);
  }
});

routes.delete('/posts/:id', async (req: Request, res: Response) => {
  try {
    const postDeletado = await prisma.post.delete( {
      where: { id: req.params.id },
    });

    return res.status(200).send(postDeletado);

  } catch (err: any) {
    return res.status(400).send(err.message);
  }
});

async function createAtividade(post: any, body: any) {
  await prisma.atividade.create({
    data: {
      prazo: body.prazo,
      postId: post.id
    }
  });
}

export default {
  routes
};