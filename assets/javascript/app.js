var correctanswers = 0;
var incorrectanswers = 0;
var unanswered = 0;


// $(".div6").hide();
$(".div4").hide();
$(".div3").hide();
$(".div2").hide();
$(".div5").hide();
function start() {
  $(".div2").show();
  $(".div4").hide();
  $(".div3").show();
  $(".div0").hide();
  // $(".div6").show();
}

$("#start").on("click", start)

function submit() {
  $(".div4").show();
  $(".div3").hide();
  $(".div2").hide();
  $(".div5").show();
}


$("#submit").on("click", submit)



function reset() {
  $(".div4").hide();
  $(".div3").hide();
  $(".div2").hide();
  $(".div5").hide();
  $(".div0").show();

}

$("#reset").on("click", reset)


var total = 0;
var seconds = document.getElementById("seconds");
setInterval(setTime, 1000);

function setTime() {
  total++;
  seconds.innerHTML = (parseInt(total % 16));
}

