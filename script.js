const color = [{color: '#ECDECC', id:"Yellow" } ,{color:'#BBD278',id:'Green'},{color:'#BBC1F8', id:'Blue'},{color:'#FFD3F8',id: 'Pink'}];
const title= "Embrace Sideboard";
const price= "12999";
const compare_at_price= "19999";
const discount=Math.floor((( parseInt(compare_at_price)-parseInt(price))/parseInt(compare_at_price))*100);
  document.getElementById('offer').innerHTML=`<div>${discount}% Off</div>`
document.getElementById('product-name').innerText=title;





const element = document.getElementById('color-container');

var selectedColor=null;

function colorSelector(parentdiv, childdiv){
     if(selectedColor){
        var element= document.getElementById(selectedColor);
        element.style.borderColor='white';
        element.firstChild.innerHTML='<div></div>'
        if(selectedColor===parentdiv.id){
            selectedColor=null;
            return ;
        }
     }
     parentdiv.style.borderColor=childdiv.style.backgroundColor;
     childdiv.innerHTML='<div>&#10003<div>'
      selectedColor=parentdiv.id;
    
}

color.forEach((clr)=>{
   var newdiv = document.createElement('div');
    newdiv.id=clr.id;
   var newclr=document.createElement('div');
   newclr.style.backgroundColor=clr.color;
   newdiv.append(newclr);
    newdiv.addEventListener('click',()=>{
           colorSelector(newdiv,newclr);
    })

   element.append(newdiv);
})

// ----------------------------------------------------------
// Quantity control
var quantity=1;
const minus= document.getElementById('minus')
const plus=document.getElementById('plus');
const display=document.getElementById('display-quantity');
display.textContent=quantity;

minus.addEventListener('click',()=>{

        if(quantity===1)return ;
        quantity--;
        display.textContent=quantity;
})
plus.addEventListener('click',()=>{
      if(quantity===9)return;
         quantity++;
         display.textContent=quantity;

})

// -----------------------------------------------------------
// Size selector
const sizes= ['Small','Medium','Large','Extra Large', 'XXL'];

var selectedSize=null;

var sizeList= document.getElementById('size-list');

function handleSize(parent){
      
    if(selectedSize){
        var element= document.getElementById(selectedSize);

        element.firstChild.firstChild.style.backgroundColor='';

        if(selectedSize===parent.id){
            selectedSize=null;
            return ;
        }
        
    }

    parent.firstChild.firstChild.style.backgroundColor='#3A4980';
    selectedSize=parent.id;

}



sizes.forEach((size)=>{
        var newdiv=document.createElement('div');
        newdiv.id=size;
        var circle=document.createElement('div');
        var innercircle=document.createElement('div');
        circle.append(innercircle);
        circle.className='indicator'

        var text =document.createElement('div');
        text.innerText=size;
        newdiv.append(circle);
        newdiv.append(text);

        newdiv.addEventListener('click',()=>{
            handleSize(newdiv);
        })
        


        

        sizeList.append(newdiv);
})




// -----------------------------------------------------

var screenContainer = document.getElementById('left-upper');
var imagesList= document.getElementById('left-lower');
const imageUrl= [
    {
        "src": "https://images.unsplash.com/photo-1567696153798-9111f9cd3d0d?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        "src": "https://images.unsplash.com/photo-1592309487290-2cf1e17b4623?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        "src": "https://images.unsplash.com/photo-1558959703-78d19f4ffb7f?q=80&w=3164&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        "src": "https://images.unsplash.com/photo-1616968173854-4c5ddb85a258?q=80&w=2514&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        "src": "https://images.unsplash.com/photo-1622658641558-235f26dd270b?q=80&w=2867&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
];

const len= imageUrl.length;

var ScreenCard = document.createElement('div');
ScreenCard.style.backgroundImage=`url(${imageUrl[0].src})`
screenContainer.append(ScreenCard);


imageUrl.forEach((ele)=>{
   
    var newimagediv= document.createElement('div');
    
     newimagediv.style.backgroundImage=`url(${ele.src})`;
     
     newimagediv.addEventListener('click',()=>{
        
         ScreenCard.style.backgroundImage=newimagediv.style.backgroundImage;

     })

     imagesList.append(newimagediv);
    

})


var toaster= document.getElementById('toaster');

var adtocart= document.getElementById('add-to-cart');

adtocart.addEventListener('click',()=>{
     toaster.style.backgroundColor='#E7F8B7'
   if(selectedColor===null || selectedSize===null){
    toaster.innerText='Select size and color'
   }
else{
      toaster.innerText=`${title} with Color ${selectedColor} and Size ${selectedSize} added to cart`;
}
})