function inputTest() {
    var inputText = document.getElementById("inputText").value;
    var showText = document.getElementById("textDisplay");
    var reverseText = reverseString(inputText);
    showText.innerText = reverseText;
}

function reverseString(str) {
    var splitString = str.split('');
    var reverseArray = splitString.reverse();
    var joinArray = reverseArray.join('');
    return joinArray;
}
