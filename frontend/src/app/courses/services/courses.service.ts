import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { v4 as uuid } from 'uuid';

import { Course } from '../model/course';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  private readonly BASE_URL = '/assets/database.json';
  constructor(private _http: HttpClient) {}

  getAllCourses() {
    return this._http.get<Course[]>(this.BASE_URL);
  }
}
