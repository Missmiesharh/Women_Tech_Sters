function checkEven(a){
    if( a % 2 == 0){
        alert(a + " is an even number")
    }else{
        alert(a + " isn't an even number")
    }
}

function printn1ton2(a, b){
    if(a > b){
        while (b <= a){
            console.log (b)
            b++;
        }
    } else if (b > a){
        while(b >= a){
            console.log(b)
            b--;
        }
    } else{
        console.log(a +" " + b + " are equal")
    }
}

function calcFunc(a, b){
    let c = 0;
    while(b >= a){
        c +=a;
        a++
    }
    console.log(c)
}

checkEven(3)
calcFunc(1,5)
printn1ton2(1, 9)
    
