import { Component, OnInit } from '@angular/core';
import {WeightService} from '../../services/weight.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-input-reps',
  templateUrl: './input-reps.component.html',
  styleUrls: ['./input-reps.component.css'],
})
export class InputRepsComponent implements OnInit {
  exercise: string;
  workingWeight: string;
  reps: string;

  constructor(
    private weightService: WeightService,
    private flashMessage: FlashMessagesService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.exercise = params['exercise'];
    });
    this.weightService.getCurrent(this.exercise).subscribe(data => {
      this.workingWeight = data.current.weight;
      this.weightService.getMax(this.exercise).subscribe(datum => {
        this.calculateWorkingWeight(parseFloat(datum.max) * .025, parseInt(data.current.reps));
      });
    });
  }

  ngOnInit() {
  }

  calculateWorkingWeight(weightChangeAmount, previousReps) {
    if (previousReps != -1 && previousReps <= 5) {
      this.workingWeight = (parseFloat(this.workingWeight) - weightChangeAmount).toString();
    } else if (previousReps >= 8) {
      this.workingWeight = (parseFloat(this.workingWeight) + weightChangeAmount).toString();
    } else {
      //workingWeight is correct
    }
  }

  addCurrent() {
    if (!this.reps) {
      this.flashMessage.show("Please enter a valid number for reps",
        {cssClass: 'alert-danger text-center', timeout:3000});
    } else {
      this.weightService.addCurrent(this.exercise, this.workingWeight, this.reps).subscribe(data => {
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

}
