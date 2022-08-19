const Router = require('express');


const router = Router();

router.get('/', (req, res) => {
	res.send('home page');
});

router.get('/shop/:category', (req, res) => {
	res.send('show products in category '+req.params.category);
})

router.get('/product/:id', (req, res) => {
	res.send('Product with id '+req.params.id);
});

router.get('/cart', (req, res) => {
	res.send('view cart');
});

router.get('/checkout', (req, res) => {
	res.send('checkout page');
})

router.get('/login', (req, res) => {
	res.send('login page, gonna have to deal with that eventually');
})

router.get('/manage', (req, res) => {
	res.send('gonna have to figure out how to restrict this page to logged-in users etc')
})

//The 404 Route (ALWAYS Keep this as the last route)
router.get('*', function(req, res){
  res.status(404).send('uh oh kiddos');
});
module.exports = router;