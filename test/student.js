var should = require('should-http'),
	request = require('supertest');

describe("student", function(){
	var url = "localhost:5000";
	describe("find()",function(){
		it("should retrieve all student records",function(done){
			request(url)
			.get('/students')
			.end(function(err,res){
				if(err) throw err;
				res.should.have.status(200);
				res.body.should.be.an.instanceOf(Array);
				done();
			})
		})
	});
	describe("insert()",function(){
		var student = [{}]
		it("should return newly created record",function(done){
			request(url)
			.post('/students')
			.send({'studNo':'2013-12345','name':'Betel'})
			.end(function(err,res){
				if(err) throw err;
				res.should.have.status(200);
				res.body.should.be.an.instanceOf(Object)
				res.body.should.have.properties(['id','studNo','name']);
				res.body.id.should.be.a.Number;
				res.body.studNo.should.be.a.String;
				res.body.name.should.be.a.String;
			})
			done();
		})
	});
});