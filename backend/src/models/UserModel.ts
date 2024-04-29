import { Role } from './Role.enum';

interface UserProps {
  id: string;
  email: string;
  password: string;
  createdAt?: Date;
  name?: string;
  updatedAt?: Date;
  role?: Role;
}

class User {
  private id: string;
  private email: string;
  private password: string;
  private readonly createdAt: Date;
  private name: string;
  private updatedAt: Date;
  private role: Role;

  constructor({ id, email, password, createdAt, name, updatedAt, role }: UserProps) {
    this.id = id;
    this.email = email;
    this.password = password;
    this.createdAt = createdAt || new Date();
    this.name = name || '';
    this.updatedAt = updatedAt || new Date();
    this.role = role || Role.USER;
  }

  public get getId(): string {
    return this.id;
  }

  public get getUser() {
    return {
      id: this.id,
      email: this.email,
      name: this.name,
      role: this.role,
    };
  }

  public get getRole() {
    return this.role;
  }

  public set updateRole(role: Role) {
    this.role = role;
  }

  public set updateName(name: string) {
    this.name = name;
  }

  public set updateEmail(email: string) {
    this.email = email;
  }

  public set updatePassword(password: string) {
    this.password = password;
  }
}

export default User;
