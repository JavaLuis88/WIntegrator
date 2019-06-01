//import WIntegrator from "../../WIntegratorLogic.js";



class IntegratorAppsContext extends AppsContext {


    constructor() {

        super();
        this.scriptsccsloads = new Array();

    }


    setAppTitle(title) {


        if (typeof(title) == "string" && title != "" && document.getElementById("apptitle") != null) {


            document.getElementById("apptitle").innerHTML = title;
        }


    }

    getAppTitle() {

        let retval;
        retval = null;

        if (document.getElementById("apptitle") != null) {


            retval = document.getElementById("apptitle").innerHTML;
        }


        return retval;
    }

    writePage(content, ...params) {


        if (typeof(content) == "string" && content != "" && document.getElementById("appbody") != null && typeof (content) == "string") {


            for (let i = 0; i < params.length; i++) {

                content = content.replace(new RegExp("{" + (i + 1) + "}", "g"), params[i]);

            }

        }

        document.getElementById("appbody").innerHTML = content;


    }



    parsePage(content,...params) {

        if (typeof(content) == "string" && content != "" && document.getElementById("appbody") != null && typeof (content) == "string") {


            for (let i = 0; i < params.length; i++) {

                content = content.replace(new RegExp("\\[" + (i + 1) + "]", "g"), params[i]);

            }
        }
            return content;
    }


    getAjax() {

/*
        let retval;
        retval = null;
        if (window.XMLHttpRequest) {//if1
            retval = new XMLHttpRequest();
        }//if1
        else if (window.ActiveXObject) {//elseif1-1
            retval = new ActiveXObject("Microsoft.XMLHTTP");
        }//elseif1-1


        return retval;
        */

        return AJAXObj.getAJAXObj();

    }

    getApps() {


       
        return WIntegratorLogic.prototype.apps;
   
        

    }
    getAppByName(appname) {

        let retval;
        retval = null;

        if (typeof (appname) == "string" && appname.trim() == "") {

            appname = appname.trim();


         


            if (WIntegratorLogic.prototype.apps[appname] != undefined && WIntegratorLogic.prototype.apps[appname] != null) {

                retval = WIntegratorLogic.prototype.apps[appname];

            }

        }
        return retval;

    }

    getAppsConfigs() {


         return WIntegratorLogic.prototype.appsconfig;
        


    }
    getAppConfigByName(appname) {


        let retval;
        retval = null;

        if (typeof (appname) == "string" && appname.trim() == "") {

            appname = appname.trim();
            if (WIntegratorLogic.prototype.appsconfig[appname] != undefined && WIntegratorLogic.prototype.appsconfig[appname] != null) {

                retval = WIntegratorLogic.prototype.appsconfig[appname];

            }
        }
        return retval;


    }


    getBang() {


        return WIntegratorLogic.prototype.bang;

    }

    getUserConfig() {


        return WIntegratorLogic.prototype.userconfig;


    }


    insertScript(script) {

        let taghead;
        let tag;
        let retval;

        retval = -1;

        retval = this.scriptsccsloads.length
        taghead = document.getElementsByTagName("head");

        if (typeof (script) == "string" && script.trim() != "") {

            tag = document.createElement("script");
            tag.setAttribute("data-scriptcssindex", retval);
            tag.setAttribute("data-status", 0);
            tag.setAttribute("id", "appscriptcss" + retval);
            tag.onload = function () {

                tag.setAttribute("data-status", 1);

            }

            tag.onerror = function () {

                tag.setAttribute("data-status", 2);


            }
            tag.setAttribute("src", script)
            taghead[0].appendChild(tag);
            this.scriptsccsloads[retval] = tag;


        }


        return retval;

    }



    insertCss(css) {

        let taghead;
        let tag;
        let retval;

        retval = -1;

        retval = this.scriptsccsloads.length
        taghead = document.getElementsByTagName("head");

        if (typeof (css) == "string" && css.trim() != "") {

            tag = document.createElement("link");
            tag.setAttribute("data-scriptcssindex", retval);
            tag.setAttribute("data-status", 0);
            tag.setAttribute("id", "appscriptcss" + retval);
            tag.onload = function () {

                tag.setAttribute("data-status", 1);

            }

            tag.onerror = function () {

                tag.setAttribute("data-status", 2);


            }

            tag.setAttribute("rel", "stylesheet");
            tag.setAttribute("type", "text/css");
            tag.setAttribute("href", css)
            taghead[0].appendChild(tag);
            this.scriptsccsloads[retval] = tag;


        }


        return retval;

    }



    getScriptCssstatus(scriptcssid) {

        let retval;
        retval = -1;


        try {



            retval = this.scriptsccsloads[scriptcssid].getAttribute("data-status")

            if (retval != 0 && retval != 1 && retval != 2) {


                retval = -1;

            }


        }
        catch (e) {

            retval = -1;

        }

        return retval;



    }


    static getIntegratorAppsContext() {


        if (IntegratorAppsContext.prototype.obj instanceof IntegratorAppsContext == false) {


            IntegratorAppsContext.prototype.obj = new IntegratorAppsContext();


        }

        return IntegratorAppsContext.prototype.obj;



    }



}
