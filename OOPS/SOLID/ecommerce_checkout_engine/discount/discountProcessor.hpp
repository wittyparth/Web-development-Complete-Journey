#include "../cart/Cart.hpp"
#include "discountStrategies.hpp"

class discountProcessor {
    Cart* cart;
    IDiscount* discount;
    public:
        discountProcessor(Cart* c,IDiscount* d) : cart(c),discount(d) {};
        void processDiscount(){
            double subtotal = cart->getTotal();
            double afterDiscount = discount->calculate(subtotal);
            cout << "Price after discount is : " << afterDiscount;
        }
};