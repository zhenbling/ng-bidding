import { AbstractControl } from '@angular/forms';

export class PhoneValidator {
  public static validator (c: AbstractControl) {
    //  let phone_regexp='((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[0,5-9]))\\d{8}'
    //  console.log("kkkkkkkkkkkkkkkk---")
    const phone_regexp = /^1[34578]\d{9}$/;
    return phone_regexp.test(c.value) ? null : {
      validatorPhone: {
        valid: false
      }
    };
  }
}
