import { Component, OnInit } from '@angular/core';
import {WeightService} from '../../services/weight.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-input-max',
  templateUrl: './input-max.component.html',
  styleUrls: ['./input-max.component.css'],
})
export class InputMaxComponent implements OnInit {
  exercise: string;
  currentMax: string;
  newMax: string;

  constructor(
    private weightService: WeightService,
    private flashMessage: FlashMessagesService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {
    this.load();
  }

  ngOnInit() { }

  load() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.exercise = params['exercise'];
    });
    this.weightService.getMax(this.exercise).subscribe(data => {
      if (data.success) {
        this.currentMax = data.max;
      } else {
        this.currentMax = '0';
      }
    });
  }

  addMax() {
    if (!this.newMax) {
      this.flashMessage.show("Please enter a valid number for max",
        {cssClass: 'alert-danger text-center', timeout:3000});
    } else {
      this.weightService.addMax(this.exercise, this.newMax).subscribe(data => {
        if (data.success) {
          this.weightService.addCurrent(this.exercise, (parseInt(this.newMax) * .7).toString(), '-1').subscribe(datum => {
          //this.flashMessage.show(datum.msg, {cssClass:'alert-success text-center', timeout:3000});
          });
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
