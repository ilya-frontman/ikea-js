'use strict';

import { getLocalStorage, setLocalStorage } from './storage.js';

export const userData = {
    _wishListData: getLocalStorage('wishList'),

    get wishList() {
        return this._wishListData;
    },
    set wishList(id) {
        if (this._wishListData.includes(id)) {
            const index = this._wishListData.indexOf(id);
            this._wishListData.splice(index, 1);
        } else {
            this._wishListData.push(id);
        }
        setLocalStorage('wishList', this._wishListData);
    },

    _cartListData: getLocalStorage('cartList'),

    get cartList() {
        return this._cartListData;
    },

    set cartList(id) {
        let good = this._cartListData.find( (item) => item.id === id);

        if (good) {
            good.count++;
        } else {
            good = { id, count: 1};
            this._cartListData.push(good);
        }

        setLocalStorage('cartList', this._cartListData);
    },

    set CountCartList({id, count}) {

        let goodItem = this._cartListData.find(item => item.id === id);
        
        goodItem.count = count;

        setLocalStorage('cartList', this.cartList)
    },

    set removeFromCartList(idd) {
    
        const goodInCart = this._cartListData.find(item => item.id === idd);

        if (goodInCart) {
            const index = this._cartListData.indexOf(goodInCart);
            this._cartListData.splice(index, 1);

            setLocalStorage('cartList', this.cartList);
        }
        
    }
};