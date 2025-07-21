#include "cart/Cart.hpp"
#include "./discount/discountProcessor.hpp"

int main() {
    // Cart cart;
    // cart.addItem("Laptop", 50000, 1);
    // cart.addItem("Mouse", 1000, 2);
    // cart.addItem("Keyboard", 2000, 1);

    // cart.printCart();

    // cart.removeItem("Mouse");
    // std::cout << "After removing Mouse:\n";
    // cart.printCart();

    Cart cart;
cart.addItem("Shoes", 2000, 1);
cart.addItem("T-Shirt", 800, 2);

IDiscount* discount = new PercentageDiscount(100); // Or FlatDiscount(300)
discountProcessor checkout(&cart, discount);
checkout.processDiscount();


    return 0;
}
