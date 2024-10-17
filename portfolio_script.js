function darkMode() {
    document.body.style.backgroundColor = "rgb(40, 42, 54)";
    document.body.style.color = "white";
}

function lightMode() {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
}

function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskValue = taskInput.value.trim();
    let alert = document.getElementById("alert");

    if (taskValue === "") {
        alert.classList.remove("d-none");
    } else {
        alert.classList.add("d-none");

        let taskList = document.getElementById("taskList");
        let li = document.createElement("li");
        li.className =
            "list-group-item d-flex justify-content-between align-items-center";

        li.innerHTML = `
        <span class="task-text">${taskValue}</span>
        <div>
          <button class="btn btn-success btn-sm me-2" onclick="markComplete(this)">Complete</button>
          <button class="btn btn-danger btn-sm" onclick="deleteTask(this)">Delete</button>
        </div>
      `;

        taskList.appendChild(li);

        taskInput.value = "";
    }
}

function markComplete(button) {
    let taskText = button.parentElement.previousElementSibling;
    taskText.classList.toggle("text-success");
}

function deleteTask(button) {
    let taskItem = button.parentElement.parentElement;
    taskItem.remove();
}

function sortNumbers() {
    let input = document.getElementById("numberInput").value.trim();

    if (!input || !/^(\d+ \s*)*\d+$/.test(input)) {
        alert("Please enter a valid series of numbers.");
        return;
    }

    let numbers = input.split(" ").map((num) => parseFloat(num.trim()));

    let sortOrder = document.querySelector(
        'input[name="sortOrder"]:checked'
    ).value;

    if (sortOrder === "asc") {
        numbers.sort((a, b) => a - b);
    } else {
        numbers.sort((a, b) => b - a);
    }

    document.getElementById("sortedResult").innerText = numbers.join(", ");
}

function calculate(operation) {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);

    if (isNaN(num1) || isNaN(num2)) {
        alert("Please enter valid numbers in both fields");
        return;
    }

    let result;

    switch (operation) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            result = num1 / num2;
            break;
        case "%":
            result = num1 % num2;
            break;
        case "**":
            result = num1 ** num2;
            break;
        default:
            alert("Invalid operation");
            return;
    }

    document.getElementById("result").textContent = result;
}

function calculateTax() {
    let carPrice = document.getElementById("carPrice").value;

    if (isNaN(carPrice) || carPrice <= 0) {
        alert("Please enter a valid car price.");
        return;
    }

    let tax;

    if (carPrice > 10000) {
        tax = carPrice * 0.25;
    } else if (carPrice >= 5000 && carPrice <= 10000) {
        tax = carPrice * 0.2;
    } else {
        tax = carPrice * 0.15;
    }

    document.getElementById("taxResult").innerText = tax.toFixed(2);
}
