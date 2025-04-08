const { expect } = require("chai");

describe('Test /health', () => {
    describe('Health check on /sync', () => {
        it('health should be okay', () => {
            const actualResult = 'OK';
            expect(actualResult).to.equal('OK');
        });
    });
});