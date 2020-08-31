import { expect } from 'chai';
import { checkValidate } from '../../../src/ts/utils';
import { ValidateRule } from '../../../types/form';

describe('validate', () => {
    it('require', () => {
        const rules: ValidateRule[] = [ { required: true } ];
        expect(checkValidate(null, rules)).to.not.be.undefined;
        expect(checkValidate(undefined, rules)).to.not.be.undefined;
        expect(checkValidate('', rules)).to.not.be.undefined;
        expect(checkValidate([], rules)).to.not.be.undefined;

        expect(checkValidate(0, rules)).to.be.undefined;
        expect(checkValidate('0', rules)).to.be.undefined;
        expect(checkValidate(' ', rules)).to.be.undefined;
    });

    it('pattern', () => {
        const rules: ValidateRule[] = [ { pattern: /123/ } ];
        expect(checkValidate('123', rules)).to.be.undefined;
        expect(checkValidate(null, rules)).to.be.undefined;
        expect(checkValidate('122', rules)).to.not.be.undefined;
    });

    it('max', () => {
        const rules: ValidateRule[] = [ { max: 5 } ];
        expect(checkValidate('12345', rules)).to.be.undefined;
        expect(checkValidate(null, rules)).to.be.undefined;
        expect(checkValidate('123456', rules)).to.not.be.undefined;
        expect(checkValidate(5, rules)).to.be.undefined;
        expect(checkValidate(5.1, rules)).to.not.be.undefined;
        expect(checkValidate([ 1,2,3,4,5 ], rules)).to.be.undefined;
        expect(checkValidate([ 1,2,3,4,5,6 ], rules)).to.not.be.undefined;
    });

    it('min', () => {
        const rules: ValidateRule[] = [ { min: 5 } ];
        expect(checkValidate('12345', rules)).to.be.undefined;
        expect(checkValidate(null, rules)).to.be.undefined;
        expect(checkValidate('1234', rules)).to.not.be.undefined;
        expect(checkValidate(5, rules)).to.be.undefined;
        expect(checkValidate(4.9, rules)).to.not.be.undefined;
        expect(checkValidate([ 1,2,3,4,5 ], rules)).to.be.undefined;
        expect(checkValidate([ 1,2,3,4 ], rules)).to.not.be.undefined;
    });

    it('require pattern', () => {
        const rules: ValidateRule[] = [ { required: true, pattern: /123/ } ];
        expect(checkValidate(null, rules)).to.not.be.undefined;
        expect(checkValidate(null, rules)!.required).to.be.true;
    });
});
