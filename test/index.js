var should = require('chai').should(),
    firstmodule = require('../index');

describe('sum up', function() {
    it('1+2+3+4 should be 10', function() {
        firstmodule(1,2,3,4).should.equal(10);
    });
});
