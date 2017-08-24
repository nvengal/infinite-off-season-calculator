import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class WeightService {
  authToken: any;
  user_id: any;
  exercise: any;

  constructor(private http: Http) {
    this.authToken = localStorage.getItem('token');
    this.user_id = JSON.parse(localStorage.getItem('user')).id;
  }

  getMax() {
    this.exercise = localStorage.getItem('exercise');
    let query = {'user_id':this.user_id, 'exercise':this.exercise};
    let headers = new Headers();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/weights/getMax', query, {headers:headers}).map(res => res.json());  
  }
  
  addMax(weight) {
    this.exercise = localStorage.getItem('exercise');
    let newMax  = {
      'user_id':this.user_id,
      'exercise':this.exercise,
      'weight':weight
    };
    let headers = new Headers();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/weights/addMax', newMax, {headers:headers}).map(res => res.json());  
  }

  getCurrent() {
    this.exercise = localStorage.getItem('exercise');
    let query = {'user_id':this.user_id, 'exercise':this.exercise};
    let headers = new Headers();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/weights/getCurrent', query, {headers:headers}).map(res => res.json());
  }

  addCurrent(weight, reps) {
    this.exercise = localStorage.getItem('exercise');
    let current = {
      'user_id':this.user_id,
      'exercise': this.exercise,
      'weight': weight,
      'reps': reps
    };
    let headers = new Headers();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/weights/addCurrent', current, {headers:headers}).map(res => res.json());
  }

}
