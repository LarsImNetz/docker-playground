export class TodoDto {

  private todoArray: any;

  constructor() {
    console.log('ctor TodoDto');
    this.todoArray = [];
  }

  public add(value: string): void {
    this.todoArray.push(value);
  }

  public getContent(): any {
    return this.todoArray;
  }

  public delete(index: number) {
    this.todoArray.splice(index, 1);
  }

}
