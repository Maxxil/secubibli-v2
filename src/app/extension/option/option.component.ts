import { Component, Input } from '@angular/core';
import { MatOption } from '@angular/material/core';

@Component({
  selector: 'app-option',
  templateUrl: './option.component.html',
  styleUrls: ['./option.component.scss']
})
export class OptionComponent extends MatOption{
  @Input()
  __disabled: boolean;

  @Input()
  override get disabled(): boolean{
    return this.__disabled;
  }

  override set disabled(value: boolean){
    this.__disabled = value
  }
}
