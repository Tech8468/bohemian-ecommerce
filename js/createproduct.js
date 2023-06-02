let formWrapper = $("#formWrapper")
imageField = $("#imageField")
productNameField = $("#productNameField")
categoryField = $("#categoryField")
priceField = $("#priceField")
saveBtn = $("#saveBtn")
tBody = $("#tbody")
let index
let listOfProducts = []
// loadProductsView()


saveBtn.on("click", function () {

    // if(index!=null){
    //   updateProducts()
    // }else{
    // }    
      createProducts()

})

function createProducts() {
    //Create an object of the record
    let empObj = { "image": imageField.val(),"productname": productNameField.val(), "category": categoryField.val(), "price": priceField.val()}
     alert(empObj)
  
    // $.ajax({
    //     type:"post",
    //     url:"http://159.65.21.42:9000/create/product",
    //     data:empObj,
    //     success:function(res){
    //       alert(res);
    
    //       if(res["error"]){
    //         alert(res["error"])
    //       }else{
    //         alert(`${res["name"]} create product successful`)
    //         //window.location.href=""
    //       }
    //     },
    //     error:function(err){
    //       console.log(err);
    //       alert(err.statusText)
    //     }
    //   })
    //load array to html view
    // loadProductsView()
    // formContainer.hide()
  }
  console.log()