import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {WeightService} from '../../services/weight.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private router: Router,
    private weightService: WeightService) {
  }

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
    var max;
    var currentWeight;
    var currentReps;
    this.weightService.getMax().subscribe(data => {
      if (data.success) max = data.max;
      else max = 0;
      this.weightService.getCurrent().subscribe(datum => {
        console.log(datum.current);
        if (data.success) {
          currentWeight = datum.current.weight;
          currentReps = datum.current.reps;
        } else {
          currentWeight = 0;
          currentReps = 0;
        }
        
        if (max == 0 || (currentWeight >= max * .8 && currentReps >= 8)) { 
          this.router.navigate(['/max']);
        } else {
          this.router.navigate(['/work']);
        }
      });
    });
  }

}
