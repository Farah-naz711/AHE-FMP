

function toggle(){
    var forSearch = document.querySelector('.for-search');
    var forIcon = document.querySelector('.for-icon');
    forSearch.classList.toggle('active')
   }

function Clear()
{
    var inputSearch= document.getElementById('input-search');
    inputSearch.value = '';
}

var img = document.getElementById('img');
function imgChange(file)
{

img.src ='./img/infinix/en_front.png'
    
 }
 
 function imgReverse(){
img.src ='./img/infinix/en_back (1).png'

 }

 //****************  MODAL ****************** */

 var productImg = document.getElementById('productImg');
 var productName   = document.getElementById('productName')
 var productDetail = document.getElementById('productDetail')
 function Details(e, img){
     


    productImg.src=img;

        productName.innerHTML= e.parentNode.firstElementChild.innerHTML;
    productDetail.innerHTML=e.parentNode.firstElementChild.nextElementSibling.innerHTML;
    console.log(productName.innerHTML);
    console.log(productDetail.innerHTML)
 }

 // ******************** **** MOBILE COLOR CHANGE ON HOVER  ******

 function imgColorChange(color){


    var changeImgColor = document.getElementById('changeImgColor');
    var imgchg = document.getElementById('imgchg')
    var imgchg2 = document.getElementById('imgchg2');

    switch(color)
    {
        case 'iPhgreen' : changeImgColor.src = '../img/iphone/finishes_1_alpine_green___small.jpg'; break;
        case 'iPhgold' : changeImgColor.src = '../img/iphone/finishes_1_gold_small.jpg'; break;
        case 'iPhblue' : changeImgColor.src = '../img/iphone/finishes_1_sierra_blue___small.jpg'; break;
        case 'iPhsilver' : changeImgColor.src = '../img/iphone/finishes_1_silver__small.jpg'; break;
        case 'iPhgraphite' : changeImgColor.src = '../img/iphone/finishes_1_graphite__small.jpg'; break;
        case 'infsilver': imgchg.src = '../img/infinix/en_back (1).png';   break;
        case 'infblue':     imgchg.src = '../img/infinix/en_front.png';   break;
        case 'infgold':     imgchg.src = '../img/infinix/en_back (2).png';   break;
    
        case 'vivographite':     imgchg2.src = '../img/vivo/vblackb.png';   break;
        case 'vivogold':     imgchg2.src = '../img/vivo/vivoyellob.png';   break;
    

    }


 }
