import { Injectable } from '@angular/core';
import { ITodo } from '../models/todo.interface';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }
  public todos: ITodo[] = [
    {title: 'Todo 1',description: 'Description 1',isArchived: false,isCompleted:true,endDate: new Date()}
    ,{title: 'Todo 2',description: 'Description 1',isArchived: true,isCompleted:true,endDate: new Date()}, 
    {title: 'learn',description: 'Description 1',isArchived: false,isCompleted:true,endDate: new Date()},
    {title: 'clean',description: 'Description 1',isArchived: false,isCompleted:true,endDate: new Date()},
    {  title: 'read',description: 'Description 1',isArchived: false,isCompleted:true,endDate: new Date()}
    ]

  private _todoSubject: BehaviorSubject<Array<ITodo>> = new BehaviorSubject(this.todos);
  public getTodos() :Observable<Array<ITodo>> {
    return this._todoSubject.asObservable();
  }
}
