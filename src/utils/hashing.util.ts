import * as bcrypt from 'bcrypt';

export class BcryptUtil {
  private static readonly saltRounds = 10;

  static async hashPassword(password: string): Promise<string> {
    const salt = await bcrypt.genSalt(BcryptUtil.saltRounds);
    const hashedPassword = await bcrypt.hash(password, salt);
    return hashedPassword;
  }

  static async verifyPassword(
    password: string,
    hashedPassword: string,
  ): Promise<boolean> {
    return await bcrypt.compare(password, hashedPassword);
  }
}
