var assert = require('assert');
var sut = require('../app/messing')

describe("linecount", function() {
    context("file with three lines", function() {
        //var messing = new sut.Messing();
        it("returns 3", function() {
            assert.equal(3, 3);
        });
    });
});