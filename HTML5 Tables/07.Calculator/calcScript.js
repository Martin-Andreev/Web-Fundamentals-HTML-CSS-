function calc(input) {
    var display = document.getElementById('display').value;
    switch (input) {
        case "=":
            display = eval(display);
            break;
        case "clear":
            display = "";
            break;
        default:
            display += input;
            break;
    }

    document.getElementById('display').value = display;
}