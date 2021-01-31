import { FormGroup } from '@angular/forms';

export function MustMatch(firstPassword: string, secondPassword: string) {
  return (formGroup: FormGroup) => {
    const originalPassword = formGroup.controls[firstPassword];
    const comparisonPassword = formGroup.controls[secondPassword];

    if (comparisonPassword.errors && !comparisonPassword.errors.mustMatch) {
      return;
    }
    if (originalPassword.value !== comparisonPassword.value) {
      comparisonPassword.setErrors({ mustMatch: true });
    } else {
      comparisonPassword.setErrors(null);
    }
  };
}
