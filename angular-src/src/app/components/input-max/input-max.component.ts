import { Component, OnInit } from '@angular/core';
import {WeightService} from '../../services/weight.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import {Router} from '@angular/router';


@Component({
  selector: 'app-input-max',
  templateUrl: './input-max.component.html',
  styleUrls: ['./input-max.component.css'],
})
export class InputMaxComponent implements OnInit {
  exercise: String;
  currentMax: String;
  newMax: String;
  
  constructor(
    private weightService: WeightService,
    private flashMessage: FlashMessagesService,
    private router: Router) {
    this.load();  
  }

  ngOnInit() { }

  load() {
    this.weightService.getMax().subscribe(data => {
      if (data.success) {
        this.currentMax = data.max;
      } else {
        this.currentMax = '0';
      }
    });
    this.exercise = localStorage.getItem('exercise').toUpperCase();
  }

  addMax() {
    this.weightService.addMax(this.newMax).subscribe(data => {
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
