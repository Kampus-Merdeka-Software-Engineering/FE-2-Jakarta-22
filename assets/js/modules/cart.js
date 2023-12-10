
fetch("http://localhost:5000/menu", {
  header: {
    "Content-Type": "application/json",
  },
  method: 'GET'
})
.then((response) => response.json())
.then((response) => {
  console.log(response);
    const containerUI = document.getElementById("cart");
  response.forEach((table) => {
    containerUI.innerHTML += `
    <td>${table.name}</td>
    <td>$${table.price.toFixed(2)}</td>
    <td>$${table.tax.toFixed(2)}</td>
    <td>$${table.totalPriceAfterTax.toFixed(2)}</td>
    `;
  });
})
.catch((err) => {
  console.log(err);
})
setChartData();

