import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Student } from './student';

@Component({
  moduleId: module.id,
  selector: 'student-detail',
  templateUrl: './templates/student-detail.html'
})

export class StudentDetailComponent{
  @Input() student: Student;
}
