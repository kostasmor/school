
    var dataG;




    function addUserToTable(){
    
    
    if(localStorage.getItem('course')){
        dataG=JSON.parse(localStorage.getItem('course'));
    }
    else{
        dataG=[]
    }
    
     //dataG = localStorage.getItem('row') ? JSON.parse(localStorage.getItem('row')) : [];
    
    dataG[0]=0;
    
 
    
        let title= document.getElementById('title').value;   
        let steam= document.getElementById('steam').value;
        let type=null;

        if( document.getElementById('full-time').checked){

            type=document.getElementById('full-time').value;

        }else if( document.getElementById('part-time').checked){

            type=document.getElementById('part-time').value;
        
        }

        let st_date=document.getElementById('st_date').value;
        let en_date=document.getElementById('en_date').value;
        



         
    let i;
    let a=1;
    let b=2;
    let c=3;
    let d=4;
    let e=5;

    let dl=dataG.length-1;
    let len=((dl)/5);

    
    for (i = 1; i <= len; i++) {

        let titleTemp=dataG[a]  
        let steamTepm=dataG[b]
        let typeTepm= dataG[c]
        let st_dateTemp=dataG[d]
        let en_dateTemp=dataG[e]

        if(titleTemp==title && steamTepm==steam && typeTepm==type && st_date==st_dateTemp && en_date==en_dateTemp ){
            alert("double entry!!");
            return ;
        }

        a=a+5;
        b=b+5;
        c=c+5;
        d=d+5;
        e=e+5;

    }



        if(en_date<st_date){
            en_date=st_date;
            alert("you can't set end date before start date");

        }

    
        if(!title || !steam || !type || st_date==="" || en_date==="")  {
            alert('You must fill all the elements!!!');
        }
        else{
        let table = document.getElementById('table').getElementsByTagName('tbody')[0];
    
        let newRow = table.insertRow();
    
        let tCell = newRow.insertCell(0);
        let sCell = newRow.insertCell(1);
        let tyCell =newRow.insertCell(2);
        let stDCell =newRow.insertCell(3);
        let enDCell =newRow.insertCell(4);
    
        let tNode = document.createTextNode(title);
        let sNode = document.createTextNode(steam);
        let tyNode =document.createTextNode(type);


        let stNode =document.createTextNode(st_date);
        let enNode =document.createTextNode(en_date);
    
        tCell.append(tNode);
        sCell.append(sNode);
        tyCell.append(tyNode);

        stDCell.append(stNode);
        enDCell.append(enNode);
    
    
           
        
            dataG.push(title);
            dataG.push(steam);
            dataG.push(type);

            dataG.push(st_date);
            dataG.push(en_date);
    
            localStorage.setItem('course',JSON.stringify(dataG));
             
            
    
           
        }
        
    }
    
    
    function tableAdd(){
        
        
        let data=JSON.parse(localStorage.getItem('course'))
        data[0]=0;
    
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
        let steam=data[b]
        let type= data[c]
    
        let st_date= data[d]
        let en_date= data[e]

        let table = document.getElementById('table').getElementsByTagName('tbody')[0];
    
        let newRow = table.insertRow();
    
        let tCell = newRow.insertCell(0);
        let sCell = newRow.insertCell(1);
        let tyCell =newRow.insertCell(2);
        let stDCell =newRow.insertCell(3);
        let enDCell =newRow.insertCell(4);
    
        let tNode = document.createTextNode(title);
        let sNode = document.createTextNode(steam);
        let tyNode =document.createTextNode(type);


        let stNode =document.createTextNode(st_date);
        let enNode =document.createTextNode(en_date);
    
        tCell.append(tNode);
        sCell.append(sNode);
        tyCell.append(tyNode);

        stDCell.append(stNode);
        enDCell.append(enNode);
    
        a=a+5;
        b=b+5;
        c=c+5;
        d=d+5;
        e=e+5;    
        }
    
    }
    
    function tableEdit(){
        
        
        let data=JSON.parse(localStorage.getItem('course'))

        data[0]=0;
    
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
            let steam=data[b]
            let type= data[c]
        
            let st_date= data[d]
            let en_date= data[e]
        
    
            let table = document.getElementById('table').getElementsByTagName('tbody')[0];
    
            let newRow = table.insertRow();
        
            let tCell = newRow.insertCell(0);
            let sCell = newRow.insertCell(1);
            let tyCell =newRow.insertCell(2);
            let stDCell =newRow.insertCell(3);
            let enDCell =newRow.insertCell(4);

        let deleteCell=newRow.insertCell(5);
    
        let tNode = document.createTextNode(title);
        let sNode = document.createTextNode(steam);
        let tyNode =document.createTextNode(type);


        let stNode =document.createTextNode(st_date);
        let enNode =document.createTextNode(en_date);


        let deleteNode=document.createElement('button')
        let editNode=document.createTextNode('Edit');   
    
    
        //let  eventNode=document.addEventListener("click",display(this));
    
       
        tCell.append(tNode);
        sCell.append(sNode);
        tyCell.append(tyNode);

        stDCell.append(stNode);
        enDCell.append(enNode);
    
    
       
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
    
    