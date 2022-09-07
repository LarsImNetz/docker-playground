import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AppComponent } from '../app.component';
import { TodoDto } from '../todo.dto';

@Component({
  selector: 'app-todoinput',
  templateUrl: './todoinput.component.html',
  styleUrls: ['./todoinput.component.css'],
})
export class TodoinputComponent implements OnInit {

  @Input()
  public name: string;

  @Input()
  public placeholder: string;

  @Input()
  public textValue: string;

  @Input()
  public isRequired: boolean;

  @Input()
  public maxlength: number;

  @Output()
  public textValueChange: EventEmitter<string>;

  constructor(private todoDto: TodoDto) {
    this.textValueChange = new EventEmitter<string>();
  }

  onInputChange(value: string) {
    console.log('todoinput: onInputChange(value=' + value + ')');
    this.textValueChange.emit(value);
  }

  addButton(value: string) {
    console.log('todoinput: addButton(value=' + value + ')');
    // this.textValue = value;
    if (value == null || value === '') {
      console.log("addButton, value empty!");
      return;
    }
    this.todoDto.add(value);
  }

  ngOnInit() {
    if (!this.name) {
      throw new Error('Please provide a name for the TodoinputComponent component!');
    }
  }
}
