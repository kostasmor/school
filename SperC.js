function loadCourses(){
    let data;
if(localStorage.getItem('course')){
    data=JSON.parse(localStorage.getItem('course'));
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


    let table = document.getElementById('table_courses').getElementsByTagName('tbody')[0];

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
let editNode=document.createTextNode('Pick');   


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
deleteNode.setAttribute("onclick","pick(this)")



a=a+5;
b=b+5;
c=c+5;
d=d+5;
e=e+5;   

}

}


function loadStudents(){
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
    

    let table = document.getElementById('table_students').getElementsByTagName('tbody')[0];

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
let editNode=document.createTextNode('Add');   


//let  eventNode=document.addEventListener("click",display(this));

firstNameCell.append(firstNameNode);
lastNameCell.append(lastNameNode);

dOBDCell.append(dOBNode);

costCell.append(costNode);


deleteNode.appendChild(editNode);


deleteCell.append(deleteNode);

deleteNode.classList.add("btn")
deleteNode.classList.add("btn-primary");
deleteNode.setAttribute("onclick","addStudent(this)")



a=a+4;
b=b+4;
c=c+4;
d=d+4;

}

}






function pick(ctl) {


$("#div_courses").hide();


let editRow = null;
let cols;




editRow = $(ctl).parents("tr");

cols = editRow.children("td");



let titlePick=$(cols[0]).text();
let steamPick=$(cols[1]).text();
let typePick=$(cols[2]).text();

let st_datePick=$(cols[3]).text();
let en_datePick=$(cols[4]).text();

let table = document.getElementById('one_course').getElementsByTagName('tbody')[0];

let newRow = table.insertRow();

let tCell = newRow.insertCell(0);
  let sCell = newRow.insertCell(1);
  let tyCell =newRow.insertCell(2);
  let stDCell =newRow.insertCell(3);
  let enDCell =newRow.insertCell(4);


let tNode = document.createTextNode(titlePick);
  let sNode = document.createTextNode(steamPick);
  let tyNode =document.createTextNode(typePick);
  let stNode =document.createTextNode(st_datePick);
  let enNode =document.createTextNode(en_datePick);

tCell.append(tNode);
  sCell.append(sNode);
  tyCell.append(tyNode);

  stDCell.append(stNode);
  enDCell.append(enNode);

  

  let x =document.getElementById("singleco");


  x.style.display = "block";

  


}


function addStudent(ctl){


    $(ctl).hide();

    let editRow = null;
    let cols;
    

    editRow = $(ctl).parents("tr");

    cols = editRow.children("td");

    

    let firstName=$(cols[0]).text();
    let lastName=$(cols[1]).text();
    let dOB=$(cols[2]).text();
    let cost=$(cols[3]).text();

  
    let table = document.getElementById('SperC').getElementsByTagName('tbody')[0];

let newRow = table.insertRow();

let firstNameCell = newRow.insertCell(0);
let lastNameCell = newRow.insertCell(1);
let dOBCell =newRow.insertCell(2);
let costCell =newRow.insertCell(3);
let deleteCell=newRow.insertCell(4);

let firstNameNode = document.createTextNode(firstName);
let lastNameNode = document.createTextNode(lastName);
let dOBNode =document.createTextNode(dOB);
let costNode =document.createTextNode(cost);
let deleteNode=document.createElement('button')
let editNode=document.createTextNode('Edit');   

firstNameCell.append(firstNameNode);
lastNameCell.append(lastNameNode);
dOBCell.append(dOBNode);
costCell.append(costNode);

deleteNode.appendChild(editNode);
deleteCell.append(deleteNode);

deleteNode.classList.add("btn")
    deleteNode.classList.add("btn-primary");
    deleteNode.setAttribute("onclick","editS(this)")
    

}


function editS(ctl){

    let  editRow = $(ctl).parents("tr");
    let  cols = editRow.children("td");


    let firstName=$(cols[0]).text();
    let lastName=$(cols[1]).text();
    let dOB=$(cols[2]).text();
    let cost=$(cols[3]).text();

  $(editRow).remove();

      let tb=document.getElementById("table_students");
     let tr=tb.getElementsByTagName("tr");

      let i;
      for(i=1;i<tr.length;i++){

        let  td0=tr[i].getElementsByTagName("td")[0];
        let  td1=tr[i].getElementsByTagName("td")[1];
         let td2=tr[i].getElementsByTagName("td")[2];
         let td3=tr[i].getElementsByTagName("td")[3];
         let td4=tr[i].getElementsByTagName("td")[4];

          let ftemp=td0.textContent;
          let ltemp=td1.textContent;
          let dOBtemp=td2.textContent;
          let costtemp=td3.textContent;
             
          if(firstName==ftemp && lastName==ltemp && dOB==dOBtemp && cost==costtemp){
             btn= td4.children;
            // btn.style.display = "block";
             $(btn).show();
          //  x.style.display = "block";
             
          }
   


      }


    
      

  }