"use strict";




class IntegratorApp {


    constructor() {

        this.status = 0;
        this.appname = "";


    }
    init() {


    }

    start() {


    }

    stop() {


    }

    destroy() {



    }

    translate(language) {


    }


    getConfigPanel() {


        return null;

    }


    getStartImage() {


        return null;

    }


    getStopImage() {


        return null;

    }



    getAppsContext() {

        return IntegratorAppsContext.getIntegratorAppsContext();


    }



    getURLResource(resource) {


        let retval;
        retval = "";


        if (typeof (resource) == "string" && resource.trim() != "") {
            resource = resource.trim();
            retval = WIntegratorLogic.prototype.mainconfig.urlbase + WIntegratorLogic.prototype.mainconfig.appsfolder + this.appname;

            if (resource.charAt(0) == "/") {

                retval = retval + resource;
            }
            else {

                retval = retval + "/" + resource;


            }
        }


        return retval;


    }





    setAppTitle(title) {

        this.getAppsContext().setAppTitle(title);

    }

    getAppTitle() {

        return this.getAppsContext().getAppTitle();



    }

    writePage(content, ...params) {

        this.getAppsContext().writePage(content, ...params);


    }



    writePageFromFile(file, parsejson, ...params) {

        let ajaxobj;
        let content;
        ajaxobj = this.getAjax();
        ajaxobj.open("GET", this.getURLResource(file), false)
        ajaxobj.send(null);
        try {//try1

            if (parsejson == true) {
                content = JSON.parse(ajaxobj.responseText);
            }
            else {
                content = ajaxobj.responseText;

            }

            this.getAppsContext().writePage(content, ...params);

        }//try1
        catch (e) {//catch1


        }//catch1




    }


    parsePage(content, ...params) {


        return this.getAppsContext().parsePage(content, ...params);



    }




    parsePageFromFile(file, parsejson, ...params) {

        let ajaxobj;
        let content;
        ajaxobj = this.getAjax();
        ajaxobj.open("GET", this.getURLResource(file), false)
        ajaxobj.send(null);
        try {//try1
            if (parsejson == true) {
                content = JSON.parse(ajaxobj.responseText);
            }
            else {
                content = ajaxobj.responseText;

            }
            content = this.getAppsContext().parsePage(content, ...params);

        }//try1
        catch (e) {//catch1

            content = null;

        }//catch1

        return content;


    }


    getAjax() {


        return this.getAppsContext().getAjax();

    }







    insertScript(script) {

        this.getAppsContext().insertScript(script)

    }



    insertCss(css) {

        this.getAppsContext().insertCss(css);


    }



    getScriptCssstatus(scriptcssid) {

        return this.getAppsContext().getScriptCssstatus(scriptcssid);


    }




    setVisible(visible) {

        $('#applayer').on('show.bs.modal', WIntegratorLogic.showapp)
        $('#applayer').on('hidden.bs.modal', WIntegratorLogic.hiddenapp);


        if (visible == true) {


            $('#applayer').modal({ backdrop: false });
            $('#applayer').modal("show");

        }
        else {

            $('#applayer').modal("hide");



        }

    }








}

