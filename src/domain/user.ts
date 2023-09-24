type AppOrigen = 'DRIVER-APP' | 'BACKAUL-WEB';

export interface UserInput {
  id?: number;
  name: string;
  login: string;
  password: string;
  appOrigin: AppOrigen;
  email?: string;
  celphone?: string;
  isFirstAccess?: true;
  isActive?: true;
}

export class User {
  constructor(private readonly user: UserInput) {
    this.validate();
  }

  private validate() {
    if (this.user.appOrigin === 'DRIVER-APP' && !this.user.celphone) {
      throw new Error(
        'The celphone is riquerid to register an user on the mobile application',
      );
    }

    if (this.user.appOrigin === 'BACKAUL-WEB' && !this.user.email) {
      throw new Error(
        'The email is riquerid to register a user on the web application',
      );
    }
  }

  public get() {
    return this.user;
  }
}
