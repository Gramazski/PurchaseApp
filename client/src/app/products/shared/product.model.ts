/**
 * Created by Stanislau_Hramatskiu on 7/21/2017.
 */
export class Product{
    _id: number;
    purchase: string;
    done: boolean;
    price: number;

    constructor(purchase: string, price: number) {

        this.purchase = purchase;
        this.price = price;
        this.done = false;
    }
}