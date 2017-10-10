import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class WeightService {
  authToken: any;
  user_id: any;

  constructor(private http: Http) {
    this.authToken = localStorage.getItem('token');
    this.user_id = JSON.parse(localStorage.getItem('user')).id;
  }

  getMax(exercise: string) {
    let query = {'user_id':this.user_id, 'exercise':exercise};
    let headers = new Headers();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.post('weights/getMax', query, {headers:headers}).map(res => res.json());
  }

  addMax(exercise: string, weight) {
    let newMax  = {
      'user_id':this.user_id,
      'exercise':exercise,
      'weight':weight
    };
    let headers = new Headers();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.post('weights/addMax', newMax, {headers:headers}).map(res => res.json());
  }

  getCurrent(exercise: string) {
    let query = {'user_id':this.user_id, 'exercise':exercise};
    let headers = new Headers();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.post('weights/getCurrent', query, {headers:headers}).map(res => res.json());
  }

  addCurrent(exercise: string, weight, reps) {
    let current = {
      'user_id':this.user_id,
      'exercise': exercise,
      'weight': weight,
      'reps': reps
    };
    let headers = new Headers();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.post('weights/addCurrent', current, {headers:headers}).map(res => res.json());
  }

}
