#include<bits/stdc++.h>
using namespace std;

class IEmailSender {
    public:
        virtual void send(std::string message) = 0;
};

class EmailSender: public IEmailSender {
    public:
        void send override (std::string message) {
            std::cout << "Email sent: " << message << "\n";
        }
};
    
class NotificationService {
    private:
        IEmailSender *sender;
    public:
        NotificationService(IEmailSender *emailSender) : sender(emailSender) {}
        void notify(std::string msg) {
            sender.send(msg);
        }
};
    
int main(){
   
    return 0;
}