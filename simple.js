function display(){
    var input = document.getElementById('input')
   
    if(input.value == ""){
        document.getElementById('error').innerHTML="Please Enter Your Task"
        document.getElementById('input').style.borderColor="red"
        document.getElementById('error').style.color="red"
    }
    else{
        var li = document.createElement('li')  //to create list items 
        li.textContent = input.value //list item content is input.value that means the value you entered is stored in li 
        list.appendChild(li,list) //li value added to ul
    }  
}