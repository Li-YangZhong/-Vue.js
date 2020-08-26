var app = new Vue({ // new Vue instance
    el:'#app', // connecting to an element in the DOM
    data: {
        product: 'Socks',
        image: 'assets/green.jpg',
        inStock: false,
        details:["80% cotton", "20% polyester", "Gender-neutral"],
        variants:[
            {
                variantId: 2234,
                variantColor: "green"
            },
            {
                variantId: 2235,
                variantColor: "blue"
            }
        ],
        cart: 0
    }
})