#pragma once
#include <string>

class CartItem {
public:
    std::string name;
    double unitPrice;
    int quantity;

    CartItem(const std::string& name, double price, int qty)
        : name(name), unitPrice(price), quantity(qty) {}

    double totalPrice() const {
        return unitPrice * quantity;
    }
};
