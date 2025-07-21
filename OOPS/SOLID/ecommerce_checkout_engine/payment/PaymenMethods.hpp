#include "IPayment.hpp"

class UPI : public IPayment {
    public:
        void pay(double amount) override {
            cout << "Have Paid " << amount << " with UPI"; 
        }
};

class CreditCard : public IPayment {
    public:
        void pay(double amount) override {
            cout << "Have paid " << amount << " with Credit card";
        }
};