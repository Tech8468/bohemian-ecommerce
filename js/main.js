



saveBtn.on("click", function () {
  
    if(index!=null){
      updateProducts()
    }else{
      createProducts()
    }
  
})

tBody.on("click", ".editBtn", function(){
    index=$(this).attr("index")
  
    saveBtn.html("Update Data")
    
    imageField.val(listOfProducts[index]["image"])
    productNameField.val(listOfProducts[index]["productname"])
    priceField.val(listOfProducts[index]["price"])
})

tBody.on("click", ".deleteBtn", function(){
 
    if(confirm("Are you sure you want to delete this data")){
  
      let i=$(this).attr("index")
  
      listOfProducts.splice(i, 1)
      localStorage.setItem("products",JSON.stringify(listOfProducts))
  
      loadProductsView()
    }
   
  })
  
  function createProducts() {
    let empObj = { "image": imageField.val(),"productname": productNameField.val(), "price": priceField.val(),}
  
    listOfProducts.push(empObj)
    localStorage.setItem("products",JSON.stringify(listOfProducts))
    console.log(empObj)
    loadProductsView()
  }
  
  function updateProducts(){

    let empObj = { "image": imageField.val(),"productname": productNameField.val(), "price": priceField.val(),}
  
    listOfProducts[index]=empObj
    localStorage.setItem("products",JSON.stringify(listOfProducts))
  
    loadProductsView()
  
    saveBtn.html("Save Data")
    index=null
  }

  function loadProductsView() {

    let productStorage= localStorage.getItem("products")
    if(productStorage!=null){
      listOfProducts=JSON.parse(productStorage)
    }
    let row = "" 
  
    for (let i = 0; i < listOfProducts.length; i++) {
  
      row += `<tr>
     <td>${i + 1}</td>
     <td><img src="${listOfProducts[i]["image"]}"  width="40" height="40" /></td>
     <td>${listOfProducts[i]["productname"]}</td>
     <td>${listOfProducts[i]["price"]}</td>
     <td><a href="#" class="editBtn"  index="${i}">Edit</a>  |  <a href="#" class="deleteBtn" index="${i}">Delete</a></td>
  </tr>` 
  
    }
  
    tBody.html(row)
  }
  
  