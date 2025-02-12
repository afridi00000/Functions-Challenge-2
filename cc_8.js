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