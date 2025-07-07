#include "./PaymenMethods.hpp"

class PaymentService {
    IPayment* payment;
    public:
        PaymentService(IPayment* p) : payment(p) {};
        void paymentService(double amount) {
            payment->pay(amount);
        }
}