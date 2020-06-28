import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from 'src/app/models/course';
import { CourseService } from '../course.service';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  navbarcourse_list: Course[]=[];
  

  constructor(private router: Router, private courseService: CourseService) { }
  

  navigateToAbout(){
    this.router.navigateByUrl("/about");
  }
  navigateToYournotes(){
    this.router.navigateByUrl('/notes');
  }
  navigateToLogin(){
    this.router.navigateByUrl('/login');
  }

  ngOnInit(): void {
    this.navbarcourse_list=this.courseService.getCourseList();
    
  }

}
