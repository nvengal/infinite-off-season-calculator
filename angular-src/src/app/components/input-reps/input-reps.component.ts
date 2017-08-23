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
  currentWeight: String;
  reps: String;

  constructor(
    private weightService: WeightService,
    private flashMessage: FlashMessagesService,
    private router: Router) { }

  ngOnInit() {
  }

  addCurrent() {
  }

}
