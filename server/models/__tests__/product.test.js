import mongoose  from "mongoose";
import Product from "../Product";
import db from "../../config/memory_server.js";

const productData = require('./data/product_data.js');

beforeAll( async () => {
	await db.setUp();
});

afterEach( async () => {
	await db.dropCollections();
});

afterAll( async () => {
	await db.dropDatabase();
});

describe("Product model", () => {
	it("create & save product successfully", async () => {
		const validProduct = new Product(productData);
		const savedProduct = await validProduct.save();

		expect(savedProduct._id).toBeDefined();
		expect(savedProduct.name).toBe(productData.name);
		expect(savedProduct.price).toBe(productData.price);
		expect(savedProduct.description).toBe(productData.description);
		expect(savedProduct.images[0].small).toEqual(productData.images[0].small);
		expect(savedProduct.stock_qty).toBe(productData.stock_qty);
		expect(savedProduct.category).toBe(productData.category);
		expect(savedProduct.updated_date).toBeDefined();
	});

	//You shouldn't be able to add in any field that isn't defined in the schema
	it("insert product successfully, but don't define the field not defined in the schema", async() => {
		const invalidFieldProduct = new Product({
			...productData,
			surprise: "beetlejuice"
		});
		const savedInvalidFieldProduct = await invalidFieldProduct.save();
		expect(savedInvalidFieldProduct._id).toBeDefined();
		expect(savedInvalidFieldProduct.surprise).toBeUndefined();
	});

	it("shouldn't create a product without required fields", async () => {
		const missingFieldProduct = new Product({name: "Whale Song Deoderant"});
		let err;
		try {
			const savedMissingFieldProduct = await missingFieldProduct.save();
		} catch (error) {
			err = error;
		}
		expect(err).toBeInstanceOf(mongoose.Error.ValidationError);
		expect(err.errors.price).toBeDefined();
	})

})