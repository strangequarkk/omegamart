import request from 'supertest';
import express from 'express';
import router from'../main.js';

const app = new express();
app.use('/', router);

//TODO: rework to test for API paths rather than user-facing pages
//i guess you'll be testing for appropriate JSON responses?

//get product
//create product
//update product
//delete product

//(category? idk how mongo deals with associations like this)
//get category
//create category
//edit category
//delete category
//ditto for product images, imagesets???

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
	
});
/*describe("main pages work", function () {

	test('home page exists', async () => { 		
		const res = await request(app).get('/');
	    expect(res.header['content-type']).toBe('text/html; charset=utf-8');
    	expect(res.statusCode).toBe(200);
    	expect(res.text).toEqual('home page')
    });

    test("can view product by category", async () => {
    	const res = await request(app).get('/shop/mugs');
	    expect(res.header['content-type']).toBe('text/html; charset=utf-8');
    	expect(res.statusCode).toBe(200);
    	expect(res.text).toEqual('show products in category mugs'); 
    });

	test("can view product by id", async () => { 		
		const res = await request(app).get('/product/5');
	    expect(res.header['content-type']).toBe('text/html; charset=utf-8');
    	expect(res.statusCode).toBe(200);
    	expect(res.text).toEqual('Product with id 5');
    });

	test("cart route", async () => { 		
		const res = await request(app).get('/cart');
	    expect(res.header['content-type']).toBe('text/html; charset=utf-8');
    	expect(res.statusCode).toBe(200);
    	expect(res.text).toEqual('view cart'); 
    });

	test("checkout route", async () => { 		
		const res = await request(app).get('/checkout');
	    expect(res.header['content-type']).toBe('text/html; charset=utf-8');
    	expect(res.statusCode).toBe(200);
    	expect(res.text) .toEqual('checkout page');
    });

    test("login route", async () => { 		
		const res = await request(app).get('/login');
	    expect(res.header['content-type']).toBe('text/html; charset=utf-8');
    	expect(res.statusCode).toBe(200);
    	expect(res.text).toEqual('login page, gonna have to deal with that eventually');
    });

    test("database management", async () => { 		
		const res = await request(app).get('/manage');
	    expect(res.header['content-type']).toBe('text/html; charset=utf-8');
    	expect(res.statusCode).toBe(200);
    	expect(res.text).toEqual('gonna have to figure out how to restrict this page to logged-in users etc')
    });

	test("default 404 route", async () => {
		const res = await request(app).get('/roadtonowhere');
	    expect(res.header['content-type']).toBe('text/html; charset=utf-8');
    	expect(res.statusCode).toBe(404);
    	expect(res.text).toEqual('uh oh kiddos');
	} );
});*/