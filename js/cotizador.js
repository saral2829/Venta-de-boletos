var botonCalcular = document.getElementById('calcular')

botonCalcular.addEventListener('click',cotizando)

function cotizando(){
//contador
    var cont_total=0;

    var nombre = document.getElementById('nombre').value
    var apellido = document.getElementById('apellido').value

    var cliente= document.getElementById('cliente');
    cliente.innerHTML= '<span><b>Cliente:  '+nombre+' '+apellido+'</span>';

//Calcular valor_dia
var Dia= document.getElementById('pase_dia').value
    var calcular_dia= Dia*30;

    if( calcular_dia>0){
        var por_dia=document.getElementById('por_dia');
        por_dia.innerHTML= Dia +'<span> Pase por día (viernes): $ </span> '+calcular_dia;
        cont_total+=calcular_dia;
    }
    
    
//calcular todos_dias

var todos_dias=document.getElementById('pase_completo').value
    var calcular_todosdias=todos_dias*50;

    if (calcular_todosdias>0)
    {
        var todos_Dias=document.getElementById('todos_Dias')
        todos_Dias.innerHTML=todos_dias+ '<span> Todos los días: $</span>'+ calcular_todosdias;
        cont_total+=calcular_todosdias;
    }

//calcular pase_dosdias
        var pasedosdias=document.getElementById('pase_dosdias').value
        var calcular_dosdias=pasedosdias*45;
        
        if(calcular_dosdias>0){
            var dosDias=document.getElementById('dosDias')
            dosDias.innerHTML=pasedosdias+ '<span> Pase por 2 Días (Viernes y Sábado): $</span>'+ calcular_dosdias;
            cont_total+=calcular_dosdias;
        }
//calcular camisas_evento
        var camisas_evento=document.getElementById('camisa_evento').value
        var tot= (camisas_evento*10);
        var desc = (tot*0.07);
        desc = desc.toFixed(2);
        var calcular_desc= tot- desc;

        if(calcular_desc>0){
            var CamisaEvento = document.getElementById('CamisaEvento')
            CamisaEvento.innerHTML= camisas_evento+'<span> Camisas de Evento: $ </span >'  + tot +'<span ><br> &nbsp&nbsp&nbspDescuento: &nbsp&nbsp&nbsp- $ </span>'+desc+ '<span> <br>Total de camisas: $ </span>' +calcular_desc;
            cont_total+=calcular_desc;

        }

//Calcular paquete_etiquetas

    var paquete_etiquetas=document.getElementById('etiquetas').value;
    var calc_etiquetas= paquete_etiquetas*2;
   
    if(calc_etiquetas>0){
        var p_Etiquetas=document.getElementById('p_Etiquetas')
        p_Etiquetas.innerHTML= paquete_etiquetas + '<span> Paquete de Etiquetas: $</span>'+calc_etiquetas

        cont_total+=calc_etiquetas;

    }      
    
    // seleccione regalo

        var regalo = document.getElementById('regalo').value;
        
        if(regalo==0){
           
        alert('No olvide escoger su regalo :)')
        }else{
            var s_regalos=document.getElementById('s_regalos')
        s_regalos.innerHTML= '<span>Regalo: </span>'+regalo;
        }

        var list_prod = document.getElementById('lista-product')
        list_prod.style.display = 'block'


        var total = document.getElementById('suma-total')
        total.textContent = '$'+ cont_total;
    


}