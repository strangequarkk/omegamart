import mongoose  from "mongoose";
import Product from "../Product";
import db from "../../config/memory_server.js";

const productData = {
	name : "Whale Song Deoderant",
	price: 9.99,
	description: "A vegan antiperspirant and antidepressant for all genders.",
	image_urls: ["DSC_5588-300x380.jpg", "DSC_5588-600x760.jpg"],
	stock_qty: 25
};

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
		expect(savedProduct.price).toBe(productData.price);
		expect(savedProduct.description).toBe(productData.description);
		expect(savedProduct.image_urls).toEqual(productData.image_urls);
		expect(savedProduct.stock_qty).toBe(productData.stock_qty);
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