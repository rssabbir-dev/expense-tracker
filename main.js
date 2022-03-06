const itemName = document.getElementById("item-name");
const itemDate = document.getElementById("item-date");
const itemAmount = document.getElementById("item-amount");
const addItemBtn = document.getElementById("add-item-btn");

const tableBody = document.getElementById("table-body");

addItemBtn.addEventListener("click", () => {
  const tableData = [itemName.value, itemDate.value, itemAmount.value];
  const tr = document.createElement("tr");
  if (tableData[0].length < 1 || tableData[1].length < 1 || tableData[1].length < 1) {
    console.log("object");
  } else {
    for (let i = 0; i < tableData.length; i++) {
      const element = tableData[i];
      const td = document.createElement("td");
      td.innerText = element;
      tr.appendChild(td);
      tableBody.appendChild(tr);
      document.getElementById("table-caption").style.display = "none";
    }
    itemName.value = "";
    itemAmount.value = "";
  }
});

itemDate.value = new Date().toISOString().substring(0, 10);