import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  navigateToYournotes(){
    this.router.navigateByUrl('/notes');
  }

  login(username: string, password: string ) {
    if (username=="sowmya" && password=="admin") {
      this.router.navigateByUrl('/notes');
    }
    else{
      alert('Invalied Username or Password. Please Try Onceagain.');
    }
  }


}
