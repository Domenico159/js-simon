$(document).ready( function() {


    var btnStart =$('main button') ;

    var textBtn = $( 'main button h1' );

    var textTime = $( 'main h2.text-time' );

    var textEnd = $( 'main h2.text-end' );

    var nTrue =$('.numeri-giusti .n-true') ;

    var nFalse =$('.numeri-sbagliati .n-false') ;

    var risultato =$('.risultato') ;


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

    var numeriGiusti = [];

    var numeriSbagliati=[];

    var resetBtn =$('input.reset') ;


    

    while( numeriRandom.length < 5 ){

        var numRandom = numberRandom(1 , 20) ;

        if(!numeriRandom.includes(numRandom)){

            numeriRandom.push(numRandom);

        }
    };


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
                    textEnd.text('Inserisci i numeri che ricordi  uno ad uno');
                    textTime.text('Tempo restante: ' + timeNum);
                }else {
                    textTime.text('Tempo scaduto  hai perso :(');
                        clearInterval(timeId);  
                        resetBtn.show();  
                        $('ul li.risposta').removeClass('active');   
                        risultato.addClass('active')   
                        textEnd.hide();            
                }
                

            },1000 ) ;





            

            
    giocatore.click( function(){

        var numero1 = parseInt(userNum1.val()) ; 
        var numero2 = parseInt(userNum2.val()) ; 
        var numero3 = parseInt(userNum3.val()) ; 
        var numero4 = parseInt(userNum4.val()) ; 
        var numero5 = parseInt(userNum5.val()) ; 

        numeriGiocatore.push(numero1,numero2,numero3,numero4,numero5);


        for(var i = 0 ; i < 5; i++ ){

           if(numeriRandom.includes(numeriGiocatore[i])){
               numeriGiusti.push(numeriGiocatore[i])
           }else if (!isNaN(numeriGiocatore[i])) {
               numeriSbagliati.push(numeriGiocatore[i]);
           }
        }



        for(var i = 0 ; i < numeriGiusti.length; i++ ){

           if(numeriGiusti.includes(NaN)){
               nTrue.text(' ');
           }
           else{
               nTrue.append(numeriGiusti[i] + ' ');
           }
        }


        for(var i = 0 ; i < numeriSbagliati.length; i++ ){

           if(numeriSbagliati.includes(NaN)){
               nFalse.text(' ');
               console.log(numeriSbagliati);
           }else{
               nFalse.append(numeriSbagliati[i] + ' ');
           }
        }

        // console.log(numeriRandom);
        // console.log(numeriGiocatore);
        // console.log(numeriGiusti);
        // console.log(numeriSbagliati);

        
        if(numeriRandom.sort().join(',') === numeriGiocatore.sort().join(',')){
                   resetBtn.show();  
                   $('ul li.risposta').removeClass('active');   
                   risultato.addClass('active')
                   clearInterval(timeId);
                   textEnd.hide();
                   textTime.text('Hai Vinto  :D !!!') 
                   confetti( {
                       particleCount:1000,
                       spread:360,
                   } );
       }
          else{
                   resetBtn.show();  
                   $('ul li.risposta').removeClass('active');   
                   risultato.addClass('active')
                   clearInterval(timeId);
                   textEnd.hide();
                   textTime.text('Hai perso :(') 
          };

   

} );

            resetBtn.click( function(){
                setTimeout(function(){ window.location.reload() }, 3);
            } );

            
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