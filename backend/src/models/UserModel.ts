import { Role } from './Role.enum';

class User {
  constructor(
    private id: string,
    private email: string,
    private password: string,
    private createdAt?: Date,
    private name?: string,
    private updatedAt?: Date,
    private role?: Role
  ) {
    this.id = id;
    this.email = email;
    this.name = name ?? '';
    this.password = password;
    this.role = role ?? Role.USER;
    this.createdAt = createdAt ?? new Date();
    this.updatedAt = updatedAt ?? new Date();
  }

  public getId(): string {
    return this.id;
  }

  public getUser() {
    return {
      id: this.id,
      email: this.email,
      name: this.name,
      role: this.role,
    };
  }

  public getRole() {
    return this.role;
  }

  public updateRole(role: Role) {
    this.role = role;
  }

  public updateName(name: string) {
    this.name = name;
  }

  public updateEmail(email: string) {
    this.email = email;
  }

  public updatePassword(password: string) {
    this.password = password;
  }
}

export default User;
