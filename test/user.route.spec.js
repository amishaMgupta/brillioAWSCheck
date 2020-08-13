const assert = require('chai').assert;
const request = require('supertest');
const app = require('../app');

describe('Testing user register function',()=>{
    it('Should get all the users, return the array',(done)=>{
        request(app)
        .get('/api/user')
        .set('token','jwttoken')
        .expect(200)
        .end((err,res) =>{
            if(err) return done(err);
            assert.equal(res.body[0].name,'naga');
            done();
        })
    })
    it('Should create a new users, return success',(done)=>{
        request(app)
        .post('/api/user')
        .set('token','jwttoken')
        .send({id : '3',name : 'Janagarathinam',age : '30'})
        .expect(201)
        .end((err,res) =>{
            if(err) return done(err);
            assert.equal(res.text,"User is created Successfully");
            done();
        })
    })
    it('Should find an user',(done)=>{
        request(app)
        .post('/api/user')
        .set('token','jwttoken')
        .send({id : '2',name:'abhishek',age:'30'})
        .expect(200)
        .end((err,res) =>{
            if(err) return done(err);
            assert.equal(res.text,'User is alrady exist');
            done();
        })
    })
})