
    var dataG;




function addUserToTable(){


if(localStorage.getItem('row')){
    dataG=JSON.parse(localStorage.getItem('row'));
}
else{
    dataG=[]
}

 //dataG = localStorage.getItem('row') ? JSON.parse(localStorage.getItem('row')) : [];

dataG[0]=0;

       
        


    let fn= document.getElementById('first_name').value;   
    let ln= document.getElementById('last_name').value;
    let s= document.getElementById('sub').value;

    let letters = /^[A-Za-z]+$/;

  
    let i;
    let a=1;
    let b=2;
    let c=3;

    let dl=dataG.length-1;
    let len=((dl)/3);

    
    for (i = 1; i <= len; i++) {

        let fnTemp=dataG[a]  
        let lnTepm=dataG[b]
        let sTepm= dataG[c]

        if(fnTemp==fn && lnTepm==ln && sTepm==s){
            alert("double entry!!");
            return ;
        }

        a=a+3;
        b=b+3;
        c=c+3;

    }






    if(!fn || !ln || !s) {
        alert('You must fill all the fields!!!');
    }
    else if(!fn.match(letters) || !ln.match(letters) || !s.match(letters)){
        alert("only A-Z ,a-z");
    }
    else{
    let table = document.getElementById('table').getElementsByTagName('tbody')[0];

    let newRow = table.insertRow();

    let fnCell = newRow.insertCell(0);
    let lnCell = newRow.insertCell(1);
    let sCell =newRow.insertCell(2);

    let fnNode = document.createTextNode(fn);
    let lnNode = document.createTextNode(ln);
    let sNode =document.createTextNode(s);

    fnCell.append(fnNode);
    lnCell.append(lnNode);
    sCell.append(sNode);


       
    
        dataG.push(fn);
        dataG.push(ln);
        dataG.push(s);

        localStorage.setItem('row',JSON.stringify(dataG));
         
        

       
    }
    
}


function tableAdd(){
    
    if(localStorage.getItem('row')){
        data=JSON.parse(localStorage.getItem('row'));
    }
    else{
        data=[]
    }
    
     //dataG = localStorage.getItem('row') ? JSON.parse(localStorage.getItem('row')) : [];
 

    let i;
    let a=1;
    let b=2;
    let c=3;

    let len=(data.length)/3;
    for (i = 1; i < len; i++) {
       

    let fn=data[a]  
    let ln=data[b]
    let s= data[c]

    let table = document.getElementById('table').getElementsByTagName('tbody')[0];

    let newRow = table.insertRow();

    let fnCell = newRow.insertCell(0);
    let lnCell = newRow.insertCell(1);
    let sCell =newRow.insertCell(2);

    let fnNode = document.createTextNode(fn);
    let lnNode = document.createTextNode(ln);
    let sNode =document.createTextNode(s);

    fnCell.append(fnNode);
    lnCell.append(lnNode);
    sCell.append(sNode);


    a=a+3;
    b=b+3;
    c=c+3;

    }

}

function tableEdit(){
    
    
    let data=JSON.parse(localStorage.getItem('row'))
    data[0]=0;

    let i;
    let a=1;
    let b=2;
    let c=3;

    let len=(data.length)/3;
    for (i = 1; i < len; i++) {
       

    let fn=data[a]  
    let ln=data[b]
    let s= data[c]
    

    let table = document.getElementById('table').getElementsByTagName('tbody')[0];

    let newRow = table.insertRow();

    let fnCell = newRow.insertCell(0);
    let lnCell = newRow.insertCell(1);
    let sCell =newRow.insertCell(2);
    let deleteCell=newRow.insertCell(3);

    let fnNode = document.createTextNode(fn);
    let lnNode = document.createTextNode(ln);
    let sNode =document.createTextNode(s);
    let deleteNode=document.createElement('button')
    let editNode=document.createTextNode('Edit');   


    //let  eventNode=document.addEventListener("click",display(this));

    fnCell.append(fnNode);
    lnCell.append(lnNode);
    sCell.append(sNode);

   
    deleteNode.appendChild(editNode);
    

    deleteCell.append(deleteNode);

    deleteNode.classList.add("btn")
    deleteNode.classList.add("btn-primary");
    deleteNode.setAttribute("onclick","display(this)")
  


    a=a+3;
    b=b+3;
    c=c+3;

    }

}

