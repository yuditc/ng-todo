import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MaterialModule } from './material/material.module';
import { TodoListComponent } from "./components/todo-list/todo-list.component";
import { HeaderComponent } from "./components/header/header.component";


@Component({
  selector: 'app-root',
  imports: [MaterialModule, TodoListComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ng-todo';
}
