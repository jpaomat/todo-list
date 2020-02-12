import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/shared/interfaces/todo';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-list',
  templateUrl: './create-list.component.html',
  styleUrls: ['./create-list.component.scss']
})
export class CreateListComponent implements OnInit {
  formComplete: FormGroup;
  createMode: boolean=true;
  todo: Todo;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formComplete=this.formBuilder.group({
      userId:['', Validators],
      title:['',Validators.required],
      description:['',Validators.required],
      completed:false
    })
    /*if(!this.createMode){
      this.loadAll(this.todo);
    }*/
  }
  loadAll(todo){
    this.formComplete.patchValue(todo);
  }
  onSubmit(){
    fetch('https://jsonplaceholder.typicode.com/todos', {
    method: 'POST',
    body: JSON.stringify(this.modelTodo),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
  .then(response => response.json())
  .then(json => console.log(json))

  };

}
