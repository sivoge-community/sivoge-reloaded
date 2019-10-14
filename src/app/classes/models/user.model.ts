export class User {
  constructor(public docId: string,
              public docType: string,
              public name: string,
              public lastName: string,
              public admin: boolean,
              public active: boolean,
              public id?: number,
              public cellphone?: string,
              public dayTime?: string,
              public grade?: string,
              public group?: string) {}
}
