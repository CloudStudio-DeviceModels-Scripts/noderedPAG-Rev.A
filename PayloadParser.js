function parseUplink(device, payload)
{
    // Obtener payload como JSON
    const jsonPayload = payload.asJsonObject();
    Object.keys(jsonPayload).forEach(function(key){
        //env.log(key,jsonPayload[key])
    })

    // No se puede deserializar el payload como json, salir.
    if (!jsonPayload) { return; }

    // Procesar JSON de EZE GEN1 (hasta 200 registros por sensor por call)


    //----------------------------------------------------------------------------------------------------------------------------
    //----------------------------------------------------------------------------------------------------------------------------


  

        //variables PAG ABAJO
        var aromatico = device.endpoints.byAddress(1);
        var aguarras1 = device.endpoints.byAddress(2);
        var aguarras2 = device.endpoints.byAddress(3);
        var recuperado = device.endpoints.byAddress(4);
        var soya = device.endpoints.byAddress(5);
        var xilol = device.endpoints.byAddress(6);

        var tiempoUnix = jsonPayload.timestamp;
        var fecha = new Date(tiempoUnix * 1000);
        var timestamp = fecha.toISOString();
        env.log("LA FECHA ES ----->   ",timestamp);

        
        



       
        
 

/*-------------------------------------------------------------------------------------------------------------------

SCRIPT PAG SCRIPT PAG SCRIPT PAG SCRIPT PAG SCRIPT PAG SCRIPT PAG SCRIPT PAG SCRIPT PAG SCRIPT PAG SCRIPT PAG SCRIPT PAG

-------------------------------------------------------------------------------------------------------------------*/
// Sentencia NODE-RED Para todos los endpoints


if (jsonPayload.ser == "LABORATORIO"){
            const datos = jsonPayload;
            
            var dato1 =datos.e1;
            var dato2 =datos.e2;
            var dato3 =datos.e3;
            var dato4 =datos.e4;
            var dato5 =datos.e6;
            var dato6 =datos.e11;

            
            aromatico.updateVolumeSensorStatus(dato1,timestamp);
            env.log("Valor  --> ",dato1);
            
            aguarras1.updateVolumeSensorStatus(dato2,timestamp);
            env.log("Valor  --> ",dato2);

            aguarras2.updateVolumeSensorStatus(dato3,timestamp);
            env.log("Valor  --> ",dato3);

            recuperado.updateVolumeSensorStatus(dato4,timestamp);
            env.log("Valor  --> ",dato4);

            xilol.updateVolumeSensorStatus(dato5,timestamp);
            env.log("Valor  --> ",dato5);

            soya.updateVolumeSensorStatus(dato6,timestamp);
            env.log("Valor  --> ",dato6);
            
                            
                                                         
    }



  
}