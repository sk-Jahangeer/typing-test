
// paragraphs to show on screen
var para1 = `A paragraph is a series of related sentences developing a central idea,
called the topic. Try to think about paragraphs in terms of thematic unity: a paragraph is a sentence or
a group of sentences that supports one central,
unified idea. Paragraphs add one idea at a time to your broader argument.
A paragraph is a self-contained unit of a discourse in writing dealing with a particular point or idea.
A paragraph consists of one or more sentences.
In word processing and desktop publishing, a hard return or paragraph break indicates a new paragraph, to be distinguished from the soft return at the end of a line internal to a paragraph. 
This distinction allows word wrap to automatically re-flow text as it is edited, without losing paragraph breaks. 
The software may apply vertical white space or indenting at paragraph breaks, depending on the selected style.
How such documents are actually stored depends on the file format. For example, HTML uses the tag as a paragraph container. In plaintext files, there are two common formats. Pre-formatted text will have a newline at the end of every physical line, and two newlines at the end of a paragraph, creating a blank line. 
An alternative is to only put newlines at the end of each paragraph, and leave word wrapping up to the application that displays or processes the text.`

var para2 = `Jobs was raised by adoptive parents in Cupertino, California, located in what is now known as Silicon Valley. 
Though he was interested in engineering, his passions of youth varied. He dropped out of Reed College, in Portland, Oregon, 
took a job at Atari Corporation as a video game designer in early 1974, and saved enough money for a pilgrimage to India to experience Buddhism.
Back in Silicon Valley in the autumn of 1974, Jobs reconnected with Stephen Wozniak, a former high school friend who was working for the Hewlett-Packard Company. 
When Wozniak told Jobs of his progress in designing his own computer logic board, Jobs suggested that they go into business together, which they did after Hewlett-Packard formally turned down Wozniak’s design in 1976. 
The Apple I, as they called the logic board, was built in the Jobses’ family garage with money they obtained by selling Jobs’s Volkswagen minibus and Wozniak’s programmable calculator.`

var para3 = `Born to a Canadian mother and South African father, Musk was born and raised in Pretoria, South Africa. He briefly attended the University of Pretoria before moving to Canada when he was 17 to attend Queen's University. 
He transferred to the University of Pennsylvania two years later, where he received a bachelor's degree in economics from the Wharton School and a bachelor's degree in physics from the College of Arts and Sciences. He moved to California in 1995 to begin a Ph.D. 
in applied physics and material sciences at Stanford University, but decided to pursue a business career instead of enrolling.[20] He subsequently co-founded (with his brother Kimbal) Zip2, a web software company, which was acquired by Compaq for $340 million in 1999. 
Musk then founded X.com, an online bank. It merged with Confinity in 2000, which had launched PayPal the previous year and was subsequently bought by eBay for $1.5 billion in October 2002.[10][21][22][23]

In May 2002, Musk founded SpaceX, an aerospace manufacturer and space transport services company, of which he is CEO and lead designer. He joined Tesla Motors, Inc. (now Tesla, Inc.), an electric vehicle manufacturer, in 2004, the year after it was founded,[10] and became its CEO and product architect. 
In 2006, he helped create SolarCity, a solar energy services company (now a subsidiary of Tesla). In 2015, Musk co-founded OpenAI, a nonprofit research company that aims to promote friendly artificial intelligence. In July 2016, he co-founded Neuralink, a neurotechnology company focused on developing brain–computer interfaces. 
In December 2016, Musk founded The Boring Company, an infrastructure and tunnel construction company focused on tunnels optimized for electric vehicles.`

var minute;
// time running colck
function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            display.textContent = "00:00";
            position = false
        }
    }, 1000);
}
// get input from user and set time
var num = document.getElementById('timer');
function findMin() {
    if (num.value == '1') {
        minute = 60 * 2
        return 60 * 2;
    }
    if (num.value == '2') {
        minute = 60 * 5
        return 60 * 5;
    }
}

