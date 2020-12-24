setInterval(function(){
// time dilution
    var timrVar = new Date();
    var day = timrVar.getDay()
    var hours = timrVar.getHours();
    var minit = timrVar.getMinutes();
    var sec = timrVar.getSeconds();

    var amText = 'AM';
    var pmText = 'PM';
        if (hours > 12) {
            var dum = pmText ;
        }else if(hours < 12){
            var dum = amText;
        }

    document.getElementById('colock').innerHTML = hours +':'+ minit +':'+ sec+" "+ dum;

        console.log(hours +':'+ minit +':'+ sec+" "+ dum);
},800)
 