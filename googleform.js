function fun1(){
    var a=document.getElementById('name').value
    var b=document.getElementById('number').value
  
    var d=document.getElementById('10per').value
    var e=document.getElementById('12per').value
    var f=document.getElementById('gradper').value
    
    
  
    if(a==""){
        document.getElementById('span1').style.color='red'
        document.getElementById('span1').innerHTML='*this field should not be empty'
    }
    else{
        document.write(a);
    }
    
    if(b==""){
        document.getElementById('span2').style.color='red'
        document.getElementById('span2').innerHTML='*this field should not be empty'
    }
    else{
        document.write(b);
    }
    
    if(d==""){
        document.getElementById('span8').style.color='red'
        document.getElementById('span8').innerHTML='*this field should not be empty'
    }
    else{
        document.write(d);
    }
    if(e==""){
        document.getElementById('span9').style.color='red'
        document.getElementById('span9').innerHTML='*this field should not be empty'
    }
    else{
        document.write(e);
    }
    if(f==""){
        document.getElementById('span10').style.color='red'
        document.getElementById('span10').innerHTML='*this field should not be empty'
    }
    else{
        document.write(f);
    }
    
    
    
}

