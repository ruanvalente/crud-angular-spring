import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { catchError, Observable, of } from 'rxjs';
import { ErrorDialogComponent } from '../../shared/components/error-dialog/error-dialog.component';

import { Course } from '../model/course';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  courses$: Observable<Course[]>;
  displayedColumns = ['name', 'category'];

  constructor(
    private _courseService: CoursesService,
    public dialog: MatDialog
  ) {
    this.courses$ = _courseService.getAllCourses().pipe(
      catchError((error) => {
        this.openDialog(
          'Error ao carregar a lista de cursos. Tente novamente mais tarde.'
        );
        return of([]);
      })
    );
  }

  openDialog(errorMessage: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: { errorMessage },
    });
  }

  ngOnInit(): void {}
}
