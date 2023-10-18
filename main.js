// alert("Hello World!!");
// toFixed(1)

//Copy paste section:
document.getElementById("button").addEventListener("click", buttonClicked);

function buttonClicked() {
  console.log("hi");
  //input
  let cost = +document.getElementById("grade1-in").value;
  let percent = +document.getElementById("grade2-in").value;
  let gst = +5;
  //process
  let GST = (cost / 100) * gst;
  let tip = ((cost + GST) / 100) * percent;
  let total = cost + (cost / 100) * GST + tip;

  //output
  document.getElementById("output1").innerHTML = tip.toFixed(2);
  document.getElementById("output2").innerHTML = GST.toFixed(2);
  document.getElementById("output3").innerHTML = total.toFixed(2);
}
