function showTransactions() {
    const transactions = document.querySelector(".transactions");
    const records = document.querySelector(".records");

    transactions.classList.remove("hide");
    transactions.classList.add("show");
    records.classList.remove("show");
    records.classList.add("hide");
}

function showRecords() {
    const transactions = document.querySelector(".transactions");
    const records = document.querySelector(".records");

    records.classList.remove("hide");
    records.classList.add("show");
    transactions.classList.remove("show");
    transactions.classList.add("hide");
}

let walletValue = 0.00;
let receiveValue = 0.00;
let spendValue = 0.00;

function walletReceive(){
    const inputValue = parseFloat(document.querySelector(".inputValue").value);
    const inputDescription = document.querySelector(".inputDescription").value;
    const walletTotal = document.querySelector(".totalValue");
    const receiveTotal = document.querySelector('.totalReceived h1');
    const recordsList = document.querySelector(".recordsList");

    if (!isNaN(inputValue)){

        walletValue += inputValue;
        receiveValue += inputValue;

        walletTotal.innerHTML = "R$ " + walletValue.toFixed(2);
        receiveTotal.innerHTML = "R$ " + receiveValue.toFixed(2);

        var newRecord = document.createElement("li");

        newRecord.innerHTML = `
                    <i class="fa-solid fa-arrow-up fa-2xl" style="color: green;"></i>
                    <p>R$ ${inputValue.toFixed(2)}</p>
                    <p>${inputDescription}</p>
                    <i class="fa-solid fa-trash-can fa-2xl" style="color: #ffffff;"onclick="deleteItem(this)"></i>
                 `;
            
        recordsList.appendChild(newRecord);
    }
}

function walletSpend(){
    const inputValue = parseFloat(document.querySelector(".inputValue").value);
    const inputDescription = document.querySelector(".inputDescription").value;
    const walletTotal = document.querySelector(".totalValue");
    const spendTotal = document.querySelector('.totalSpend h1');
    const recordsList = document.querySelector(".recordsList");

    if (!isNaN(inputValue)){

        walletValue -= inputValue;
        spendValue += inputValue;

        walletTotal.innerHTML = "R$ " + walletValue.toFixed(2);
        spendTotal.innerHTML = "R$ " + spendValue.toFixed(2);

        var newRecord = document.createElement("li");

        newRecord.innerHTML = `
                    <i class="fa-solid fa-arrow-down fa-2xl" style="color: red;"></i>
                    <p>R$ ${inputValue.toFixed(2)}</p>
                    <p>${inputDescription}</p>
                    <i class="fa-solid fa-trash-can fa-2xl" style="color: #ffffff;"onclick="deleteItem(this)"></i>
                `;
            
        recordsList.appendChild(newRecord);
    }
}

function deleteItem(element) {
    var item = element.closest('li');
    item.remove();
}
