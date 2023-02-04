//Title constructor function that creates a Title object
function Title(t1) 
{ 
  this.mytitle = t1;
}

Title.prototype.getName = function () 
{ 
return (this.mytitle);
}

var socialMedia = {
  facebook : 'http://facebook.com',
  twitter: 'http://twitter.com',
  flickr: 'http://flickr.com',
  youtube: 'http://youtube.com'
};
//Add a row upon click
var t = new Title("CONNECT WITH ME!");
var rowCount=3;
function addNewValue(){
  var mainTable=document.getElementById("myTable");//getting the table
  rowCount++;

  var tabletr=document.createElement("tr"); //creating a row
  tabletr.id="rowId" ; 
  var tablerow=mainTable.appendChild(tabletr); //appending the row inside a table 
  var tabledata=document.createElement("td");  //creating the data inside a tablerow

  tabledata.innerHTML='<input id="box" type="checkbox" onclick="boxOnclick(this)"/><br><br><img src="down.png" width="25px" onclick="arrowOnclick(this)"/>';
  tablerow.appendChild(tabledata);

  // adding the student details into the table cells
  

  var tdStudtent=document.createElement("td");
  tdStudtent.innerHTML= "Student" + rowCount;
  tablerow.appendChild(tdStudtent);

  var tdTeacher=document.createElement("td");
  tdTeacher.innerHTML= "Teacher" + rowCount;
  tablerow.appendChild(tdTeacher);

  var tdApproved=document.createElement("td");
  tdApproved.innerHTML= "Approved";
  tablerow.appendChild(tdApproved);

  var tdFall=document.createElement("td");
  tdFall.innerHTML= "Fall";
  tablerow.appendChild(tdFall);

  var tdTA=document.createElement("td");
  tdTA.innerHTML= "TA";
  tablerow.appendChild(tdTA);

  var tdNumber=document.createElement("td");
  tdNumber.innerHTML= "12345";
  tablerow.appendChild(tdNumber);

  var tdPercent=document.createElement("td");
  tdPercent.innerHTML= "100%";
  tablerow.appendChild(tdPercent);


  var rowExpand= document.createElement("tr");
  var rowExpandData=document.createElement("td");
      rowExpandData.innerHTML='Advisor:<br/><br/>Award Details<br/>Summer 1-2014(TA)<br/>Budget Number: <br/>Tuition Number: <br/>Comments:<br /><br/><br/>Award Status:<br/><br/><br/>';
      rowExpandData.colSpan="8";
      rowExpand.append(rowExpandData); 
      rowExpand.style.display ="none";
      alert("Student "+rowCount  +" Record added successfully");
      mainTable.append(rowExpand);
 }

var count=0;
function boxOnclick(checkbox){
  var RowList=checkbox.parentElement.parentElement; //tr
  
  if(checkbox.checked==true){
    document.getElementById("button").disabled=false;
    RowList.style.backgroundColor="yellow";
    var val1=document.getElementById("delheading");
    val1.style.display="revert";
    val1.style.height="100%";
    var val2=document.getElementById("editheading");
    val2.style.display="revert";
    val2.style.height="100%";

    var delButton=document.createElement("td");
    var editButton=document.createElement("td");
    delButton.innerHTML=
    '<button id="delete" type="button" onclick="rowDeleteOnclick(this)">Delete</button>';
    RowList.appendChild(delButton);
    editButton.innerHTML=
    '<button id="edit" type="button" onclick="rowEditOnclick(this)">Edit</button>';
    RowList.appendChild(editButton);
    count++;
  }
  else{
    
    document.getElementById("button").disabled=true;
    document.getElementById("button").style.backgroundColor="gray";
    RowList.style.backgroundColor="#fff";
    RowList.deleteCell(9);
    RowList.deleteCell(8);
  }
  displayHeading();
}

function displayHeading(){
  var table = document.getElementById("myTable");
  var rows = table.rows;
  var isRowSelect = false;
  for(var i=1; i<rows.length; i++){

    if(rows[i].id=="rowId"){
      var cd = rows[i].children[0].children[0]; //get input value
      if(cd.checked){
        isRowSelect= true;
      }
    }
  }
  if(!isRowSelect){  //false case
   //delete the header or hide the error 
    var val1=document.getElementById("delheading");
    var val2=document.getElementById("editheading");
    document.getElementById("button").disabled=true;

    val1.style.display="none";
    val2.style.display="none";
  }
  else{
    document.getElementById("button").style.backgroundColor="orange";

  }
}

function rowDeleteOnclick(d){
  var rowdelete=d.parentElement.parentElement; //tr

  var checkedRow = rowdelete.children[0].children[0];
  checkedRow.checked=false;
  
  var siblingRow = rowdelete.nextElementSibling;
  siblingRow.remove();
  displayHeading();
  rowdelete.remove();
  rowCount--
  
  alert("Student Record Deleted Successfully");
}

function rowEditOnclick(){
  prompt("Edit the row details");
}


function arrowOnclick(image){
   
  var rowElement = image.parentNode.parentNode;
  var hideRow = rowElement.nextElementSibling;
  if(hideRow.style.display=='none'){
    hideRow.style.display='';
    hideRow.colspan='8'
  }
  else{
    hideRow.style.display='none';
  }
     
    }
    













