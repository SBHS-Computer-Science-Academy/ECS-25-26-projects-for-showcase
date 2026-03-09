// Each name should be in the format "Stu1, Stu2, and Stu3" with an optional URL
var names = [
    ["Alejandro", "https://codehs.com/sandbox/id/alejandro-artwork-7NrRg0"],
    ["Angel Del Carmen", "https://codehs.com/share/id/greeting-card-JY168g/run"],
    ["Angel,Daniel", "https://codehs.com/sandbox/purplesheep4677/program"],
    ["Atticus,Sebastian", "https://codehs.com/sandbox/scarletheron6204/new-sandbox-program?collaborate=-ObTUDxnih_oa8hily0J"],
    ["Christopher,Steven", "https://codehs.com/sandbox/id/new-sandbox-program-4Lr5lc?collaborate=-ObTPD_PU1QwXaXDvHHT&filepath=Style.css"],
    ["Daniel,Angel", "https://codehs.com/sandbox/purplesheep4677/corporate-mockery?collaborate=-OZAGDx62UNJYSuqhTTO"],
    ["Daveed,Charlie,Manny", "https://codehs.com/sandbox/purplebat7192/new-sandbox-program-1?collaborate=-Og8FMTks4JkLCX2jNIh"],
    ["Deacon", "https://codehs.com/sandbox/maroontrout4593/new-sandbox-program-1/run"],
    ["Kitty", "https://codehs.com/sandbox/dicoslover/chatbot"],
    ["Lillian", "https://codehs.com/sandbox/pinkeel7852/lillian-community-artwork/run"],
    ["Logan,Jesus", "https://codehs.com/sandbox/pinkchinchilla9120/html?collaborate=-ObTPYk9anMKF-OuwYDU"],
    ["Mar", "https://codehs.com/share/id/greeting-card-KAl52u/run"],
    ["Noe,Ceci,Lillian", "https://codehs.com/sandbox/pinkfish2684/three-worlds?collaborate=-OgJW-EtPXezE4Z6YdF9&filepath=script.js"],
    ["Sebastian, Christopher", "https://codehs.com/sandbox/graywombat5843/pong?collaborate=-Og8HWRVDeAjIE6qFsJ-&filepath=paddle.js"],
    ["Sia,Alex", "https://codehs.com/sandbox/id/basic-chatbot-LzLT8S/run"],
    ["Spotify", "https://codehs.com/sandbox/id/new-sandbox-program-wKddPS/run"],
    ["Valerie,Nathan,Kitty", "https://codehs.com/sandbox/violetgull7401/whack-a-beaver-1/run"],
];

var gridWidth = 4;
var gridHtml = "";
var idx = 0;

makeGrid();

function generateCard(names, imageName, altText, url)
{
    return '<div class="card text-center"> <div class="card-body"> <h5 class="card-title">'
    + names
    + '</h5> <p class="card-text"> <a href="'
    + url
    + '" target="_blank" rel="noopener noreferrer"> <img src="images/'
    + imageName
    + '" alt="'
    + altText
    + '" class="screenshots"> </a> </p> </div> </div>';
}

function makeCard() {
    if (idx >= names.length) return;
    var name = names[idx];
    var fileUrl = "";
    if (name.constructor === Array) {
    	name = names[idx][0];
    	fileUrl = names[idx][1];
    }
    var file = name.replaceAll(" ","").replaceAll(",","")
    var imageName = file + ".png"
    
    if (fileUrl != "") file = fileUrl;
    var card = generateCard(name, imageName, name, file);
    gridHtml += card; //not elegant, but it works
    
    idx++;
}


function makeGrid() {
    
    for (var i = 0; i < names.length; i++) {
        if (i % gridWidth == 0) {
            gridHtml += '<div class="row">';
        }
        gridHtml += '<div class="col-md-3 p-3">';
        makeCard();
        gridHtml += '</div>';
        if (i % gridWidth == (gridWidth - 1)) {
            gridHtml += '</div>';
        }
    }
    
    if (names.length % gridWidth != 0) {
        gridHtml += '</div>';
    }
    
    document.getElementById("grid").innerHTML += gridHtml;
    
}
