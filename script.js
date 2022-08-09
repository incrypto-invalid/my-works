function oper(val){
    document.getElementById("DisplayButton").value+=val
}
function equalclick(){
    var val=document.getElementById("DisplayButton").value
   
    var result1=eval(val)
    document.getElementById("DisplayButton").value=result1
}
function clearscrn(){
    document.getElementById("DisplayButton").value=""
   
}