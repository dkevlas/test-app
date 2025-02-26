import { Response } from 'express';
import { IResult } from '../common/IResult';
import { ILoginBody, IRegisterBody } from '../common/bodyAuth';
import { GenerateToken, IPayload } from '../libs/GenerateToken';
import authModel from '../model/auth.model';
import bcrypt from 'bcrypt';
import { config } from '../config/config';

class Users {
  async register(body: IRegisterBody): Promise<IResult> {
    const { email, password, ...data } = body;
    const emailFound = await authModel.findOne({ email });
    if (emailFound) {
      return {
        success: false,
        code: 400,
        message: 'El email ya existe',
        path: 'email',
      };
    }

    const passwordHash = await bcrypt.hash(password, 10);

    const newUser = new authModel({
      email,
      password: passwordHash,
      ...data,
    });
    await newUser.save();

    return {
      success: true,
      code: 201,
      message: 'Usuario creado correctamente',
    };
  }

  async login(body: ILoginBody, res: Response): Promise<IResult> {
    const { email, password } = body;
    const userFound = await authModel.findOne({ email });
    if (!userFound) {
      return {
        success: false,
        code: 400,
        message: 'El email no existe',
        path: 'email',
      };
    }
    const passwordMatch = await bcrypt.compare(password, userFound.password);
    if (!passwordMatch) {
      return {
        success: false,
        code: 400,
        message: 'La contraseña es incorrecta',
        path: 'password',
      };
    }

    const payload: IPayload = {
      id: userFound._id.toString(),
      email: userFound.email,
      role: userFound.role,
    };
    const token = GenerateToken(payload);
    if (!token) {
      return {
        success: false,
        code: 500,
        message: 'Error al generar el token',
        path: 'token',
      };
    }
    res.cookie(config.COOKIE_NAME, token, {
      httpOnly: true,
      secure: true,
      sameSite: 'none',
    });

    return {
      success: true,
      code: 201,
      message: 'Usuario logueado correctamente',
      data: {
        email: userFound.email,
        name: userFound.name,
        role: userFound.role,
      },
    };
  }

  async logout(res: Response): Promise<IResult> {
    res.clearCookie(config.COOKIE_NAME);
    return {
      success: true,
      code: 200,
      message: 'Usuario deslogueado correctamente',
    };
  }
}

export default new Users();
