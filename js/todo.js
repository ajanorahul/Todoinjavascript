 function getupdate(){

    console.log('click');
    tit = document.getElementById('title').value;
    desc = document.getElementById('description').value;
    if (localStorage.getItem('itemsJson')==null){
        itemJsonArray = [];
        itemJsonArray.push([tit,desc]);
        localStorage.setItem('itemsJson',JSON.stringify(itemJsonArray))
    }
    else{
        itemJsonArrayStr = localStorage.getItem('itemsJson')
        itemJsonArray = JSON.parse(itemJsonArrayStr);
        itemJsonArray.push([tit,desc]);
        localStorage.setItem('itemsJson',JSON.stringify(itemJsonArray))
    }
    title.value ="";
    description.value = "";
    update();
    

 }
 
 function update(){

    if (localStorage.getItem('itemsJson')==null){
        itemJsonArray = [];
        localStorage.setItem('itemsJson',JSON.stringify(itemJsonArray))
    }
    else{
        itemJsonArrayStr = localStorage.getItem('itemsJson')
        itemJsonArray = JSON.parse(itemJsonArrayStr);
    }
   
    let tableBody = document.getElementById("tableBody");
    let str ="";
    itemJsonArray.forEach((element,index) => {
        str +=`
        <tr>
        <th scope="row">${index +1}</th>
        <td>${element[0]}</td>
        <td>${element[1]}</td>
        <td><button class="btn btn-sm btn-danger" onclick="deleted(${index})">Delete</button></td>
        </tr>
        `;
        
    });
    tableBody.innerHTML = str;
 }
 add = document.getElementById("add");
 add.addEventListener('click',getupdate);
 update();

 //Deleteing
 function deleted(itemindex){
    itemJsonArrayStr = localStorage.getItem('itemsJson')
    itemJsonArray = JSON.parse(itemJsonArrayStr);
    //Delete
    itemJsonArray.splice(itemindex,1)
    localStorage.setItem('itemsJson',JSON.stringify(itemJsonArray))
    update();
 }