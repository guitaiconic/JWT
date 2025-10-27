export interface createUsersDto {
  username: string;
  email: string;
  password: string;
}

export interface loginDto {
  username: string;
  password: string;
}

export interface updateDto {
  username?: string;
  email?: string;
  password?: Number;
  phoneNumber?: Number;
  address?: string;
  age?: string;
  gender?: string;
}
