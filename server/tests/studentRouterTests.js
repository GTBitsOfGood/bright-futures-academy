let chai = require('chai');
let chaiHttp = require("chai-http");

chai.use(chaiHttp);

let server = 'http://localhost:5000';
let expect = chai.expect;
let assert = chai.assert;

var studentToPost = {
    "studentId" : 123,
    "name" : {
        "first" : "FirstName",
        "second" : "SecondName"
    }
}

function testAsync(done, fn) {
    try {
        fn();
        done();
    } catch(err) {
        done(err);
    }
}



describe("Test Student Router", function(){
    
    it("should post one student in household and return it", (done) => {

    })
})