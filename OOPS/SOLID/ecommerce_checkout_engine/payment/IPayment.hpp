#include <bits/stdc++.h>
using namespace std;

class IPayment {
    public:
        virtual void pay(double payment) = 0;
        virtual ~IPayment(){};
};