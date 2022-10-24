import { PrismaClient } from '@prisma/client';
import express, {Request, Response } from 'express';


const prisma = new PrismaClient();

const routes = express();

routes.post('/user', async (req: Request, res: Response) => {
  if(!req.body.tipoUsuario || !(req.body.matricula || req.body.siape))
    return res.status(400).send('Campos obrigatórios não informados');

  var user;

  try {
    user = await prisma.user.create({
      data: {
        nomeCompleto: req.body.nomeCompleto,
        nomeUsuario: req.body.nomeUsuario,
        email: req.body.email,
        fotoUrl: req.body.fotoUrl,
      }
    });

    await createUserComTipo(user, req.body);

    return res.json(user).status(201);
  } catch (err: any) {
    if(user !== undefined) {
      await prisma.user.delete({
        where: { id: user.id }
      });
    }

    return res.send(err.message).status(405);
  }
});

routes.get('/user', async (req: Request, res: Response) => {
  try {
    const users = await prisma.user.findMany({
      include: {
        aluno: true,
        professor: true
      }
    });

    return res.status(200).json(users);
  } catch (err: any) {
    return res.status(400).send(err.message);
  }
});

routes.get('/alunos/:matricula', async (req: Request, res: Response) => {
  try {
    const user = await prisma.aluno.findUniqueOrThrow({
      where: { matricula: req.params.matricula },
      include: {
        user: true,
      }
    });

    return res.status(200).json(user);
  } catch (err: any) {
    return res.status(400).send(err.message);
  }
});

routes.get('/professores/:siape', async (req: Request, res: Response) => {
  try {
    const user = await prisma.professor.findUniqueOrThrow({
      where: { siape: req.params.siape },
      include: {
        user: true,
      }
    });

    return res.status(200).json(user);
  } catch (err: any) {
    return res.status(400).send(err.message);
  }
});

routes.put('/user/:id', async (req: Request, res: Response) => {
  try {
    const userEditado = await prisma.user.update({
      where: { id: req.params.id },
      data: {
        nomeUsuario: req.body.nomeUsuario,
        email: req.body.email,
        fotoUrl: req.body.fotoUrl,
      },
      include: {
        aluno: true
      } 
    });

    
    if(userEditado) {
      await atualizaUserComTipo(userEditado, req);
    }
    res.send(userEditado);

  } catch (err: any) {
    return res.status(400).send(err.message);
  }
});

routes.delete('/user/:id', async (req: Request, res: Response) => {
  try {
    const user = await prisma.user.findUniqueOrThrow({
      where: { id: req.params.id },
      include: {
        aluno: true,
        professor: true,
      }
    });

    const deletadoComTipo = await deleteUserComTipo(user);

    var deletado;
    if(deletadoComTipo) {
      deletado = await prisma.user.delete({
        where: { id: user.id }
      });
    }

    res.send(deletado);

  } catch (err: any) {
    return res.status(400).send(err.message);
  }
});

async function createUserComTipo(user: any, req: any) {
  if(req.tipoUsuario === 'Aluno') {
    await prisma.aluno.create({
      data: {
        matricula: req.matricula,
        exibeNome: true,
        userId: user.id
      }
    });
  } else {
    await prisma.professor.create({
      data: {
        siape: req.siape,
        userId: user.id
      }
    });
  }
}

async function atualizaUserComTipo(userEditado :any, req: any) {
  await prisma.aluno.update({
    where: { userId: userEditado.id },
    data: {
      exibeNome: req.body.exibeNome
    }
  });
}

async function deleteUserComTipo(user: any) {
  if(!user.professor) {
    return prisma.aluno.delete({
      where: { userId: user.id }
    });
  } else {
    return prisma.professor.delete({
      where: { userId: user.id }
    });
  }
}

export default {
  routes
};