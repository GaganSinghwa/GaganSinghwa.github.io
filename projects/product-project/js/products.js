/*  global $ _*/
$(document).ready(function() {
    // console.log("DOM is ready!")
    $.getJSON("data/product.json", function(products) {
        // console.log(products);
        //initailize ui
        initializeUi(products);
        //show all producuts
        showProducts(products);
        onProductClicked();
        //price low to high
          $(".sort-low").on("click",function(event){
        //  console.log($(event.currentTarget).val())
         getLowest(products)
         onProductClicked();    
    })//filter by the phone.
      $(".sort").on("click",function(event){
    // console.log($(event.currentTarget).val())
    filterByPhone(products);
    onProductClicked();
})          // price high to low
              $(".sort-high").on("click",function(event){
    console.log($(event.currentTarget).val())
    getHighest(products);
    onProductClicked();
})          //sort by the case
              $(".sort-case").on("click",function(event){
    console.log($(event.currentTarget).val())
    filterByCase(products);
    onProductClicked();
})
      
        
     
        
            //show it in popup
$('#mypopup').popup({
 opacity: 0.3,
 transition: 'all 0.3s',
 color: "grey"
});

$(".my_popup_close").on("click", function(event) {
    //console.log("click")
    $("#mypopup").popup('hide');
    
})
$("#search").on("keyup",function(event){
    //console.log($(event.currentTarget).val())
    showProducts(search(products,$(event.currentTarget).val()))
    onProductClicked();
})
        
    }).fail(function() {
      //  console.log('getJSON on producut failed!')
    });

});

function initializeUi(products) {
    //create producut ul
    $("<ul>")

    .attr("id", "products")
        .addClass("list-products")
        .appendTo("main");
}
function onProductClicked() {
     
    $("h3").on("click", (event)=>{
//   $(".li-product").empty()
// $('#mypopup').empty()
         console.log("click handler")
       
         const product = $(event.currentTarget).data("producut")
         
         $('#mypopup')
           $('#mypopup').empty()
           .append($("<img>").attr("src", "img/product/" + product.image).addClass("img-product2"))
           .append($("<li>").data("product",product).text("price:$ "+ product.price).attr("style","color:white"))
           .append($("<ol>").data("product",product).text("This products amazing specs: "+ product.specs).attr("style","color:white"))
            .append($("<li>").data("product",product).text("AvailableColors: " + product.availableColors).attr('style', 'color:white'))
            .append($("<li>").data("product",product).text("Items Left in stock: "+ product.stock).attr("style","color:white"))
        $('#mypopup').popup("show")
        
        
         
          
     });
           
 

}
function showProducts(products) {
    // clear any products in the dom//
    $("#products").empty()
        .append(createProductsListItems(products));

    function createProductsListItems(products) {
        return _.map(products, function(product) {
            return $('<div>')
            
            //.append($("<img>").attr("src", "img/product/thumbs/" + product.image))
            .append($("<h3>")
                .addClass("li-producut")
                .data("producut", product)
                .text(product.desc)
                .append(createProductsImageDiv(`img/product/thumbs/${product.image}`, "product-thumb"))
                .append(createProductsDetailsDiv(product.desc, product.price, product.stock)))
               
            .append($("<li>").addClass("product-price").data("product",product).text("price:$ "+ product.price))
            // .append($("<ol>").addClass("product-specs").data("product",product).text("This products amazing specs: "+ product.specs).attr("style","color:green"))
            .append($("<li>").addClass("product-colors").data("product",product).text("AvailableColors: " + product.availableColors).attr('style', 'color:red'))
            // .append($("<li>").addClass("product-stock").data("product",product).text("Items Left in stock: "+ product.stock).attr("style","color:blue"))
         
        })
    }

    function createProductsDetailsDiv(product,price,stock) {
        //return _.map(products, function(product) {
        //return $("<div>")
        //.append($("<li>").addClass("product-price").attr(product).text("price:$ "+ product.price))
            //.append($("<ol>").addClass("product-specs").data("product",pr).text("This products amazing specs: "+ product.specs).attr("style","color:green"))
            //.append($("<li>").addClass("product-colors").data("product",product).text("AvailableColors: " + product.availableColors).attr('style', 'color:red'))
            //.append($("<li>").addClass("product-stock").data("product",product).text("Items Left in stock: "+ product.stock).attr("style","color:blue"))
     //})   // create div with 3 child divs ,one for each param , give a unique class.
    }
// const myPic=document.getElementsByTagName("h3");

// myPic[2].style.color="blue";
// myPic[3].style.color="orange";
// myPic[4].style.color="red";
$(".product-img").css("border",'20px solid red').css("background-color","black").css("border-radius", "1px")
$("#products").css("background-color","yellow").css('border', '3px solid black');
    function createProductsImageDiv(product, cssClass) {
      //return _.map(products, function(product) {
            return $('<div>')
            .append($("<img>").attr("src", product)).addClass("product-img")
            
            
         
                
              
            //use jQuery to create and return a div that wraps an image that uses the url as its src

             
    //   })
}
//myButton.addEventListener("click",()=>{
//myHeading.style.color=myTextInput.value;                           
//});

}
function search(collection, term) {
   //1.create soemthing to collect your output
   
  term = term.toLowerCase();
//   console.log(term)
  var results = [];
   //2 iterate collection using _.each
   //_.each value in a collection
   _.each(collection, function(value) {
    
       //base case if value is a string
       //if match, add product to results if not ignored
    if(typeof value !== 'object') {
        if(value.toString().toLowerCase().indexOf(term) > -1){
            results.push(value);
            // console.log("hello"+value);
    //         // if value is a collection
        }
    }   else if(typeof value==="object") {
    //         //recurisve case
            if(search(value,term).length) {
                results.push(value);
            }
        }
   
   //recussive case 
   //1. is this value a collection?
   // if yes, call search(value, term)
   
   //base case - 
   //1.is this a string?
   //2. does this string contain the search term 
   //if yes collect this product into your output array
   
   
  });
  return results;

}
var filterByPhone=(products)=>{
  
        showProducts(_.filter(products, function(phone){
           
            return phone.type==="phone"
             
      
        }));
}
var filterByCase=(products)=>{
        
        showProducts(_.filter(products, function(phone){
            return phone.type==="case"
             
      
        }))
}
function getLowest(products) {
  
    return  showProducts(products.sort(function(item, itemTwo) {
        return item.price - itemTwo.price
    }));
}
function getHighest(products) {
  
    return  showProducts(products.sort(function(item, itemTwo) {
        return itemTwo.price - item.price
    }));
}