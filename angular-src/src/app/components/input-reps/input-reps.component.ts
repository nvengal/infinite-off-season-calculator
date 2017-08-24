import { Component, OnInit } from '@angular/core';
import {WeightService} from '../../services/weight.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import {Router} from '@angular/router';

@Component({
  selector: 'app-input-reps',
  templateUrl: './input-reps.component.html',
  styleUrls: ['./input-reps.component.css']
})
export class InputRepsComponent implements OnInit {
  exercise: String;
  workingWeight: String;
  reps: String;

  constructor(
    private weightService: WeightService,
    private flashMessage: FlashMessagesService,
    private router: Router) {
    this.exercise = localStorage.getItem('exercise').toUpperCase();
    this.weightService.getCurrent().subscribe(data => {
      this.calculateWorkingWeight(parseInt(data.current.weight), parseInt(data.current.reps));
    });
    }

  ngOnInit() {
  }

  calculateWorkingWeight(previousWeight, previousReps) {
    if (previousReps >= 0 && previousReps <= 5) {
      this.workingWeight = (previousWeight * .975).toString();
    } else if (previousReps >= 8) {
      this.workingWeight = (previousWeight * 1.025).toString();
    } else {
      this.workingWeight = previousWeight.toString();
    }
  }

  addCurrent() {
    this.weightService.addCurrent(this.workingWeight, this.reps).subscribe(data => {
      if (data.success) {
        this.flashMessage.show(data.msg, {cssClass:'alert-success text-center', timeout:3000});
        this.router.navigate(['/']);
        return true;
      } else {
        this.flashMessage.show(data.msg, {cssClass:'alert-danger text-center', timeout:3000});
        return false;
      }
    });
  }

}
