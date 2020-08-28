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

    it('require pattern', () => {
        const rules: ValidateRule[] = [ { required: true, pattern: /123/ } ];
        expect(checkValidate(null, rules)).to.not.be.undefined;
        expect(checkValidate(null, rules)!.required).to.be.true;
    });
});
