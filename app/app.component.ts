import { Component } from '@angular/core';

export class Student {
  id: number;
  name: string;
}

const STUDENTS: Student[] = [
  { id: 11, name: 'Seamus Finnegan' },
  { id: 12, name: 'Hermione Granger' },
  { id: 13, name: 'Ron Weasley' },
  { id: 14, name: 'Harry Potter' },
  { id: 15, name: 'Dean Thomas' },
  { id: 16, name: 'Draco Malfoy' },
  { id: 17, name: 'Cedric Diggory' },
  { id: 18, name: 'Ginny Weasley' },
  { id: 19, name: 'Fred Weasley' },
  { id: 20, name: 'George Weasley' }
];

@Component({
  moduleId: module.id,
  selector: 'directory',
  templateUrl: './templates/directory.html',
})

export class AppComponent {
  title = 'Hogwarts Student Directory';
  students = STUDENTS;
  selectedStudent: Student;
  onSelect(student: Student): void {
    this.selectedStudent = student;
  };
}
