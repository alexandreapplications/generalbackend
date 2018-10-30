import { FormGroup, AbstractControl } from '@angular/forms';

export class TestHelper {
    public static testRequiredField (field: AbstractControl, empty: boolean): boolean {
        if (empty) {
            field.setValue(null);

        } else {
            field.setValue('a');
        }
        return field.hasError('required');
    }
    public static testMaxLengthField (field: AbstractControl, size: number): boolean {
        field.setValue(''.padEnd(size, 'Q'));
        return field.hasError('maxlength');
    }
    public static testMinLengthField (field: AbstractControl, size: number): boolean {
        field.setValue(''.padEnd(size, 'Q'));
        return field.hasError('minlength');
    }
}
