import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.style.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputTextComponent),
      multi: true
    }
  ]
})
/** input-text component*/
export class InputTextComponent implements ControlValueAccessor {
  onTouched: any;
  onChange: any;
  disabled = false;
  @Input('value') _value;
  @Input() type = 'text';
  @Input() customMask = '';
  @Input() errorMessage = 'Необходимо заполнить поле';
  @Input() focus = false;
  @Input() placeholderExtension = '';
  @Input() textSuffix = '';
  @Input() textMask = '';
  @Input() textMaskValidation = true;
  @Input() mxLength = 1000;
  @Input() textInput = 'text';

  get value() {
    return this._value;
  }

  set value(val) {
    this._value = val;
    this.onChange(val);
    this.onTouched();
  }

  writeValue(value: any): void {
    if (value != null) {
      this.value = value;
    }
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
  /** input-text ctor */
  constructor() {

  }
}
