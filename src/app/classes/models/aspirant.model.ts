import {User} from '../interfaces/user.interface';

export class Aspirant implements User {
  public id?: number;
  public docId: string;
  public docType: string;
  public name: string;
  public lastName: string;
  public admin: boolean;
  public active: boolean;
  public grade?: string;
  public group?: string;
  public initialLastName?: string;
  public avatar?: string; // Faltan algunos valores por agrear como aspirant_type, entre otros
}
