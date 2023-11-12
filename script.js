document.addEventListener("DOMContentLoaded", function () {
  // Replace with your API endpoint and API key
  const apiUrl =
    "https://v6.exchangerate-api.com/v6/d73e148bd45c1e9d012fc3a8/pair/USD/EGP";

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      const exchangeRateValue = data.conversion_rate;
      const usdToEgp = `1 USD = ${exchangeRateValue} EGP`;
      const egpToUsd = `1 EGP = ${(1 / exchangeRateValue).toFixed(2)} USD`;

      // Get the element to display the exchange rates
      const exchangeRateElement = document.getElementById(
        "exchange-rate-value"
      );
      let loading = document.getElementById("Loading");
      // Create separate paragraph elements for each exchange rate
      const usdToEgpElement = document.createElement("p");
      usdToEgpElement.textContent = usdToEgp;

      const egpToUsdElement = document.createElement("p");
      egpToUsdElement.textContent = egpToUsd;
      if (usdToEgpElement && egpToUsdElement) {
        loading.style.display = "none";
      }
      // Append the paragraph elements to the container
      exchangeRateElement.appendChild(usdToEgpElement);
      exchangeRateElement.appendChild(egpToUsdElement);
    })
    .catch((error) => {
      console.error("Error fetching data: " + error);
      document.getElementById("exchange-rate-value").textContent =
        "لا يمكن العثور على البيانات";
    });
});
