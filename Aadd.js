
    var dataG;




    function addUserToTable(){
    
    
    if(localStorage.getItem('assignments')){
        dataG=JSON.parse(localStorage.getItem('assignments'));
    }
    else{
        dataG=[]
    }
    
     //dataG = localStorage.getItem('row') ? JSON.parse(localStorage.getItem('row')) : [];
    
    dataG[0]=0;
    
           
            
    
    
        let title= document.getElementById('title').value;   
        let description= document.getElementById('description').value;
        

        

        let subDate=document.getElementById('subDate').value;

        let oralMark=document.getElementById('oralMark').value;
        let totalMark=document.getElementById('totalMark').value;
        
        

        let i;
        let a=1;
        let b=2;
        let c=3;
    
        let d=4;
        let e=5;
        
        let cLend1=dataG.length;
        let trueLen1=cLend1-1;
    
        let len1=(trueLen1)/5;
    
       
        for (i = 1; i <= len1; i++) {
           
    
        let titleIn=dataG[a]  
        let descriptionIn=dataG[b]
        let subIn= dataG[c]
        
    
        
    
        if(title==titleIn  && description==descriptionIn && subDate==subIn ){
        alert("double entry!!");
        return ;
        }
    
            a=a+5;
            b=b+5;
            c=c+5;
            d=d+5;
            e=d+5;

            
    
        }


    
         if(!title || !description || subDate==="" ){
           

            alert('You must fill all the elements!!!');

        }
    
       else if(oralMark<0 || totalMark<=0 || oralMark>1001 || totalMark>1001)  {
        alert("not allowed negative oral Mark or total Mark <=0 or oral Mark, total Mark >=1000 you should fill it!!!");
        }
        else{
        let table = document.getElementById('table').getElementsByTagName('tbody')[0];
    
        let newRow = table.insertRow();
    
        let titleCell = newRow.insertCell(0);
        let desCell = newRow.insertCell(1);
        
        let subDateDCell =newRow.insertCell(2);
        let oralCell =newRow.insertCell(3);
        let totalCell =newRow.insertCell(4);
    
        let titleNode = document.createTextNode(title);
        let desNode = document.createTextNode(description);

        let suDateNode =document.createTextNode(subDate);
        let oralNode =document.createTextNode(oralMark);
        let totalNode =document.createTextNode(totalMark);
    
        titleCell.append(titleNode);
        desCell.append(desNode);

        subDateDCell.append(suDateNode);

        oralCell.append(oralNode);
        totalCell.append(totalNode);
    
    
           
        
            dataG.push(title);
            dataG.push(description);

            dataG.push(subDate);

            dataG.push(oralMark);
            dataG.push(totalMark);
            
    
            localStorage.setItem('assignments',JSON.stringify(dataG));
             
            
    
           
        }
        
    }
    
    
    function tableAdd(){
        
        
        let data=JSON.parse(localStorage.getItem('assignments'))
    
        let i;
        let a=1;
        let b=2;
        let c=3;

        let d=4;
        let e=5

        let cLend=data.length;
        let trueLen=cLend-1;

        let len=(trueLen)/5;
    
       
        for (i = 1; i <= len; i++) {
           
    
        let title=data[a]  
        let description=data[b]
        let subDate= data[c]
    
        let oralMark= data[d]
        let totalMark= data[e]
        

        let table = document.getElementById('table').getElementsByTagName('tbody')[0];
    
        let newRow = table.insertRow();
    
        let titleCell = newRow.insertCell(0);
        let desCell = newRow.insertCell(1);
        
        let subDateDCell =newRow.insertCell(2);
        let oralCell =newRow.insertCell(3);
        let totalCell =newRow.insertCell(4);
    
        let titleNode = document.createTextNode(title);
        let desNode = document.createTextNode(description);

        let suDateNode =document.createTextNode(subDate);
        let oralNode =document.createTextNode(oralMark);
        let totalNode =document.createTextNode(totalMark);
    
        titleCell.append(titleNode);
        desCell.append(desNode);

        subDateDCell.append(suDateNode);

        oralCell.append(oralNode);
        totalCell.append(totalNode);
    
        a=a+5;
        b=b+5;
        c=c+5;
        d=d+5;
        e=e+5;
          
        }
    
    }
    
    function tableEdit(){
        
        
        let data=JSON.parse(localStorage.getItem('assignments'))
    
        let i;
        let a=1;
        let b=2;
        let c=3;

        let d=4;
        let e=5;
        
        let cLend=data.length;
        let trueLen=cLend-1;

        let len=(trueLen)/5;
    
       
        for (i = 1; i <= len; i++) {
           
    
            
        let title=data[a]  
        let description=data[b]
        let subDate= data[c]
    
        let oralMark= data[d]
        let totalMark= data[e]
            
        
    
        let table = document.getElementById('table').getElementsByTagName('tbody')[0];
    
        let newRow = table.insertRow();
    
        let titleCell = newRow.insertCell(0);
        let desCell = newRow.insertCell(1);
        
        let subDateDCell =newRow.insertCell(2);
        let oralCell =newRow.insertCell(3);
        let totalCell =newRow.insertCell(4);

        let deleteCell=newRow.insertCell(5);
    
        let titleNode = document.createTextNode(title);
        let desNode = document.createTextNode(description);

        let suDateNode =document.createTextNode(subDate);
        let oralNode =document.createTextNode(oralMark);
        let totalNode =document.createTextNode(totalMark);


        let deleteNode=document.createElement('button')
        let editNode=document.createTextNode('Edit');   
    
    
        //let  eventNode=document.addEventListener("click",display(this));
    
       
        titleCell.append(titleNode);
        desCell.append(desNode);

        subDateDCell.append(suDateNode);

        oralCell.append(oralNode);
        totalCell.append(totalNode);
    
    
       
        deleteNode.appendChild(editNode);
        
    
        deleteCell.append(deleteNode);
    
        deleteNode.classList.add("btn")
        deleteNode.classList.add("btn-primary");
        deleteNode.setAttribute("onclick","display(this)")
      
    
    
        a=a+5;
        b=b+5;
        c=c+5;
        d=d+5;
        e=e+5;
          
    
        }
    
    }
    
    