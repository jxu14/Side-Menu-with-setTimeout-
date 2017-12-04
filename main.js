$(document).ready(function(){
  let btn = $('button');
  let content = $('#openbar');

  let a = $("#countdown");
  let first = $('#first');
  let second = $('#second');


  btn.append(content);
  // btn.addEventListener("click", function() {
  //   content.classList.toggle("show");
  // })

  btn.on("mouseover", function() {
    // content.classList.toggle("show");
    // content.style.width = "250px";
    content.width("250px");
  })

  btn.on("mouseout", function() {
    // content.classList.remove("show");
    // console.log(content.classList);
    // content.style.width = "0";
    content.width("0");
  })

  first.on("mouseover", function() {
  	let num = 999;
  	for(let i = 0; i < num ; i++) {
  	  setTimeout(function(){a.html(num - i)}, i*1000)
  	}
  })

})