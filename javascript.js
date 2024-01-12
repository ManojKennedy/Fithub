let x=0;
function product(){
    if( x%2==0 ){
        document.querySelector(".shop").style.display="block"
    }
    
    else{
        document.querySelector(".shop").style.display="none"
    }
    console.log(x)
    x+=1;
}
