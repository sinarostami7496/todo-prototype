import { AbstractControl, ValidationErrors, Validator } from '@angular/forms';

export class TimeValidation{

   static validate(control: AbstractControl): ValidationErrors | null{

    if(control.value == 20) {
      return {
        "timeValidation": true
      }
    }

    return null;

  }

}
