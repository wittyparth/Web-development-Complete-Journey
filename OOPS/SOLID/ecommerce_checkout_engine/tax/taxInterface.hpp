#include <bits/stdc++.h>
using namespace std;

class taxInterface {
    public:
        virtual double calculateTax(double amount) = 0;
        virtual ~taxInterface(){};
}