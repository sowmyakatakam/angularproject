import { Component, OnInit } from '@angular/core';
import { Course } from '../models/course';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  notes_list: Course[]=[];

  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
    this.notes_list=this.courseService.getCourseList();
  }

}
