import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, first, tap } from 'rxjs';

import { Course } from '../model/course';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  private readonly BASE_URL = '/assets/database.json';
  constructor(private _http: HttpClient) {}

  getAllCourses() {
    return this._http.get<Course[]>(this.BASE_URL).pipe(
      first(),
      delay(5000),
      tap((courses) => console.log(courses))
    );
  }
}
