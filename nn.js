var favs = Array.from(document.querySelectorAll("fa-heart"));
var deletebtn = Array.from(document.querySelectorAll(".fa-trash"));
var cards = Array.from(document.querySelectorAll('.produit'));
var btnplus= Array.from(document.querySelectorAll('.fa-plus'));
var btnminus = Array.from(document.querySelectorAll('.fa-minus'));

// favorites articles
for(let fav of favs){
    fav.addEventlistener("click" ,function() {
    if(fav.style.color =="white") {
        fav.style.color ="red"
    }
    else{
        fav.style.color=="white"
   }
	
}) }
   // remove
   for(let del in deletebtn) {
    deletebtn[del].addEventlistener("click", function() {
      
        del.remove()
   } )
    }

// add article to card
for (let plus of btnplus) { 
    plus.addEventlistener("click",function ()  {
        plus.nextelementsibling.innerhtml++ ;
        total()

    } )
}
// delete elt from card
for(let minus of btnminus) {
    minus.addEventlistener ("click",function() {
        minus.previouselementsibling.innerhtml > 0 ?
        minus.previouselementsibling.innerhtml-- : null
        total()

    })
}
// totla price
function total() {
    let qte = Array.from(document.querySelectorAll(".counter"));
    let price = Array.from(document.querySelectorAll(".prix"));


    let s = 0 ;
    for (let i = 0 ; i <price.length;i++) {

        s= s + price [i].innerHTML*qte[i].innerHTML
    }
document.getElementById("totla-price").innerHTML = s












}