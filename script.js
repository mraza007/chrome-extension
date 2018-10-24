// var iterator = 0;
// var color_array = [
//   "#f44336",
//   "#e91e63",
//   "#9c27b0",
//   "#673ab7",
//   "#3f51b5"
// ]
// var background = document.getElementById("bg");


// var changeBg = function() {
//   iterator += 1;
//   if (iterator > color_array.length - 1) {
//     iterator = 0;
//   }
//   background.style.backgroundColor = color_array[iterator];
// }

// setInterval(changeBg, 1500);


// A Simple word Generator
// var iterator = 0;
// var color_array = [
//   "Hello",
//   "How",
//   "Are",
//   "You",
// ]

var iterator = 0;
color_array = [
"“The way get started is to quit talking and begin doing.” – Walt Disney",
"“The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty.” – Winston Churchill",
"“Don’t let yesterday take up too much of today.” – Will Rogers",
"“You learn more from failure than from success. Don’t let it stop you. Failure builds character.” – Unknown",
"“It’s not whether you get knocked down, it’s whether you get up.” – Vince Lombardi",
"“If you are working on something that you really care about, you don’t have 'to be pushed. The vision pulls you.” – Steve Jobs",
"“Entrepreneurs are great at dealing with uncertainty and also very good at minimizing risk. That’s the classic entrepreneur.” – Mohnish Pabrai",
"“Knowing is not enough; we must apply. Wishing is not enough; we must do.” – Johann Wolfgang Von Goethe",

]
var background = document.getElementById("h");

var changeBg = function() {
  iterator += 1;
  if (iterator > color_array.length - 1) {
    iterator = 0;
  }
  background.innerHTML = color_array[iterator];
}

setInterval(changeBg, 2000);

