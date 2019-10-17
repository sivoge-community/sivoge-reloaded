import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AspirantJuryService {

  private students = [
    {
      // tslint:disable-next-line:max-line-length
      name: 'Miguel Caballero', // The name needs to be split into only two data, e.g: Miguel Caballero, instead of Miguel Antonio Caballero Gil. Norsup green: #0aa30b
      gradeCourse: '1B',
      imageName: 'avatar.png'
    },
    {
      name: 'Fulanito Giorgianni',
      gradeCourse: '11C',
      imageName: 'norsup-5.jpg'
    },
    {
      // tslint:disable-next-line:max-line-length
      name: 'Miguel Caballero Gil', // The name needs to be split into only two data, e.g: Miguel Caballero, instead of Miguel Antonio Caballero Gil. Norsup green: #0aa30b
      gradeCourse: '1B',
      imageName: 'norsup-4.jpg'
    },
    {
      name: 'Fulanito Giorgianni',
      gradeCourse: '11C',
      imageName: 'norsup-5.jpg'
    },
    {
      name: 'Miguel Caballero',
      gradeCourse: '1B',
      imageName: 'norsup-4.jpg'
    },
    {
      name: 'Fulanito Giorgianni',
      gradeCourse: '11C',
      imageName: 'norsup-5.jpg'
    },
    {
      // tslint:disable-next-line:max-line-length
      name: 'Miguel Caballero Gil', // The name needs to be split into only two data, e.g: Miguel Caballero, instead of Miguel Antonio Caballero Gil. Norsup green: #0aa30b
      gradeCourse: '1B',
      imageName: 'norsup-4.jpg'
    },
    {
      name: 'Fulanito Giorgianni',
      gradeCourse: '11C',
      imageName: 'norsup-5.jpg'
    },
    {
      name: 'Miguel Caballero',
      gradeCourse: '1B',
      imageName: 'norsup-4.jpg'
    },
    {
      name: 'Fulanito Giorgianni',
      gradeCourse: '11C',
      imageName: 'norsup-5.jpg'
    },
    {
      // tslint:disable-next-line:max-line-length
      name: 'Miguel Caballero', // The name needs to be split into only two data, e.g: Miguel Caballero, instead of Miguel Antonio Caballero Gil. Norsup green: #0aa30b
      gradeCourse: '1B',
      imageName: 'avatar.png'
    },
    {
      name: 'Fulanito Giorgianni',
      gradeCourse: '11C',
      imageName: 'norsup-5.jpg'
    },
    {
      // tslint:disable-next-line:max-line-length
      name: 'Miguel Caballero Gil', // The name needs to be split into only two data, e.g: Miguel Caballero, instead of Miguel Antonio Caballero Gil. Norsup green: #0aa30b
      gradeCourse: '1B',
      imageName: 'norsup-4.jpg'
    },
    {
      name: 'Fulanito Giorgianni',
      gradeCourse: '11C',
      imageName: 'norsup-5.jpg'
    },
    {
      name: 'Miguel Caballero',
      gradeCourse: '1B',
      imageName: 'norsup-4.jpg'
    },
    {
      name: 'Fulanito Giorgianni',
      gradeCourse: '11C',
      imageName: 'norsup-5.jpg'
    },
    {
      // tslint:disable-next-line:max-line-length
      name: 'Miguel Caballero Gil', // The name needs to be split into only two data, e.g: Miguel Caballero, instead of Miguel Antonio Caballero Gil. Norsup green: #0aa30b
      gradeCourse: '1B',
      imageName: 'norsup-4.jpg'
    },
    {
      name: 'Fulanito Giorgianni',
      gradeCourse: '11C',
      imageName: 'norsup-5.jpg'
    },
    {
      name: 'Miguel Caballero',
      gradeCourse: '1B',
      imageName: 'norsup-4.jpg'
    },
    {
      name: 'Fulanito Giorgianni',
      gradeCourse: '11C',
      imageName: 'norsup-5.jpg'
    }
  ]; // Esto va a cambiar y va a ser de tipo Array<User>
  private teachers: [];

  constructor() { }

  getStudents() {
    return this.students;
  }

  getTeachers() {
    return this.teachers;
  }
}
