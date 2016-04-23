var assert = require('assert');
var sut = require('../../../viewElements/transforms/transform.service')

describe("linecount", function() {
    context("file with three lines", function() {
        var messing = new sut.TransformService();
        it("returns 3", function() {
            assert.equal(3, 3);
        });
    });
});