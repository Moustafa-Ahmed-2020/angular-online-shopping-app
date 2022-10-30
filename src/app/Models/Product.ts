export class Product {
    id:number;
    name: string;
    url: string;
    price: number;
    reviews: number;
    wishlist: boolean;
    description: string;
    quantity: number; 

    constructor() {
        this.id = 0;
        this.name = '';
        this.url = '';
        this.price = 0; 
        this.reviews = 0;
        this.wishlist = false;
        this.description = '';
        this.quantity = 0;       
    }

}