// display time on screen
document.getElementById('timeset').addEventListener('click', function() {
    var time = findMin();
        display = document.querySelector('.time');
    startTimer(time, display);
    position = true
})

// position is true start timer
var position;

// show user typing instruction to user
var inputSignal = document.getElementById('input-text');
var enterMsg = document.getElementById('enter-msg');

inputSignal.addEventListener('keydown', function () {
    enterMsg.style.display = 'none';
});


// restart button function
var restart = document.getElementById('restart');
restart.addEventListener('click', function () {
    window.location.reload();
});



// paragrph change by clicking button . 
var input = []
var lelist = [], felist = [], selist = []
// change string paragraph to array
function stringToArray(para) {
    return para.trim().split(' ');
}

list = stringToArray(para1)
flit = stringToArray(para2)
slit = stringToArray(para3)
lelist = list.slice(0,75)
felist = flit.slice(0,75)
selist = slit.slice(0,75)


// type of input to get result 
var text = document.getElementById('test-text');

// get user input
text.addEventListener('click', function () {
    randomSelect()
})

function selectText() {
    if (text.value == '1') {
        return 'para1'
    }
    if (text.value == '2') {
        return 'para2'
    }
    if (text.value == '3') {
        return 'para3'
    }
}

// show on screen for particular para for click
var setPara = document.getElementById('para')

// defult pragraph on screen
window.onload = setPara.innerHTML = lelist.join(" ")

function randomSelect() {
    var some = selectText()
    if (some == 'para1') {
        sum = lelist
        setPara.innerHTML = lelist.join(" ")
    }
    if (some == 'para2') {
        sum = felist
        setPara.innerHTML = felist.join(" ")
    }
    if (some == 'para3') {
        sum = selist
        setPara.innerHTML = selist.join(" ")
    }
}


function changePara() {
    if (current == 1) {
        lelist = list.slice(75,150)
        felist = flit.slice(75,150)
        selist = slit.slice(75,150)
    }
    if (current == 2) {
        lelist = list.slice(150,225)
        felist = flit.slice(150,225) 
        selist = slit.slice(150,225)
    }
}

function getText() {
    var text = document.getElementById("input-text").value;
    makeString = text
    Filter = stringToArray(makeString)
    input = Filter.filter(v=>v!='')
}

function keyspressed() {
    var e = window.event;
    if (e.keyCode == 32) {
        getText()
        autoShow()
        if(position == false){
            finalPoint()
        }
    }
}


// automatic show next paragraph
var current = 0
function autoShow() {
    if (input.length == 75) {
        current++;
        changePara();
        randomSelect();
    }
    if (input.length == 150) {
        current++;
        changePara();
        randomSelect();
    }
    if (input.length == 225) {
        current++;
        changePara();
        randomSelect();
    }   
}

function currentPara() {
    var x = selectText()
    if (x == 'para1'){
        return lelist
    }
    if (x == 'para2'){
        return felist
    }
    if (x == 'para3'){
        return selist
    }
}

var sum = currentPara();
var perfect = [];

function resultFun(num) {
    for (i=0; i < input.length; i++) {
        if (input[i] == num[i]) {
            perfect.push(input[i])
        }
    }
}

var word, net, accuracy,totalCurrect, totalTyped

function finalResult(){

    totalCurrect = perfect.length
    totalTyped = input.length

    //finding gross speed
    word = Math.round((totalTyped/minute)* 60);

    accuracy = Math.round((totalCurrect/totalTyped)*100)
}
var words = document.getElementById('Gross');
var Accuracy = document.getElementById('Accuracy');

function finalPoint(){
    if (position == false){
        resultFun(sum)
        finalResult()
        if (input.length == 0){
            accuracy = 0
        }

        resultScreen.style.display = 'block'
        words.innerHTML = word;
        Accuracy.innerHTML = accuracy;
        setPara.style.display = 'none'
        inputSignal.style.display = 'none'
    }
}

resultScreen = document.getElementById('result-screen')
// result btn
result = document.getElementById('result')
result.addEventListener('click', function () {
    if (position == false){
        finalPoint()
    }
})
