// colors classes to put in background dynamically
var colors = ['gridColor1', 'gridColor2', 'gridColor3', 'gridColor2', 'gridColor3', 'gridColor1', 'gridColor1', 'gridColor2', 'gridColor3'];
// Number array to shoe sorted as well as shuffled
var num = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    // Selecting the blocks childrens
var blocks = document.getElementById("blockContainer").children

// Function to sort
SortedList = () => {
    for (var i = 0; i < blocks.length; i++) {
        blocks[i].innerHTML = `<h1>${i+1}</h1>`
        blocks[i].classList.add(colors[i])
    }
}

// Function to shuffle
ShuffuledList = () => {
    num.sort(function(a, b) { return 0.5 - Math.random() })
    for (var i = 0; i < blocks.length; i++) {
        blocks[i].innerHTML = `<h1>${num[i]}</h1>`
        blocks[i].classList.add(colors[i])
    }
}