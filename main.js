
let form = document.getElementById("form")
let list = document.getElementById('list')
form.addEventListener('submit',addItem)
window.addEventListener('DOMContentLoaded',remember)

function remember(){
    var key = Object.keys(localStorage)
    i=key.length
    for(let j=0;j<i;j++){
        console.log(key[j])
        let serial = localStorage.getItem(key[j])
        let Obj = JSON.parse(serial)
        addElement(Obj)
    }
}

function addItem(e){
    e.preventDefault()

    //get values
    let amount = document.getElementById("expense").value 
    let desc = document.getElementById("desc").value 
    let category= document.getElementById("cat").value

    //make values to object
    myObj = {
        amount : amount,
        desc: desc,
        cat :  category
    }

    //check if exist on localStorage
    if(localStorage.getItem("user"+myObj.desc )!== null ){
        var del = document.getElementById(myObj.desc) 
        del.remove();
    }

    addElement(myObj)
    //add to local
    serial = JSON.stringify(myObj)
    localStorage.setItem("user"+myObj.desc,serial)
}

    function addElement(Obj){

        
        
        

        //create li element
        var li = document.createElement('div')
        li.className='row list-group'
        li.id= Obj.desc
        li.style.color="white"

        //create textnode
        var col1 = document.createElement('div')
        var text= document.createTextNode("amount: "+
         Obj.amount+" description: "+Obj.desc+" category: "+ Obj.cat)
         col1.appendChild(text)
         col1.className= "col col-sm-6 mt-2"

         //create delete btn
         var col2 = document.createElement("div")
         var delBtn = document.createElement('button')
         delBtn.className = "btn btn-danger btn-sm  float-right"
         delBtn.appendChild(document.createTextNode("X"))
         delBtn.addEventListener("click",removeItem)
         col1.appendChild(delBtn)
         

         //createEdit btn 
         var col3 = document.createElement('div')
         var editBtn = document.createElement('button')
         editBtn.className = "btn btn-primary btn-sm float-right mr-2"
         editBtn.value="edit"
        editBtn.innerText="edit"
        editBtn.addEventListener('click',editItem)
        col1.appendChild(editBtn)

        //add to li 
        li.appendChild(col1)


        // to delete existing
        

        // add li to list
    
        list.appendChild(li)

        
        function removeItem(e){
            var li = e.target.parentElement.parentElement
            list.removeChild(li)
            localStorage.removeItem('user'+Obj.desc)

        }
    
        function  editItem(e){
            //to be writen
            var li = e.target.parentElement
            localStorage.removeItem('user'+Obj.desc)      
            document.getElementById("expense").value = Obj.amount
            document.getElementById("desc").value  = Obj.desc
            document.getElementById("cat").value = Obj.cat
    
            list.removeChild(li)
    
        }

    }

    
    
   
   
   
   
    
   
    
    
    

    
