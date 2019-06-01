"use strict"

class Panel  extends IntegratorConfigPanel {


    constructor() {


        super();        


    } 


    
    save() {


        console.log("Salvar")
      throw new OperationNotWok();

    }
    cancel() {


        console.log("Cancelar")
        throw new OperationNotWok();
  
        
    }

    createInitGUI() {

        return "<strong>Intefaz</strong>";  

    }



}


class Aplicacion extends IntegratorApp {


    constructor() {

        super();
        this.appname = "";


    }





    init() {
        console.log("Aplicacion init")
        this.imageniniciar = new Image();
        this.imageniniciar.src = this.getURLResource("resources/images/starttcl.jpg");
        this.imagenparar = new Image();
        this.imagenparar.src = this.getURLResource("resources/images/stoptcl.jpg");
        this.panel = new Panel();
       
    

    }





    start() {

        console.log("Aplicacion start")
    }


    stop() {

        console.log("Aplicacion stop")
    }

    destroy() {

        console.log("Aplicacion destroy")
    }

    translate(language) {


        console.log("Aplicacion translate")


    }


    getStartImage() {


        return this.imageniniciar;

    }


    getStopImage() {


        return this.imagenparar;

    }


    getConfigPanel() {


        return this.panel;

    }

    

}