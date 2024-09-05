document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('ccnumber').addEventListener('input', formatCardNumber);
    document.getElementById('cccvc').addEventListener('input', formatCvcNumber);
    document.getElementById("pay").addEventListener("click", function () {
        handleButtonClick();
    });
});

function formatCardNumber(event) {
    let input = event.target;
    let value = input.value.replace(/\D/g, '');
    let formattedValue = value.replace(/(\d{4})(?=\d)/g, '$1 ');
    input.value = formattedValue;
}

function formatCvcNumber(event) {
    let input = event.target;
    input.value = input.value.replace(/\D/g, '');

}

function handleButtonClick() {

    var cardNumber = document.getElementById("ccnumber").value

    switch (cardNumber) {
        case "1017 2208 2604 2504":
            document.getElementById("pay").href = "https://shattereddisk.github.io/rickroll/rickroll.mp4";
            break;
        case "1105 2611 1010 1709":
            document.getElementById("pay").href = "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExOGxkenl3NmFnZGtubWt0MHd2cHgxYXAxemQ5OWJiNmd5eHZhZDN6NiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9diZjYz1lbg/D5Bw8jVYG7gFl49lI1/giphy480p.mp4"

    }

}