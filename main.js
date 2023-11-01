const app = Vue.createApp({
    data() {
        return {
            variants: [
                {id: 1, name: 'Vanilla', price: 100},
                {id: 2, name: 'Chocolate', price: 120},
                {id: 3, name: 'Strawberry', price: 90},
                {id: 4, name: 'Orange', price: 70},
                {id: 5, name: 'Lemon', price: 30},
            ],
            cart: [],
            showModal: false
        }
    },
    methods: {
        addToCart( variantID ) {
           this.cart.push(this.variants.find(variant=> variant.id === variantID) );
        },
        removeFromCart(variantID) {
            let position = this.cart.findIndex(variant => variant.id === variantID);
            this.cart.splice(position,1);
           
        }
    }   
});