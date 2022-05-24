var  btn  =  documento . querySelectorAll ( ".key li" ) ,
    entrada  =  documento . querySelector ( ".input-valor" ) ) ,
    operador  =  documento . querySelectorAll ( ".operador" ) ;


for ( var  i  =  0 ;  i < btn . comprimento ;  i ++ ) {
    documento . onkeypress  =  function ( evento ) {
        var  chave  =  evento . charCode ;
        //Mudança para o navegador
        // firefox interpreta uma calculadora
    for ( var  e  =  0 ;  e  <=  10 ;  e ++ ) {
        if ( chave  ===  ( 48 + e ) ) {
            entrada . innerHTML  +=  e ;
            }
        }
        interruptor  ( tecla ) {
            caso  42 :
            entrada . innerHTML  +=  "*" ;
            quebrar ;
            caso  43 :
            entrada . innerHTML  +=  "+" ;
            quebrar ;
            caso  45 :
            entrada . innerHTML  +=  "-" ;
            quebrar ;
            caso  46 :
            entrada . innerHTML  +=  "." ;
            quebrar ;
            caso  47 :
            entrada . innerHTML  +=  "/"
            quebrar ;
        caso  13 :
        caso  61 :
    var  equacao  =  entrada . interiorHTML ;
    if ( equação ) {
        tente {
            entrada . innerHTML  =  eval ( equação ) ;
             } pegar  ( e )  {
                alert  ( 'Erro na expressão' )
             }
        }
        quebrar ;
    caso  67 :
    caso  99 :
        entrada . innerHTML  =  "" ;
        quebrar ;
        padrão :
        quebrar ;
         }            
    } ;
    btn [ i ] . addEventListener ( 'click' ,  function ( ) {
        var  btnVal   =  this . innerHTML ,
        entradaVal  =  entrada . interiorHTML ;
        //console.log(btnVal);
        case "c":
            input.innerHTML = "";
            break;
            case"=":
            var equaçao = iputVal;I
    
            if(equaçao){
                try{
                    input.innerHTML = eval(equaçao);
                } catch (e){

                }
            }
        })
}
           