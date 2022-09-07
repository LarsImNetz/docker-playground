import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.css'],
})
export class TextareaComponent implements OnInit {
  @Input()
  public name: string;

  @Input()
  public textValue: string;

  @Output()
  public textValueChange: EventEmitter<string>;

  @Input()
  public rows: number;

  @Input()
  public maxlength: number;

  @Input()
  public placeholder: string;

  @Input()
  public isRequired: boolean;

  constructor() {
    this.textValueChange = new EventEmitter<string>();
    this.rows = 4;
    this.maxlength = 1024;
    this.placeholder = '';
  }

  ngOnInit() {
    if (!this.name) {
      throw new Error("Please provide a name for the Textarea component!");
    }
    //? this.name = this.santizeService.sanitizeValue(this.name);
  }

  onInputChange(value: string) {
    this.textValueChange.emit(value);
  }

}
