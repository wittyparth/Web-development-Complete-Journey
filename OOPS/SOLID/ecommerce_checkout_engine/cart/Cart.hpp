#pragma once
#include "CartItem.hpp"
#include <vector>
#include <iostream>
#include <algorithm>

class Cart {
private:
    std::vector<CartItem> items;

public:
    void addItem(const std::string& name, double price, int qty) {
        for (auto& item : items) {
            if (item.name == name) {
                item.quantity += qty;
                return;
            }
        }
        items.emplace_back(name, price, qty);
    }

    void removeItem(const std::string& name) {
        items.erase(std::remove_if(items.begin(), items.end(),
            [&](const CartItem& item) {
                return item.name == name;
            }), items.end());
    }

    double getTotal() const {
        double total = 0;
        for (const auto& item : items) {
            total += item.totalPrice();
        }
        return total;
    }

    void printCart() const {
        std::cout << "🛒 Cart Contents:\n";
        for (const auto& item : items) {
            std::cout << " - " << item.name << " x" << item.quantity << " @ ₹" << item.unitPrice
                      << " = ₹" << item.totalPrice() << "\n";
        }
        std::cout << "Subtotal: ₹" << getTotal() << "\n\n";
    }
};
