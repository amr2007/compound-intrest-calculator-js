// COMPOUND INTEREST CALCULATOR
function calculate() {

    // Get references to HTML elements
    const totalAmount = document.getElementById("total-amount");
    const principalInput = document.getElementById("principal");
    const intrestRateInput = document.getElementById("rate");
    const inputYears = document.getElementById("years");
    const nInput = document.getElementById("n");

    // Read and convert user input values to numbers
    let principal = Number(principalInput.value);                 // Principal amount
    let rate = Number(intrestRateInput.value / 100);             // Convert % to decimal (8 → 0.08)
    let years = Number(inputYears.value);                         // Time in years
    let n = Number(nInput.value);                                 // Compounding frequency per year

    // Input validation and correction

    // Principal should not be negative or NaN
    if (principal < 0 || isNaN(principal)) {
        principal = 0;
        principalInput.value = 0;
    }

    // Interest rate should not be negative or NaN
    if (rate < 0 || isNaN(rate)) {
        rate = 0;
        intrestRateInput.value = 0;
    }

    // Years should not be negative or NaN
    if (years < 0 || isNaN(years)) {
        years = 0;
        inputYears.value = 0;
    }

    // n (compounding frequency) must be at least 1 and not NaN
    if (n <= 0 || isNaN(n)) {
        n = 1;
        nInput.value = 1;
    }

    // Compound interest formula:
    // A = P × (1 + r / n)^(n × t)
    const result = principal * Math.pow((1 + rate / n), n * years);

    // Display the formatted result in INR currency
    totalAmount.textContent = result.toLocaleString(undefined, {
        style: "currency",
        currency: "USD"
    });
}
