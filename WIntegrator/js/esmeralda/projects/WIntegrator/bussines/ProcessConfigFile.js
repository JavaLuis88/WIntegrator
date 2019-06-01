"use strict"
//import AJAXObj from "./AJAXObj.js";
//import WIntegrator from "../WIntegratorLogic.js";
//import ConfigFileNovalidException  from "../exceptions/ConfigFileNovalidException.js";
class ProcessConfigFile {//class


    static loadMainConfig() {//loadMainConfig

        let ajaxobj;
        let retval;

        ajaxobj = AJAXObj.getAJAXObj()
        ajaxobj.open("GET", "WIntegrator/conf/config.json", false);
        ajaxobj.send(null);
        try {//try1

            retval = JSON.parse(ajaxobj.responseText);

            if (retval.urlbase.charAt(retval.urlbase.length - 1) != "/") {

                retval.urlbase = retval.urlbase + "/";

            }


            if (retval.appsfolder.charAt(retval.appsfolder.length - 1) != "/") {

                retval.appsfolder = retval.appsfolder + "/";

            }






        }//try1
        catch (e) {//catch1

            throw new ConfigFileNovalidException();

        }//catch1



        if (retval.urlbase == undefined || retval.urlbase == null || retval.urlbase.trim() == "" || retval.appsfolder == undefined || retval.appsfolder == null || retval.appsfolder.trim() == "" || retval.appsfileindex == undefined || retval.appsfileindex == null || retval.appsfileindex.trim() == "" || retval.preloaderclass == undefined || retval.preloaderclass == null || retval.preloaderfile == undefined || retval.preloaderfile == null || (retval.preloaderclass.trim() != "" && retval.preloaderfile.trim() == "" || retval.storeuserconfigkey == undefined || retval.storeuserconfigkey == null || retval.storeuserconfigkey.trim() == "")) {//if

            throw new ConfigFileNovalidException();


        }//if1




        return retval;

    }//loadMainConfig

    static loadAppsConfig() {


        let ajaxobj;
        let archives;
        let classes;
        let appname;
        let correcto;
        let retval;


        retval = new Array();

        ajaxobj = AJAXObj.getAJAXObj()
        ajaxobj.open("GET", WIntegratorLogic.prototype.mainconfig.urlbase + WIntegratorLogic.prototype.mainconfig.appsfileindex, false);
        ajaxobj.send(null);
        try {//try1

            retval = JSON.parse(ajaxobj.responseText);








        }//try1
        catch (e) {//catch1

            throw new ConfigFileNovalidException();

        }//catch1


        archives = new Array();
        classes = new Array();
        correcto = true;
        for (appname in retval) {


            if (appname.indexOf("/")==-1 && retval[appname].appfile != undefined && retval[appname].appfile != null && retval[appname].appfile.trim() != "" && retval[appname].appfile.trim().toUpperCase().indexOf("ESMERALDA")==-1 && retval[appname].appclass != undefined && retval[appname].appclass != null && retval[appname].appclass.trim() != "" && retval[appname].appclass.trim().toUpperCase().indexOf("ESMERALDA")==-1 && archives.indexOf(retval[appname].appfile.trim()) == -1 && classes.indexOf(retval[appname].appclass.trim()) == -1) {

                archives.push(retval[appname].appfile.trim());
                classes.push(retval[appname].appclass.trim());

            }
            else {

                correcto = false;

            }
        }


        if (correcto == false) {

            throw new ConfigFileNovalidException();

        }

        return retval;



    }





}//class

//export default ProcessConfigFile;