$(document).ready( function() {


    var btnStart =$('main button') ;

    var textBtn = $( 'main button h1' );

    var textTime = $( 'main h2' );

    var numeriRandom = [];

    var containerBox =$('.container-num ul') ;

    var stato = false ;
    var counter = 0;

    var giocatore =$('#giocatore') ;

    var userNum1 =$('#num1-user');
    var userNum2 =$('#num2-user');
    var userNum3 =$('#num3-user');
    var userNum4 =$('#num4-user');
    var userNum5 =$('#num5-user');

    var numeriGiocatore = [];


    

    while( numeriRandom.length < 5 ){

        var numRandom = numberRandom(1 , 20) ;

        if(!numeriRandom.includes(numRandom)){

            numeriRandom.push(numRandom);

        }
    };

    console.log(numeriRandom);


    giocatore.click( function(){

             var numero1 = parseInt(userNum1.val()) ; 
             var numero2 = parseInt(userNum2.val()) ; 
             var numero3 = parseInt(userNum3.val()) ; 
             var numero4 = parseInt(userNum4.val()) ; 
             var numero5 = parseInt(userNum5.val()) ; 

             numeriGiocatore.push(numero1,numero2,numero3,numero4,numero5);

             
             if(numeriRandom.sort().join(',') === numeriGiocatore.sort().join(',')){
                alert('Hai Vinto  :D !!!');
                setTimeout(function(){ window.location.reload() }, 3);
            }
               else{
                alert('Hai perso :(');
                setTimeout(function(){ window.location.reload() }, 3);
               };

        

    } );

    btnStart.click( function(){

        

        counter += 1;

        if(stato === false && counter === 1){

            stato = true;

            for( var i = 0 ; i < 5 ; i++){

                containerBox.append('<li class="list">' + numeriRandom[i] + '</li>')

                textBtn.text( 'Memorizza i 5 numeri e quando sei pronto clicca di nuovo per iniziare a giocare' );

    
            }
        }else if (stato === true && counter > 1){
            stato = false;
            btnStart.fadeOut();
            var timeNum = 31;
            $('ul li.list').fadeOut();
            setTimeout( function(){
                $('ul li.risposta').addClass('active');
            }, 500 );
            
            


            var timeId = setInterval( function(){

                if(timeNum > 0){
                    timeNum--;
                    textTime.text('Tempo restante: ' + timeNum);
                }else {
                    textTime.text('Tempo scaduto');
                    clearInterval(timeId);
                }
                

            },1000 ) ;

            
        }


    } );



    // End ready
} );


/******************************************************
 * Functions
 *******************************************************/

 function numberRandom(min,max){

    return Math.floor(Math.random() * (max - min) +1) + min;


}