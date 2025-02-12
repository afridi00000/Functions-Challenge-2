// Task 1: Function Declaration - Employee Salary Calculation
function calculateSalary(baseSalary, bonus, taxRate) {
    let netSalary = (baseSalary + bonus) - (baseSalary * taxRate);
    return `Net Salary: $${netSalary.toFixed(2)}`;
}

console.log(calculateSalary(5000, 500, 0.1)); 
console.log(calculateSalary(7000, 1000, 0.15)); 
// Task 2: Function Expression - Product Price After Discount
const calculateDiscount = function(price, discountRate) {
    let finalPrice = price - (price * discountRate);
    return `Final Price: $${finalPrice.toFixed(2)}`;
};

console.log(calculateDiscount(100, 0.2)); 
console.log(calculateDiscount(250, 0.15)); 
// Task 3: Arrow Function - Service Fee Calculation
const calculateServiceFee = (amount, serviceType) => {
    let feeRate = 0;
    if (serviceType === "Premium") feeRate = 0.15;
    else if (serviceType === "Standard") feeRate = 0.1;
    else if (serviceType === "Basic") feeRate = 0.05;

    let serviceFee = amount * feeRate;
    return `Service Fee: $${serviceFee.toFixed(2)}`;
};

console.log(calculateServiceFee(200, "Premium")); 
console.log(calculateServiceFee(500, "Standard")); 
// Task 4: Parameters and Arguments - Car Rental Cost Calculation
function calculateRentalCost(days, carType, insurance = false) {
    let dailyRate = 0;
    if (carType === "Economy") dailyRate = 40;
    else if (carType === "Standard") dailyRate = 60;
    else if (carType === "Luxury") dailyRate = 100;

    let totalCost = days * dailyRate;
    if (insurance) totalCost += 20 * days;

    return `Total Rental Cost: $${totalCost}`;
}

console.log(calculateRentalCost(3, "Economy", true)); 
console.log(calculateRentalCost(5, "Luxury", false)); 
// Task 5: Returning Values - Loan Payment Calculation
function calculateLoanPayment(principal, rate, time) {
    let totalPayment = principal + (principal * rate * time);
    return `Total Payment: $${totalPayment.toFixed(2)}`;
}

console.log(calculateLoanPayment(1000, 0.05, 2)); 
console.log(calculateLoanPayment(5000, 0.07, 3)); 
// Task 6: Higher-Order Functions - Identifying Large Transactions
function filterLargeTransactions(transactions, filterFunction) {
    return transactions.filter(filterFunction);
}

let transactions = [200, 1500, 3200, 800, 2500];
console.log(filterLargeTransactions(transactions, amount => amount > 1000));
// Task 7: Closures - Shopping Cart Tracker
function createCartTracker() {
    let total = 0;
    return function(amount) {
        total += amount;
        return `Total Cart Value: $${total}`;
    };
}

let cart = createCartTracker();
console.log(cart(20)); 
console.log(cart(35)); 
// Task 8: Recursion in JavaScript - Savings Growth Projection
function calculateSavings(years, amount) {
    if (years === 0) return amount;
    return calculateSavings(years - 1, amount * 1.05);
}

console.log(`Projected Savings: $${calculateSavings(8, 1000).toFixed(2)}`);

console.log(`Projected Savings: $${calculateSavings(5, 5000).toFixed(2)}`);
