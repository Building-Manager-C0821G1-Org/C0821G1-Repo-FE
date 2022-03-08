import {AbstractControl,ValidationErrors} from "@angular/forms";

export function gte(control: AbstractControl): ValidationErrors|null {
  const v = +control.value;

}
