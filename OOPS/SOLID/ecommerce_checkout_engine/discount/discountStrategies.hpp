#include "./discountInterface.hpp"
#include "../cart/Cart.hpp"

class FlatDiscount : public IDiscount {
    private:
        double discount;
    public:
        FlatDiscount(double d) : discount(d){};
        double calculate(double subtotal) override {
            return max(0.00,subtotal-discount);
        }
};

class PercentageDiscount : public IDiscount {
    private:
        int discount;
    public:
        PercentageDiscount(int d) : discount(d){};
        double calculate(double subtotal) override {
            return max(0.00,subtotal*(100-discount));
        }
};