"use strict"
class EsmeraldaConfig extends IntegratorApp {


    constructor() {

        super();
        this.appname = ""


    }


    init() {


        this.imageniniciar = null;
        this.imagenparar = null;
        this.language = null;
        this.pagecontent = null;
        this.contentpageparsed = null;
        this.selectedapp = "";

        this.imageniniciar = new Image();
        this.imageniniciar.src = this.getURLResource("/resources/images/configstart.jpg");
        this.imagenparar = new Image();
        this.imagenparar.src = this.getURLResource("/resources/images/configstop.jpg");
        this.pagecontent = this.parsePageFromFile("/resources/pages/EsmeraldaConfig.html", false);
        this.appswithmenu = new Array();


        EsmeraldaConfig.prototype.obj = this;
    }



    start() {

  


        let configlist;
        let configelement;
        let appswithmenu;

        appswithmenu = new Array()

        for (let i = 0; i < WIntegratorLogic.prototype.appsconfigkeys.length; i++) {

            if (WIntegratorLogic.prototype.apps[WIntegratorLogic.prototype.appsconfigkeys[i]].getConfigPanel() != undefined && WIntegratorLogic.prototype.apps[WIntegratorLogic.prototype.appsconfigkeys[i]].getConfigPanel() != null && (WIntegratorLogic.prototype.apps[WIntegratorLogic.prototype.appsconfigkeys[i]].getConfigPanel() instanceof IntegratorConfigPanel) == true) {
                appswithmenu.push(WIntegratorLogic.prototype.appsconfigkeys[i]);

            }

        }

        if (appswithmenu.length >= 1) {


            this.selectedapp = appswithmenu[0];





            this.contentpageparsed = (new DOMParser().parseFromString(this.parsePage(this.pagecontent, this.language.programtoconfigure, this.language.accept, this.language.cancel, this.language.close), "application/xml"));

            configlist = this.contentpageparsed.getElementById("slcesmeraldaconfig");
            configlist.setAttribute("onchange", "EsmeraldaConfig.slcesmeraldaconfigonchange()")

            this.contentpageparsed.getElementById("btnesmeraldaconfigaccept").setAttribute("onclick", "EsmeraldaConfig.btnesmeraldaconfigacceptonclick()");
            this.contentpageparsed.getElementById("btnesmeraldaconfigcancel").setAttribute("onclick", "EsmeraldaConfig.btnesmeraldaconfigcancelonclick()");
            this.contentpageparsed.getElementById("btnesmeraldaconfigclose").setAttribute("onclick", "EsmeraldaConfig.btnesmeraldaconfigcloseonclick()");




            for (let i = 0; i < appswithmenu.length; i++) {

                configelement = document.createElement("option");
                configelement.text = appswithmenu[i];
                configelement.value = appswithmenu[i];
                configlist.appendChild(configelement);


            }


            this.contentpageparsed.getElementById("pnlesmeraldaconfig").innerHTML = "";
            this.contentpageparsed.getElementById("pnlesmeraldaconfig").innerHTML = WIntegratorLogic.prototype.apps[this.selectedapp].getConfigPanel().createInitGUI();

            this.contentpageparsed = (new XMLSerializer()).serializeToString(this.contentpageparsed);



            this.setAppTitle(this.language.integratorconfigapp);
            this.writePage(this.contentpageparsed);
            this.setVisible(true);
        }
        else {
            alert(this.language.nohasgogconfigurationmodules)



        }

    }



    writeGUI(appname) {
        document.getElementById("pnlesmeraldaconfig").innerHTML = "";
        document.getElementById("pnlesmeraldaconfig").innerHTML = WIntegratorLogic.prototype.apps[appname].getConfigPanel().createInitGUI();
    }

    setSelectedpp(selectedapp) {

        if (selectedapp != this.selectedapp) {

            this.writeGUI(selectedapp);
            this.selectedapp = selectedapp;
        }

    }

    getSelectedpp() {

        return this.selectedapp;

    }


    stop() {

  
    }

    destroy() {

    }

    translate(language) {


        this.language = language;

    }


    getURLResource(resource) {


        let retval;
        retval = "";


        if (typeof (resource) == "string" && resource.trim() != "") {
            resource = resource.trim();
            retval = WIntegratorLogic.prototype.mainconfig.urlbase + "WIntegrator/js/esmeralda/projects/WIntegrator/integratorapps/" + this.appname;
            if (resource.charAt(0) == "/") {

                retval = retval + resource;
            }
            else {

                retval = retval + "/" + resource;


            }
        }


        return retval;


    }




    getStartImage() {


        return this.imageniniciar;

    }


    getStopImage() {


        return this.imagenparar;

    }

    getLanguage() {

        return this.language;
    }

    static getInstance() {

        return EsmeraldaConfig.prototype.obj;

    }


    static slcesmeraldaconfigonchange() {


        EsmeraldaConfig.getInstance().setSelectedpp(document.getElementById("slcesmeraldaconfig").value);





    }

    static btnesmeraldaconfigacceptonclick() {

        try {
            if (EsmeraldaConfig.getInstance().getSelectedpp() != undefined && EsmeraldaConfig.getInstance().getSelectedpp() != null && EsmeraldaConfig.getInstance().getSelectedpp().trim() != "") {

                WIntegratorLogic.prototype.apps[EsmeraldaConfig.getInstance().getSelectedpp()].getConfigPanel().save();

            }
        }
        catch (e) {
      
            alert(EsmeraldaConfig.getInstance().getLanguage().operationerror);

        }
    }


    static btnesmeraldaconfigcancelonclick() {
        try {
            if (EsmeraldaConfig.getInstance().getSelectedpp() != undefined && EsmeraldaConfig.getInstance().getSelectedpp() != null && EsmeraldaConfig.getInstance().getSelectedpp().trim() != "") {

                WIntegratorLogic.prototype.apps[EsmeraldaConfig.getInstance().getSelectedpp()].getConfigPanel().cancel();

            }
        }
        catch (e) {

            alert(EsmeraldaConfig.getInstance().getLanguage().operationerror);

        }

    }
    static btnesmeraldaconfigcloseonclick() {


        EsmeraldaConfig.getInstance().setVisible(false);


    }



}
EsmeraldaConfig.prototype.obj = null;