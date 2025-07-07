#include "./taxStrategies.hpp"

class calculateTax {
    taxInterface* tax;
    public:
        calculateTax(taxInterface* t) : tax(t) {};
        double afterTax(double amount){
            return tax->calculateTax(amount);
        }
};

