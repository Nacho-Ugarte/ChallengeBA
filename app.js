var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        const cameras = JSON.parse(xhttp.responseText);

        let
            contadorA = 0,
            contadorB = 0,
            contadorC = 0;

        /* Recorro el Json identificando camara y codigo de entrada//salida */

        cameras.map((camera) => {

            switch (camera.type) {

                case "A":

                    if (camera.entrance === 1) contadorA++;
                    if (camera.entrance === 0 && contadorA >= 0) contadorA--;
                    break;

                case "B":

                    if (camera.entrance === 1) contadorB++;
                    if (camera.entrance === 0 && contadorB >= 0) contadorB--;

                    break;

                case "C":

                    if (camera.entrance === 1) contadorC++;
                    if (camera.entrance === 0 && contadorC >= 0) contadorC--;
                    break;

                case "C2":

                    if (camera.entrance === 1) contadorC++;
                    if (camera.entrance === 0 && contadorC >= 0) contadorC--;
                    break;

            }
        })

                let genteA = contadorA;
                let genteB = contadorB;
                let genteC = contadorC;

                let pantallaA = document.getElementById("gente_A");
                let pantallaB = document.getElementById("gente_B");
                let pantallaC = document.getElementById("gente_C");


            if(genteA>0){
                pantallaA.innerHTML = "En la sala A hay: "+ "<br>" + genteA + " personas" ;
            }else{
                pantallaA.innerHTML = "Sin personas en la sala."
            }

            if(genteB>0){
                pantallaB.innerHTML = "En la sala B hay: "+ "<br>" + genteB + " personas" ;
            }else{
                pantallaB.innerHTML = "Sin personas en la sala."
            }

            if(genteC>0){
                pantallaC.innerHTML = "En la sala C hay: "+ "<br>" + genteC + " personas" ;
            }else{
                pantallaC.innerHTML = "Sin personas en la sala."
            }



    }
};
xhttp.open("GET", "api.json", true);
xhttp.send();


