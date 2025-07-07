#include<bits/stdc++.h>
using namespace std;

class IPayment{
    public:
    void virtual paymentMethod() = 0;
    virtual ~IPayment(){}
};


class CreditCardPayment : public IPayment {
    public:
    void paymentMethod() override {
        cout << "Payment done with credit card" << endl;
    }
};

class ILogger{
    public:
    virtual void Logger() = 0;
    virtual ~ILogger() {};
};

class ConsoleLogger: public ILogger {
    public:
    void Logger() override {
        cout << "Processing Payment..." << endl;
    }
};

class PaymentService{
    IPayment* method;
    ILogger* log;
    public:
    PaymentService(IPayment* method,ILogger* log) : method(method),log(log) {};
    void paymentMethod(){
        method->paymentMethod();
        log->Logger();
    }
};

 
int main(){
    
    return 0;
}