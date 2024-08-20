function bclick(val){
    document.getElementById("screen").value+=val
}
function DisplayClear(){
    document.getElementById("screen").value=""
}

function EqualClick(){
  var text=document.getElementById("screen").value
    var Result=eval(text)
    document.getElementById("screen").value=Result
}