import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { environment } from '../environments/environment';
import { ParameterHelper } from './parameter-helper/parameter-helper';
import { SubmitService } from './submit/submit.service';
import { TodoDto } from './todo.dto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // animations: [
  //   trigger('moveInLeft', [
  //     transition('void=> *', [style({transform: 'translateX(300px)'}),
  //       animate(200, keyframes([
  //         style({transform: 'translateX(300px)'}),
  //         style({transform: 'translateX(0)'}),
  //
  //       ]))]),
  //     transition('*=>void', [style({transform: 'translateX(0px)'}),
  //       animate(100, keyframes([
  //         style({transform: 'translateX(0px)'}),
  //         style({transform: 'translateX(300px)'}),
  //
  //       ]))]),
  //
  //   ]),
  // ],
})
export class AppComponent implements OnInit {
  title = 'banner-text-app';

  private todoValue: string;

  private sanitizerText: string;

  private kommentar: string;

  public constructor(
    private readonly parameterHelper: ParameterHelper,
    private todoDto: TodoDto,
    private submitService: SubmitService
  ) {
    console.log('ctor of AppComponent');
    this.todoValue = '';

    this.sanitizerText = `<span>Hier kann ich Texte in HTML schreiben
 <a href="https://www.heise.de" target="_blank">Heise</a>
 die dann richtig formatiert dargestellt werden.
 <a href="https://www.computerbase.de" target="_blank">Computerbase</a>
 kenne ich auch.</span>`;

  }

  onTodoValueChanged(value: string) {
    console.log('todoinput: onTodoValueChanged(value=' + value + ')');
    this.todoValue = value;
  }

  onKommentarChanged(value: string) {
    this.kommentar = value;
  }

  private static logToConsole(message: string): void {
    if (environment.logToConsole) {
      console.warn(`${AppComponent.name}: ${message}`);
    }
  }

  private static handleParameterNotFound(reason?: any): void {
    AppComponent.logToConsole(`parameter not set because: ${reason}`);
  }

  public ngOnInit() {
    console.log('ngOnInit of AppComponent');
    this.parameterHelper.getTodoParameterValue().then((todo) => {
      console.log('AppComponent: ngOnInit::getTodoParameter(todo=' + todo + ')');

      this.todoDto.add(todo);
    }).catch(AppComponent.handleParameterNotFound);
  }

  // submit Form
  public willSubmit(value: NgForm) {
    console.log('onSubmit()');
    console.log(value);
    if (value !== undefined) {
      console.log(value.form);
      // console.log(value.form.todo);
      // this.todoArray.push(value.form);
      value.reset();
      // TODO: first try of a service call
      this.submitService.submit(this.todoDto).then((returnValue) => {
          console.log(returnValue);
        },
      );
    }
    else {
      alert('Field required **');
    }

  }
}
