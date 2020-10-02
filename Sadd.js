
    var dataG;




    function addUserToTable(){
    
    
    if(localStorage.getItem('students')){
        dataG=JSON.parse(localStorage.getItem('students'));
    }
    else{
        dataG=[]
    }
    
     //dataG = localStorage.getItem('row') ? JSON.parse(localStorage.getItem('row')) : [];
    
    dataG[0]=0;
    
           
            
    
    
        let firstName= document.getElementById('first_name').value;   
        let lastName= document.getElementById('last_name').value;
        

        

        let dOB=document.getElementById('dOB').value;

        let cost=document.getElementById('cost').value;
        
        let letters = /^[A-Za-z]+$/;

    let now=new Date();
    let tem=new Date(dOB)


    let i;
    let a=1;
    let b=2;
    let c=3;

    let d=4;
    
    let cLend=dataG.length;
    let trueLen=cLend-1;

    let len=(trueLen)/4;

   
    for (i = 1; i <= len; i++) {
       

    let firstNameTemp=dataG[a]  
    let lastNameTepm=dataG[b]
    let dOBTepm= dataG[c]

    

    if(firstNameTemp==firstName  && lastNameTepm==lastName && dOBTepm==dOB ){
    alert("double entry!!");
    return ;
    }

        a=a+4;
        b=b+4;
        c=c+4;
        

    }

        if(tem>now){
            dOB="";
            alert("you can't set date of birth this year or after!!!");

        }
        else if(!firstName.match(letters) || !lastName.match(letters) ){
            alert("only A-Z ,a-z");
        }

        else if(cost<0 || cost>100000){
            alert("not allowed negative cost or cost>100000!!!");

        }
        else if(cost==""){
            alert("you should fill cost correct!!");
        }
       else if(!firstName || !lastName || dOB==="" )  {
            alert('You must fill all the elements!!!');
        }
        else{
        let table = document.getElementById('table').getElementsByTagName('tbody')[0];
    
        let newRow = table.insertRow();
    
        let firstNameCell = newRow.insertCell(0);
        let lastNameCell = newRow.insertCell(1);
        
        let dOBDCell =newRow.insertCell(2);
        let costCell =newRow.insertCell(3);
    
        let firstNameNode = document.createTextNode(firstName);
        let lastNameNode = document.createTextNode(lastName);

        let dOBNode =document.createTextNode(dOB);
        let costNode =document.createTextNode(cost);
    
        firstNameCell.append(firstNameNode);
        lastNameCell.append(lastNameNode);

        dOBDCell.append(dOBNode);

        costCell.append(costNode);
        
    
    
           
        
            dataG.push(firstName);
            dataG.push(lastName);

            dataG.push(dOB);

            dataG.push(cost);
            
    
            localStorage.setItem('students',JSON.stringify(dataG));
             
            
    
           
        }
        
    }
    
    
    function tableAdd(){
        
        let data;
        if(localStorage.getItem('students')){
            data=JSON.parse(localStorage.getItem('students'));
        }
        else{
            data=[]
        }
        data[0]=0;
    
        let i;
        let a=1;
        let b=2;
        let c=3;

        let d=4;
        
        let cLend=data.length;
        let trueLen=cLend-1;

        let len=(trueLen)/4;
    
       
        for (i = 1; i <= len; i++) {
           
    
        let firstName=data[a]  
        let lastName=data[b]
        let dOB= data[c]
    
        let cost= data[d]
        

        let table = document.getElementById('table').getElementsByTagName('tbody')[0];
    
        let newRow = table.insertRow();
    
        let firstNameCell = newRow.insertCell(0);
        let lastNameCell = newRow.insertCell(1);
        
        let dOBDCell =newRow.insertCell(2);
        let costCell =newRow.insertCell(3);
    
        let firstNameNode = document.createTextNode(firstName);
        let lastNameNode = document.createTextNode(lastName);

        let dOBNode =document.createTextNode(dOB);
        let costNode =document.createTextNode(cost);
    
        firstNameCell.append(firstNameNode);
        lastNameCell.append(lastNameNode);

        dOBDCell.append(dOBNode);

        costCell.append(costNode);
    
        a=a+4;
        b=b+4;
        c=c+4;
        d=d+4;
          
        }
    
    }
    
    function tableEdit(){
        
        
        let data=JSON.parse(localStorage.getItem('students'))
    
        let i;
        let a=1;
        let b=2;
        let c=3;

        let d=4;
        
        let cLend=data.length;
        let trueLen=cLend-1;

        let len=(trueLen)/4;
    
       
        for (i = 1; i <= len; i++) {
           
    
            let firstName=data[a]  
            let lastName=data[b]

            let dOB= data[c]
        
            let cost= data[d]
            
        
    
            let table = document.getElementById('table').getElementsByTagName('tbody')[0];
    
        let newRow = table.insertRow();
    
        let firstNameCell = newRow.insertCell(0);
        let lastNameCell = newRow.insertCell(1);
        
        let dOBDCell =newRow.insertCell(2);
        let costCell =newRow.insertCell(3);

        let deleteCell=newRow.insertCell(4);
    
        let firstNameNode = document.createTextNode(firstName);
        let lastNameNode = document.createTextNode(lastName);

        let dOBNode =document.createTextNode(dOB);
        let costNode =document.createTextNode(cost);


        let deleteNode=document.createElement('button')
        let editNode=document.createTextNode('Edit');   
    
    
        //let  eventNode=document.addEventListener("click",display(this));
    
       
        firstNameCell.append(firstNameNode);
        lastNameCell.append(lastNameNode);

        dOBDCell.append(dOBNode);

        costCell.append(costNode);
    
    
       
        deleteNode.appendChild(editNode);
        
    
        deleteCell.append(deleteNode);
    
        deleteNode.classList.add("btn")
        deleteNode.classList.add("btn-primary");
        deleteNode.setAttribute("onclick","display(this)")
      
    
    
        a=a+4;
        b=b+4;
        c=c+4;
        d=d+4;
          
    
        }
    
    }
    
    