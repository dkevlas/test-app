import { IResult } from '../common/IResult';
import emailModel from '../model/email.model';

class Email {
  async sendEmail(email: string): Promise<IResult> {
    const foundEmail = await emailModel.findOne({ email });
    if (foundEmail) {
      return {
        success: false,
        code: 400,
        message: 'El email ya existe',
        path: 'email',
      };
    }
    const newEmail = new emailModel({ email });
    await newEmail.save();
    return {
      success: true,
      code: 201,
      message: 'Email enviado correctamente',
    };
  }
}

export default new Email();
