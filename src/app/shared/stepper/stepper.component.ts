import {Component, ElementRef, EventEmitter, HostBinding, Input, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent implements OnInit {

  /** 最小值 */
  @Input() min: number = -Infinity;
  /** 最大值 */
  @Input() max: number = Infinity;
  /** 禁用 */
  @Input() @HostBinding('class.disabled') disabled: boolean = false;
  /** 变更时回调 */
  @Output() change = new EventEmitter<number>();

  _step: number = 1;
  _precisionStep = 0;
  _precisionFactor = 1;

  @ViewChild('inputNumber') _inputNumber: ElementRef;

  /** 步长，可以为小数 */
  @Input()
  get step() { return this._step; }
  set step(value: number) {
    this._step = value;

    const stepString = value.toString();
    if (stepString.indexOf('e-') >= 0) {
      this._precisionStep = parseInt(stepString.slice(stepString.indexOf('e-')), 10);
    }
    if (stepString.indexOf('.') >= 0) {
      this._precisionStep = stepString.length - stepString.indexOf('.') - 1;
    }
    this._precisionFactor = Math.pow(10, this._precisionStep);
  }

  private _value: number;

  /** @docs-private */
  get value() { return this._value; }
  set value(value: number) {
    if (isNaN(value) || value === this.value) return;

    value = +value;

    if (value > this.max) {
      this._value = this.max;
      this.onChange(this.max);
    } else if (value < this.min) {
      this._value = this.min;
      this.onChange(this.min);
    } else {
      this._value = value;
      this._checkDisabled();
    }
  }

  _disabledMinus: boolean = false;
  _disabledPlus: boolean = false;
  _checkDisabled() {
    this._disabledPlus = this.disabled || !((this.value + this.step) <= this.max);
    this._disabledMinus = this.disabled || !((this.value - this.step) >= this.min);
  }

  _plus() {
    if (this.value === undefined) this.value = this.max || 0;
    this._checkDisabled();

    if (this._disabledPlus) return;
    this.value = this._toPrecisionAsStep((this._precisionFactor * this.value + this._precisionFactor * this.step) / this._precisionFactor);
    this._checkDisabled();
    this.onChange(this.value);
  }

  _minus() {
    if (this.value === undefined) this.value = this.min || 0;
    this._checkDisabled();

    if (this._disabledMinus) return;
    this.value = this._toPrecisionAsStep((this._precisionFactor * this.value - this._precisionFactor * this.step) / this._precisionFactor);
    this._checkDisabled();
    this.onChange(this.value);
  }

  _blur() {
    const el = this._inputNumber.nativeElement;
    this.value = +el.value;
    el.value = this.value;
    this._checkDisabled();
    this.onChange(this.value);
  }

  _toPrecisionAsStep(num: any) {
    if (isNaN(num) || num === '') {
      return num;
    }
    return Number(Number(num).toFixed(this._precisionStep));
  }

  writeValue(value: any): void {
    if (value) this.value = value;
  }

  private onChange: any = Function.prototype;
  private onTouched: any = Function.prototype;

  public registerOnChange(fn: (_: any) => {}): void { this.onChange = fn; }
  public registerOnTouched(fn: () => {}): void { this.onTouched = fn; }

  setDisabledState(isDisabled: boolean): void {
  }
  ngOnInit(): void {
  }

}
