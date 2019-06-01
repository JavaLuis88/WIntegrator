"use strict"



class EsmeraldaLanguage extends IntegratorApp {


    init() {

        this.imageniniciar = null;
        this.imagenparar = null;
        this.language = null;
        this.pagecontent = null;
        this.contentpageparsed = null;
        this.imageniniciar = new Image();
        this.imageniniciar.src = this.getURLResource("/resources/images/lenguajeiniciar.jpg");
        this.imagenparar = new Image();
        this.imagenparar.src = this.getURLResource("/resources/images/lenguajeparar.jpg");
        this.pagecontent = this.parsePageFromFile("/resources/pages/EsmeraldaLanguage.html", false);

        EsmeraldaLanguage.prototype.obj = this;
    }


    start() {

       
        let languagelist;
        let languageelement;
        this.contentpageparsed = (new DOMParser().parseFromString(this.parsePage(this.pagecontent, this.language.language, this.language.accept, this.language.close), "application/xml"));

        languagelist = this.contentpageparsed.getElementById("slcesmeraldalanguage");


        this.contentpageparsed.getElementById("btnesmeraldalanguageaccept").setAttribute("onclick", "EsmeraldaLanguage.btnesmeraldalanguageacceptonclick()");
        this.contentpageparsed.getElementById("btnesmeraldalanguageclose").setAttribute("onclick", "EsmeraldaLanguage.btnesmeraldalanguagecloseonclick()");


        languageelement = document.createElement("option")
        languageelement.value = "es";
        languageelement.text = this.language.espanol;
        languagelist.appendChild(languageelement);
        languageelement = document.createElement("option")
        languageelement.value = "en";
        languageelement.text = this.language.english;
        if (this.getAppsContext().getUserConfig().getValue("language") == "en") {

            languageelement.defaultSelected = true;
            languageelement.selected = true;
        }
        languagelist.appendChild(languageelement);
        this.contentpageparsed = (new XMLSerializer()).serializeToString(this.contentpageparsed);



        this.setAppTitle(this.language.integratorlanguageselectapp);
        this.writePage(this.contentpageparsed);
        this.setVisible(true);

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

    static getInstance() {

        return EsmeraldaLanguage.prototype.obj;

    }
    static btnesmeraldalanguageacceptonclick() {

        let language;

        EsmeraldaLanguage.getInstance().getAppsContext().getUserConfig().setValue("language", document.getElementById("slcesmeraldalanguage").value);
        EsmeraldaLanguage.getInstance().getAppsContext().getUserConfig().store();
        try {

            WIntegratorLogic.prototype.currentlanguage.setCurrentLanguage(document.getElementById("slcesmeraldalanguage").value);
            language = WIntegratorLogic.prototype.currentlanguage.loadIntegrartorLanguage();
            WIntegratorLogic.prototype.language=language;

            for (let i = 0; i < WIntegratorLogic.prototype.systemapps.length; i++) {

                WIntegratorLogic.prototype.systemapps[i].translate(language);

            }


            for (let i = 0; i < WIntegratorLogic.prototype.appsconfigkeys.length; i++) {


                language = WIntegratorLogic.prototype.currentlanguage.loadAppLanguage(WIntegratorLogic.prototype.appsconfigkeys[i]);
                WIntegratorLogic.prototype.apps[WIntegratorLogic.prototype.appsconfigkeys[i]].translate(language);



            }

            EsmeraldaLanguage.getInstance().start();
            EsmeraldaLanguage.getInstance().setVisible(false);
            WIntegratorLogic.drawappsbuttons();
          
        }
        catch (e) {

         
            alert(WIntegratorLogic.prototype.language.loadlanguageerror);
            location.reload();
        }



    }



    static btnesmeraldalanguagecloseonclick() {


        EsmeraldaLanguage.getInstance().setVisible(false);



    }




}
EsmeraldaLanguage.prototype.obj = null;