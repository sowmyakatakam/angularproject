import { Injectable } from '@angular/core';
import { Course } from './models/course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  getCourseList(){
    return this.course_list;
  }
  course_list: Course[] =[
    {
      name: 'Carnatic',
      days: 365,
      price: 10000
    },
    {
      name: 'Hindustani',
      days: 365,
      price: 10000
    },
    {
      name: 'Indian Music Basics',
      days: 100,
      price: 7000
    }
   


  ]

  constructor() { }
 
}
