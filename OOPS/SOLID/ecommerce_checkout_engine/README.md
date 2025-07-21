# 🛒 E-Commerce Checkout Engine in C++

This project is a **modular, production-style E-Commerce Checkout Engine** built with full adherence to **SOLID principles** and object-oriented design patterns in C++.

It simulates the backend of a real checkout system, handling:

* 🛍️ Cart management
* 💸 Discount strategies
* 🧾 Tax calculation
* 💳 Payment processing
* 📦 Invoice generation
* 📲 User notification

---

## ✅ Technologies

* C++17
* CLI-based interface
* Follows SRP, OCP, LSP, ISP, DIP strictly

---

## 🧱 Folder Structure

```
ecommerce_checkout_engine/
├── main.cpp
├── cart/
│   ├── CartItem.hpp
│   └── Cart.hpp
├── discount/
│   ├── IDiscountStrategy.hpp
│   ├── FlatDiscount.hpp
│   └── PercentageDiscount.hpp
├── tax/
│   ├── ITaxCalculator.hpp
│   ├── IndiaGST.hpp
│   └── InternationalTax.hpp
├── payment/
│   ├── IPaymentMethod.hpp
│   ├── CreditCardPayment.hpp
│   └── UPIPayment.hpp
├── invoice/
│   └── InvoiceGenerator.hpp
├── notification/
│   ├── INotification.hpp
│   ├── EmailNotification.hpp
│   └── SMSNotification.hpp
├── utils/
│   └── ILogger.hpp
└── CMakeLists.txt (optional)
```

---

## 🚀 Phases & Instructions

### ✅ Phase 1: Cart System

* Create a `CartItem` class with name, unit price, quantity.
* Create a `Cart` class to:

  * Add items
  * Remove items
  * Calculate subtotal
  * Print cart summary
* No discount or tax applied here.

### ✅ Phase 2: Discount Strategy (OCP + Strategy Pattern)

* Define interface: `IDiscountStrategy`

  * Method: `applyDiscount(double subtotal)`
* Implement:

  * `FlatDiscount(double amount)`
  * `PercentageDiscount(double percent)`
* Build `CheckoutService`:

  * Accepts cart + discount strategy
  * Calculates subtotal and final price after discount

### ✅ Phase 3: Tax Calculation (DIP + OCP)

* Define `ITaxCalculator`
* Implement:

  * `IndiaGST (18%)`
  * `InternationalTax (e.g., 5%)`
* Extend `CheckoutService`:

  * Add support for tax calculator
  * Calculates: `Final = Discounted + Tax`

### ✅ Phase 4: Payment Module (DIP + Strategy)

* Interface: `IPaymentMethod`

  * Method: `pay(amount)`
* Implement:

  * `CreditCardPayment`
  * `UPIPayment`
* Add `PaymentService`:

  * Accepts total + payment method
  * Logs payment processing

### ✅ Phase 5: Invoice & Notification System (SRP + DIP)

* `InvoiceGenerator`:

  * Accepts cart, discount, tax
  * Prints invoice with full breakdown
* `INotification` interface:

  * Method: `send(message)`
* Implement:

  * `EmailNotification`
  * `SMSNotification`
* After payment, generate invoice & send notification

---

## 🧠 Design Principles Applied

| Principle | How It’s Used                                             |
| --------- | --------------------------------------------------------- |
| SRP       | Each class has one clear responsibility                   |
| OCP       | New discounts/taxes/payments can be added without changes |
| LSP       | All subclasses respect their base contracts               |
| ISP       | Interfaces are small and segregated                       |
| DIP       | High-level modules depend on abstractions only            |

---

## 💡 Example Flow

```
Items:
 - Shoes x1 @ ₹2000 = ₹2000
 - T-Shirt x2 @ ₹800 = ₹1600
Subtotal        : ₹3600
Discount (₹600) : ₹3000
Tax (18%)       : ₹540
Total           : ₹3540

> Processing ₹3540 using Credit Card...
> Sending Invoice via Email
```

---

## 🛠️ Compilation

```bash
g++ -std=c++17 main.cpp -o checkout
./checkout
```

---

## 🌱 Future Extensions

* Add Coupon Engine
* Region-based tax rules
* Logging and Exception handling
* SQLite/REST backend in Python or Go
* React + FastAPI version for deployment

---

## ✨ Maintainer

Built by **Partha** to master C++ design, SOLID, and backend architecture 💼
