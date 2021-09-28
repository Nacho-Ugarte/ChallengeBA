var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var respuesta = JSON.parse(xhttp.responseText);

        var
            contadorA = 0,
            contadorB = 0,
            contadorC = 0;

        const recorreArray = arr => {
            let i = 0;
            while (i <= arr.length - 1) {

                if (arr[i].camera == "A") {
                    if (arr[i].entrance == 1) {
                        contadorA = contadorA + 1;

                    } else if (arr[i].entrance == 0 && contadorA >= 0) {
                        contadorA = contadorA - 1;
                    }
                }

                if (arr[i].camera = "B") {
                    if (arr[i].entrance == 1) {
                        contadorB = contadorB + 1;

                    } else if (arr[i].entrance == 0 && contadorB >= 0) {
                        contadorB = contadorB - 1;
                    }

                }

                if (arr[i].camera == "C" || arr[i].camera == "C2") {

                    if (arr[i].entrance == 1) {
                        contadorC = contadorC + 1;

                    } else if (arr[i].entrance == 0 && contadorC >= 0) {
                        contadorC = contadorC - 1;
                    }


                }
               i++;
                
            }
            console.log("En la sala A hay: " + contadorA + " personas");
                console.log("En la sala B hay: " + contadorB + " personas");
                console.log("En las salas C hay: " + contadorC + " personas");
     
        }
        recorreArray(respuesta);








    }
};
xhttp.open("GET", "api.json", true);
xhttp.send();