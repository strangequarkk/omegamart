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

async function createProduct(product = testProduct) {
	return request(app).post('/api/products/')
			.set('Content-type', 'application/json')
			.send(product);
}


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
	test("list all products", async() =>{
		const product1 = await createProduct({name: "Whale Song Deoderant", price: 4.50});
		const product2 = await createProduct({name: "Blitz Spray Horse Plush", price: "39.50"});

		const res = await request(app).get('/api/products/');
		expect(res.statusCode).toBe(200);
		expect(res.body.length).toBeGreaterThan(1);
	});

	test("get single product by id", async() => {
		const product = await createProduct();
		const res = await request(app).get('/api/products/'+product.body.product._id);
		expect(res.statusCode).toBe(200);
		expect(res.body.name).toEqual(testProduct.name);

	})

	test("create new product", async () => {
		const res = await createProduct();
		expect(res.statusCode).toBe(201);
		expect(res.body.message).toEqual("Product added successfully");
		
	});

	test("update existing product", async () => {
		const newName = "Gender Fluid Sparkling Water"
		const product = await createProduct();
		const res = await request(app).put('/api/products/'+ product.body.product._id)
										.send({name: newName});
		expect(res.statusCode).toBe(200);
		expect(res.body.message).toEqual("Updated successfully");
		expect(res.body.product.name).toEqual(newName);
		
	});




	
});
/*
	test("default 404 route", async () => {
		const res = await request(app).get('/roadtonowhere');
	    expect(res.header['content-type']).toBe('text/html; charset=utf-8');
    	expect(res.statusCode).toBe(404);
    	expect(res.text).toEqual('uh oh kiddos');
	} );
});*/