import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { Student } from './student';
import { StudentService } from './services/student.service';

@Component({
  moduleId: module.id,
  selector: 'directory',
  templateUrl: './templates/directory.html',
  providers: [StudentService]
})

export class AppComponent implements OnInit {
  ngOnInit(): void {
    this.getStudents();
  }
  title = 'Hogwarts Student Directory';
  students: Student[];
  constructor(private studentService: StudentService) {
  };
  getStudents(): void {
    this.students = this.studentService.getStudents();
  };
  selectedStudent: Student;
  onSelect(student: Student): void {
    this.selectedStudent = student;
  };
}
