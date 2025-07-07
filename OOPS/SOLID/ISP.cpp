#include<bits/stdc++.h>
using namespace std;

class IWorker {
public:
    virtual void code() = 0;
    virtual void attendMeetings() = 0;
    virtual void design() = 0;
    virtual void recruit() = 0;
};

class ICoder {
    public:
    virtual void code() = 0;
    virtual void attendMeetings() = 0;
}

class IDesigner {   
public:
    virtual void design() = 0;
    virtual void attendMeetings() = 0;
};

class IRecruiter {
public:     
    virtual void recruit() = 0;
    virtual void attendMeetings() = 0;
};

class Developer : public ICoder {
public:
    void code() override { std::cout << "Writing code\n"; }
};
 
int main(){
   
    return 0;
}