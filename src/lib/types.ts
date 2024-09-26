export interface CreateUserDto {
  username: string;
  password: string;
  firstname?: string | null;
  lastname?: string | null;
}
