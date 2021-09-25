import { Utils } from './index';

describe('Utils', () => {
    describe('madeUpMethod1', () => {
        it('returns a special utility string', () => {
            expect(Utils.madeUpMethod1()).toEqual('A utility method');
        });
    });

    describe('madeUpMethod2', () => {
        it('returns a special utility number', () => {
            expect(Utils.madeUpMethod2()).toEqual(37);
        });
    });
});
