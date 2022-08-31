import request from 'supertest';
import express from 'express';
const bodyParser = require("body-parser");
import router from'../main.js';
import testProduct from "../../models/__tests__/data/product_data.js";
import db from "../../config/memory_server.js";
const mongoose = require('mongoose');

const app = new express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.use('/', router);

beforeAll( async () => {
	await db.setUp();
});

afterEach( async () => {
	await db.dropCollections();
});

afterAll( async () => {
	await db.dropDatabase();
});

//TODO: rework to test for API paths rather than user-facing pages
//i guess you'll be testing for appropriate JSON responses?



//get user
//create user
//update user
//delete user
describe("basic api functionality", function() {

	test("hello api response", async() =>{
		const res = await request(app).get('/api');
		expect(res.statusCode).toBe(200);
		expect(res.body.message).toEqual("Hello omegamart api!");
	})

	test("api responds to post", async() =>{
		const msg = "hello from jest route testing"
		try {
			const res = await request(app).post('/api/')
					.set('Content-type', 'application/json')
					.send({ hello: msg});
			expect(res.statusCode).toBe(200);
			expect(res.body.message).toEqual("successful post request " + msg);

			//console.log(res.body);
		} catch (err){
			console.log("post failed ", err);
		}
		
	})
	
});

//get product
//create product
//update product
//delete product
describe("Product CRUD", function() {
	test("create new product", async () => {
		const res = await request(app).post('/api/products/')
			.set('Content-type', 'application/json')
			.send(testProduct);
		expect(res.statusCode).toBe(200);
		expect(res.body.message).toEqual("Product added successfully");
		
	})

	/*test("list all products", async() =>{
		const res = await request(app).get('/api/products');
		expect(res.statusCode).toBe(200);
		expect(res.body.data.length).toBeGreaterThan(0);
	})*/

	
});
/*
	test("default 404 route", async () => {
		const res = await request(app).get('/roadtonowhere');
	    expect(res.header['content-type']).toBe('text/html; charset=utf-8');
    	expect(res.statusCode).toBe(404);
    	expect(res.text).toEqual('uh oh kiddos');
	} );
});*/