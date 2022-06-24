let num;
let outputList = document.querySelector(".output");

document.getElementById("button").onclick = function() {
  num = Number(document.getElementById("number").value);
  document.getElementById("output").innerText = "";
    for (let i = 1; i <= 12; i++) {
      let outputData = document.createElement('div');
      outputData.innerText = `${num} * ${i} = ${num * i}`;
      outputList.appendChild(outputData);
    }
}