
let index
let listOfProducts = []





$(document).ready(function(){
 
    tBody.html(" <h2>Loading data ..........</h2>")
    $.ajax({
      type:"get",
      url:"http://159.65.21.42:9000/users",
      success:function(res){
        console.log(res);
        listOfProducts=res
        listOfProducts=listOfProducts.reverse()
        let row = "" //Empty view
  
        //loop through the array
        for (let i = 0; i < listOfProducts.length; i++) {
      
          //Keep concatenating  the html sample view  to the empty view
          row += `<tr>
         <td>${i + 1}</td>
         <td>${listOfProducts[i]["name"]}</td>
         <td>${listOfProducts[i]["email"]}</td>
         <td>${listOfProducts[i]["phone"]}</td>
         <td>${listOfProducts[i]["password"]}</td>
         <td><a href="#" class="editBtn"  index="${i}">Edit</a>  |  <a href="#" class="deleteBtn" index="${i}">Delete</a></td>
      </tr>` // Assign user defined attribute to html tag that will save the index as each row is been created
      
        }
      
        //Assign the Contenated views to the Html Table body
        tBody.html(row)
      },
      error:function(err){
        console.log(err);
        alert(err.statusText)
      }
    })
  
  
    
});