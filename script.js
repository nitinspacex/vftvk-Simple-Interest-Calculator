function simple_interest(){

    var p = document.getElementById ("first").value;
    var t = document.getElementById ("second").value;
    var r = document.getElementById ("third").value;
    var si = parseInt((p*t*r)/100 );
    document.getElementById ('num').innerHTML ="Simple interest : "+si;
    
    }
