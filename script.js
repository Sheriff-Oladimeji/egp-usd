document.addEventListener("DOMContentLoaded", function () {
  const usdAmountInput = document.getElementById("usdAmount");
  const egpAmountInput = document.getElementById("egpAmount");

  function updateExchangeRate(usdAmount) {
    const apiKey = "d73e148bd45c1e9d012fc3a8"; // Replace with your actual API key
    const apiUrl = `https://v6.exchangerate-api.com/v6/${apiKey}/pair/USD/EGP/${usdAmount}`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        if (data.result === "success") {
          const exchangeRateValue = data.conversion_rate;
          const egpAmount = (usdAmount * exchangeRateValue).toFixed(2);

          egpAmountInput.value = egpAmount;
        } else {
          console.error("Error in API response:", data["error-type"]);
        }
      })
      .catch((error) => {
        console.error("Error fetching data: " + error);
      });
  }

  usdAmountInput.addEventListener("input", function () {
    const usdAmount = parseFloat(usdAmountInput.value) || 0;
    updateExchangeRate(usdAmount);
  });

  egpAmountInput.addEventListener("input", function () {
    const egpAmount = parseFloat(egpAmountInput.value) || 0;
    

    const usdAmount = (egpAmount / exchangeRateValue).toFixed(2);
    usdAmountInput.value = usdAmount;
  });

  // Initial load
  updateExchangeRate(1); // Default USD amount
});
