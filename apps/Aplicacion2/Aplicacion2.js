"use strict"


class Panel2  extends IntegratorConfigPanel {


    constructor() {


        super();        


    } 


    
    save() {


        console.log("Salvar 2")

    }
    cancel() {


        console.log("Cancelar 2")
  
        
    }

    createInitGUI() {

        return "<strong>Intefaz 2</strong>";  

    }



}


class Aplicacion2 extends  IntegratorApp{


    constructor() {

        super();
        this.appname="";


    }

 
    
      
init() {
    console.log("Aplicacion2 init")
    this.imageniniciar=new Image();
    this.imageniniciar.src=this.getURLResource("resources/images/starttk.jpg");
    this.imagenparar=new Image();
    this.imagenparar.src=this.getURLResource("resources/images/stoptk.jpg");
    this.panel2=new Panel2();

}







start() {

    console.log("Aplicacion2 start")
}


stop() {

    console.log("Aplicacion2 stop")
}

destroy() {

    console.log("Aplicacion2 destroy")
}

translate(language) {


    console.log("Aplicacion2 translate")


}


    getStartImage() {

      
        return this.imageniniciar;

    }


    getStopImage() {


        return this.imagenparar;

    }


    
    getConfigPanel() {


        return this.panel2;

    }




}