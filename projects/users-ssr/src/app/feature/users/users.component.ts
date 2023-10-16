import { Component } from '@angular/core';
import { Observable, concat, map, timer } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  users$: Observable<string[]>;

  constructor() {
    this.users$ = concat(
      timer(1000).pipe(map(() => ["a", "b"])),
      timer(1000).pipe(map(() => ["c", "d"]))
    )
  }
}
