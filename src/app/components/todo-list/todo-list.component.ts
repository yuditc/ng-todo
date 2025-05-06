import { Component, OnDestroy, OnInit } from '@angular/core';
import { MaterialModule } from '../../material/material.module';
import { ITodo } from '../../models/todo.interface';
import { CommonModule } from '@angular/common';
import { TodoService } from '../../services/todo.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-todo-list',
  imports: [MaterialModule,CommonModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss'
})


export class TodoListComponent implements OnInit ,OnDestroy {

  public todos: ITodo[] = [];
private subscription: Subscription = new Subscription();

  constructor(private todoService:TodoService) { };

 
ngOnInit(): void {
    this.subscription.add(this.todoService.getTodos().subscribe(data => {
      this.todos = data
    }))
  }
ngOnDestroy(): void {
  this.subscription.unsubscribe();
}

}
  
  

 

 

