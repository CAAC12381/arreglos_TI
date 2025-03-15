

    function areaRectan ( base, altura){
    return base * altura
    }
    function areaTrian ( base, altura){
        return base * altura /2
    }
    function areaCircu ( pi,radio){
        return 3.14  * (radio *radio)
    }
    function mostrarResultado(operacion, base ,altura){
        let resultado;
        switch(operacion){
          case "area rectangulo": 
            resultado = areaRectan (base,altura)
          break
          case "area triangulo":
            resultado = areaTrian (base,altura)
            break
            case "area circulo":
            resultado = areaCircu (pi,radio)
            break
          default:
          return "operacion no valida"


        }
        console.log("El resultado de: " + operacion + " entre " + altura + " y " + base + "es" + resultado )
        //console.log("El resultado de: " + operacion + " entre " + altura + " y " + base + "y" + division + "es" + resultado )
        //console.log("El resultado de: " + operacion + " entre " + radio + " y " + pi + "es" + resultado )
      }
      
      
      let altura = 20
      let base = 40
      let pi = 3.14
      let radio = 5
      let division = 400
      mostrarResultado("area rectangulo",altura, base )

      mostrarResultado("area triangulo",altura, base /2 )
      mostrarResultado("area circulo",pi, radio )
      