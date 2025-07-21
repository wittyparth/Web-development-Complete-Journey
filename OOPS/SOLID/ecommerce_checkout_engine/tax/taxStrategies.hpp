#include "./taxInterface.hpp"

class GST : public taxInterface {
    public:
        double calculateTax(double amount) override{
            return amount*0.18;
        }
};

class Flat : public taxInterface {
    public:
        double calculateTax(double amount) override {
            return amount*0.05;
        }
}