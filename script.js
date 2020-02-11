var urnumber = prompt ("choose a number between 0 and 10")
var thnumber = Math.floor(Math.random() * Math.floor(11))
while ( urnumber != thnumber ) {
   
    if ( urnumber < thnumber ){
        urnumber = prompt ("ur number is to low, choose an higher one")
    }
   
    if ( urnumber > thnumber ){
        urnumber = prompt ("ur number is to high, choose a lower one")
    }
    
}
alert ("GG mate, it was the right one !!")