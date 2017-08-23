import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

constructor(private router: Router) { }

  ngOnInit() {
  }

  deadlift() {
    localStorage.setItem('exercise', 'deadlift');
    this.navigate();
  }
  
  bench() {
    localStorage.setItem('exercise', 'bench');
    this.navigate();  
  }

  squat() {
    localStorage.setItem('exercise', 'squat');
    this.navigate(); 
  }
  
  navigate() {
    this.router.navigate(['/max']);
  }

}
