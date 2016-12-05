var imageArray = [
"http://www.planwallpaper.com/static/images/MerryChristmasCard2012.png", "http://hdwallpapershdpics.com/wp-content/uploads/2016/11/christmastree_nw.png", 
"https://www.fraserinstitute.org/sites/default/files/field/image/gifts.jpg",      "http://pathtoyourhealth.com/wp-content/uploads/2015/12/christmas-food-wallpapers-1920x1200.jpg", "https://mummyandthecuties.files.wordpress.com/2013/12/poundland-picture-1.png",
];
var currentIndex = 0;

function renderImage(){
	if (currentIndex < 0) {
		currentIndex = imageArray.length - 1;
	} else if (currentIndex >= imageArray.length) {
		currentIndex = 0;
	}

$('#thePhoto').attr('src', imageArray[currentIndex]);
}
renderImage();

function forwardImage(){
	currentIndex++;
	renderImage();
}

function backImage(){
	currentIndex--;
	renderImage();
}

$('#forwardBtn').on('click', forwardImage);
$('#backBtn').on('click', backImage);


var name = prompt("What's your name?");
var outputString = "Merry Christmas Mate " + name + "!";
$('h1').html(outputString);

google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);
function drawChart() {

var data = google.visualization.arrayToDataTable([
  ['Dog Breed', 'How Much I Want One'],
  ['Gifts',     11],
  ['Other',      1],
  ['Chritmas trees',  6],
  ['Decorations', 4],
  ['Food',    3]
]);
//calculate 50% of page width
var chartWidth = $('body').width()*0.5;

var options = {
  title: 'Money Spending in Christmas',
  backgroundColor: '#DCDDD8',
  width: chartWidth,
  colors: ['green', 'red', 'white']
};

var chart = new google.visualization.PieChart(document.getElementById('piechart'));

chart.draw(data, options);
}

