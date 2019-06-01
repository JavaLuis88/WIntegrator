"use strict"
//import CheckFeatures from "./bussines/CheckFeatures.js";
//import ProcessConfigFile from "./bussines/ProcessConfigFile.js";
//import Language from "./bussines/Language.js";
//import UserConfig from "./bussines/UserConfig.js";


class WIntegratorLogic {//class




    static initpage() {//initpage

        let features;
        let taghead;
        let tagbody;
        let tag;


        WIntegratorLogic.prototype.modulestoload = new Array();
        WIntegratorLogic.prototype.modulestoload[0] = "WIntegrator/js/esmeralda/projects/WIntegrator/exceptions/NoValidValueException.js"
        WIntegratorLogic.prototype.modulestoload[1] = "WIntegrator/js/esmeralda/projects/WIntegrator/exceptions/PreLoaderException.js"
        WIntegratorLogic.prototype.modulestoload[2] = "WIntegrator/js/esmeralda/projects/WIntegrator/exceptions/LoadinglanguageException.js"
        WIntegratorLogic.prototype.modulestoload[3] = "WIntegrator/js/esmeralda/projects/WIntegrator/exceptions/ConfigFileNovalidException.js"
        WIntegratorLogic.prototype.modulestoload[4] = "WIntegrator/js/esmeralda/projects/WIntegrator/exceptions/OperationNotWorkException.js"
        WIntegratorLogic.prototype.modulestoload[5] = "WIntegrator/js/esmeralda/projects/WIntegrator/exceptions/AppNoValidException.js"
        WIntegratorLogic.prototype.modulestoload[6] = "WIntegrator/js/esmeralda/projects/WIntegrator/apps/Preloader.js";
        WIntegratorLogic.prototype.modulestoload[7] = "WIntegrator/js/esmeralda/projects/WIntegrator/apps/AppsContext.js";
        WIntegratorLogic.prototype.modulestoload[8] = "WIntegrator/js/esmeralda/projects/WIntegrator/apps/IntegratorConfigPanel.js";
        WIntegratorLogic.prototype.modulestoload[9] = "WIntegrator/js/esmeralda/projects/WIntegrator/bussines/IntegratorAppsContext.js";
        WIntegratorLogic.prototype.modulestoload[10] = "WIntegrator/js/esmeralda/projects/WIntegrator/bussines/Cookies.js";
        WIntegratorLogic.prototype.modulestoload[11] = "WIntegrator/js/esmeralda/projects/WIntegrator/bussines/Language.js";
        WIntegratorLogic.prototype.modulestoload[12] = "WIntegrator/js/esmeralda/projects/WIntegrator/bussines/ProcessConfigFile.js";
        WIntegratorLogic.prototype.modulestoload[13] = "WIntegrator/js/esmeralda/projects/WIntegrator/bussines/UserConfig.js";
        WIntegratorLogic.prototype.modulestoload[14] = "WIntegrator/js/esmeralda/projects/WIntegrator/apps/IntegratorApp.js";
        WIntegratorLogic.prototype.modulestoload[15] = "WIntegrator/js/esmeralda/projects/WIntegrator/integratorapps/EsmeraldaConfig/EsmeraldaConfig.js";
        WIntegratorLogic.prototype.modulestoload[16] = "WIntegrator/js/esmeralda/projects/WIntegrator/integratorapps/EsmeraldaLanguage/EsmeraldaLanguage.js";
        WIntegratorLogic.prototype.modulestoload[17] = "WIntegrator/vendor/bootstrap/css/bootstrap.min.css";
        WIntegratorLogic.prototype.modulestoload[18] = "WIntegrator/vendor/jquery/jquery-3.4.0.min.js";
        WIntegratorLogic.prototype.modulestoload[19] = "WIntegrator/vendor/bootstrap/js/bootstrap.js";








        ///////////Librerias/////////////


        //let currentlangue;
        //let language;




        features = CheckFeatures.getInstance();
        features.setWebwokersrequired(false);
        if (features.check() == true) {//if1

            taghead = document.getElementsByTagName("head");
            tagbody = document.getElementsByTagName("body");


            if (WIntegratorLogic.prototype.modulestoload.length > 0) {

                WIntegratorLogic.prototype.loadmodulescount = 0;
                setTimeout(WIntegratorLogic.insertsysapssmodule, 500);
            }
            else {
                WIntegratorLogic.initpage2();
            }




        }//if1
        else {//else1


            tagbody = document.getElementsByTagName("body");
            if (tagbody != undefined && tagbody != null && tagbody.length >= 1) {//if2

                tagbody[0].innerHTML = "Browser has not got necesary features or page format is not valid";


            }//if2
            else {//else2
                alert("Browser has not got necesary features or page format is not valid");

            }//else2


        }//else1

    }//initpage


    static initcomponets() {


        let languageapp;
        let creado;
        let i;



        creado = false;
        while (creado == false) {
            creado = true;
            i = 0;
            while (i < WIntegratorLogic.prototype.appsconfigkeys.length && creado == true) {


                languageapp = WIntegratorLogic.prototype.currentlanguage.loadAppLanguage(WIntegratorLogic.prototype.appsconfigkeys[i]);

                try {

                    WIntegratorLogic.prototype.apps[WIntegratorLogic.prototype.appsconfigkeys[i]] = eval("new " + WIntegratorLogic.prototype.appsconfig[WIntegratorLogic.prototype.appsconfigkeys[i]].appclass + "();")
                    WIntegratorLogic.prototype.apps[WIntegratorLogic.prototype.appsconfigkeys[i]].appname = WIntegratorLogic.prototype.appsconfigkeys[i];
                    WIntegratorLogic.prototype.apps[WIntegratorLogic.prototype.appsconfigkeys[i]].init();
                    WIntegratorLogic.prototype.apps[WIntegratorLogic.prototype.appsconfigkeys[i]].translate(languageapp);
                    i++;
                }
                catch (e) {

                    creado = false;

                }

                if (WIntegratorLogic.prototype.apps.length >= 1 && (WIntegratorLogic.prototype.apps[WIntegratorLogic.prototype.appsconfigkeys[i]] instanceof IntegratorApp) == false) {


                    throw new AppNoValidException();

                }


            }
        }

        WIntegratorLogic.prototype.systemapps[0].init();
        WIntegratorLogic.prototype.systemapps[0].translate(WIntegratorLogic.prototype.language);
        WIntegratorLogic.prototype.systemapps[1].init();
        WIntegratorLogic.prototype.systemapps[1].translate(WIntegratorLogic.prototype.language);
        WIntegratorLogic.drawappsbuttons();


    }


    static drawappsbuttons() {


        let taghead;
        let tag;
        let tag2;
        let tag3;
        let tag4;
        let tag5;
        let tag7;
        let creado;
        let i;
        let languageapp;





        taghead = document.getElementsByTagName("head");

        /*
                creado = false;
                while (creado == false) {
                    creado = true;
                    i = 0;
                    while (i < WIntegratorLogic.prototype.appsconfigkeys.length && creado == true) {
        
        
                        try {
        
                            WIntegratorLogic.prototype.apps[WIntegratorLogic.prototype.appsconfigkeys[i]] = eval("new " + WIntegratorLogic.prototype.appsconfig[WIntegratorLogic.prototype.appsconfigkeys[i]].appclass + "();")
        
                            WIntegratorLogic.prototype.apps[WIntegratorLogic.prototype.appsconfigkeys[i]].appname = WIntegratorLogic.prototype.appsconfigkeys[i];
                            i++;
                        }
                        catch (e) {
        
                            creado = false;
        
                        }
        
                        if (WIntegratorLogic.prototype.apps.length>=1 && (WIntegratorLogic.prototype.apps[WIntegratorLogic.prototype.appsconfigkeys[i]] instanceof IntegratorApp)==false) {
        
        
                            throw new AppNoValidException();
        
                        }
        
        
                    }
                }
        
        */

        document.getElementById("appmenu").style.display = "none";
        document.getElementById("appmenu").innerHTML = "";


        tag = document.createElement("div");
        tag.setAttribute("class", "table-responsive-sm table-responsive-md table-responsive-lg table-responsive-xl");
        tag2 = document.createElement("table");
        tag2.setAttribute("class", "table");
        tag2.setAttribute("border", "2");


        tag3 = document.createElement("tr");
        tag4 = document.createElement("td");
        tag5 = document.createElement("a");
        tag5.setAttribute("href", "javascript:void(0);");
        tag5.setAttribute("data-isstart", "false");
        tag5.setAttribute("data-issysapp", "true");
        tag5.setAttribute("id", "sysapp0");
        tag5.setAttribute("data-toggle", "tooltip");
        tag5.setAttribute("data-placement", "top");
        tag5.setAttribute("title", WIntegratorLogic.prototype.language["integratorconfigapp"])
        //WIntegratorLogic.prototype.systemapps[0].init();
        //WIntegratorLogic.prototype.systemapps[0].translate(WIntegratorLogic.prototype.language);
        tag5.app = WIntegratorLogic.prototype.systemapps[0];
        WIntegratorLogic.prototype.systemapps[0].applink = tag5;
        tag5.onclick = WIntegratorLogic.startstopapp;


        tag7 = document.createElement("p");
        tag7.setAttribute("id", "txtsysapp0");
        tag7.setAttribute("class", "text-center");
        tag7.appendChild(document.createTextNode(WIntegratorLogic.prototype.language["integratorconfigapp"]));
        tag5.appendChild(tag7);

        tag7 = document.createElement("img");
        tag7.setAttribute("id", "imgsysapp0");
        tag7.setAttribute("alt", WIntegratorLogic.prototype.language["integratorconfigapp"]);

        if (WIntegratorLogic.prototype.systemapps[0].getStopImage() != null) {
            tag7.setAttribute("src", WIntegratorLogic.prototype.systemapps[0].getStopImage().src);
        }
        else {
            tag7.setAttribute("src", WIntegratorLogic.prototype.stopimage.src);


        }
        tag7.setAttribute("class", "img-fluid mx-auto d-block");
        tag5.appendChild(tag7);
        tag4.appendChild(tag5);
        tag3.appendChild(tag4);

        tag4 = document.createElement("td");
        tag5 = document.createElement("a");
        tag5.setAttribute("href", "javascript:void(0);");
        tag5.setAttribute("data-isstart", "false");
        tag5.setAttribute("data-issysapp", "true");
        tag5.setAttribute("id", "sysapp1");
        tag5.setAttribute("data-toggle", "tooltip");
        tag5.setAttribute("data-placement", "top");
        tag5.setAttribute("title", WIntegratorLogic.prototype.language["integratorlanguageselectapp"])
        //WIntegratorLogic.prototype.systemapps[1].init();
        //WIntegratorLogic.prototype.systemapps[1].translate(WIntegratorLogic.prototype.language);
        tag5.app = WIntegratorLogic.prototype.systemapps[1];
        WIntegratorLogic.prototype.systemapps[1].applink = tag5;
        tag5.onclick = WIntegratorLogic.startstopapp;
        tag7 = document.createElement("p");
        tag7.setAttribute("id", "txtsysapp1");
        tag7.setAttribute("class", "text-center");
        tag7.appendChild(document.createTextNode(WIntegratorLogic.prototype.language["integratorlanguageselectapp"]));
        tag5.appendChild(tag7);

        tag7 = document.createElement("img");
        tag7.setAttribute("id", "imgsysapp1");
        tag7.setAttribute("alt", WIntegratorLogic.prototype.language["integratorlanguageselectapp"]);

        if (WIntegratorLogic.prototype.systemapps[1].getStopImage() != null) {
            tag7.setAttribute("src", WIntegratorLogic.prototype.systemapps[1].getStopImage().src);
        }
        else {
            tag7.setAttribute("src", WIntegratorLogic.prototype.stopimage.src);


        }
        tag7.setAttribute("class", "img-fluid mx-auto d-block");
        tag5.appendChild(tag7);
        tag4.appendChild(tag5);
        tag3.appendChild(tag4);
        tag2.appendChild(tag3);
        tag3 = null;

        for (i = 0; i < WIntegratorLogic.prototype.appsconfigkeys.length; i++) {


            languageapp = WIntegratorLogic.prototype.currentlanguage.loadAppLanguage(WIntegratorLogic.prototype.appsconfigkeys[i]);

            if (i % 2 == 0) {


                tag3 = document.createElement("tr");
                tag4 = document.createElement("td");
                tag5 = document.createElement("a");
                tag5.setAttribute("href", "javascript:void(0);");
                tag5.setAttribute("data-isstart", "false");
                tag5.setAttribute("data-issysapp", "false");
                tag5.setAttribute("id", "usrapp" + i);
                tag5.setAttribute("data-toggle", "tooltip");
                tag5.setAttribute("data-placement", "top");
                tag5.setAttribute("title", languageapp["appname"])
                //WIntegratorLogic.prototype.apps[WIntegratorLogic.prototype.appsconfigkeys[i]].init();
                //WIntegratorLogic.prototype.apps[WIntegratorLogic.prototype.appsconfigkeys[i]].translate(languageapp);
                tag5.app = WIntegratorLogic.prototype.apps[WIntegratorLogic.prototype.appsconfigkeys[i]];
                WIntegratorLogic.prototype.apps[WIntegratorLogic.prototype.appsconfigkeys[i]].applink = tag5;
                tag5.onclick = WIntegratorLogic.startstopapp;

                tag7 = document.createElement("p");
                tag7.setAttribute("id", "txtusrapp" + i);
                tag7.setAttribute("class", "text-center");
                tag7.appendChild(document.createTextNode(languageapp["appname"]));
                tag5.appendChild(tag7);

                tag7 = document.createElement("img");
                tag7.setAttribute("id", "imgusrapp" + i);
                tag7.setAttribute("alt", languageapp["appname"]);

                if (WIntegratorLogic.prototype.apps[WIntegratorLogic.prototype.appsconfigkeys[i]].getStopImage() != null) {
                    tag7.setAttribute("src", WIntegratorLogic.prototype.apps[WIntegratorLogic.prototype.appsconfigkeys[i]].getStopImage().src);
                }
                else {
                    tag7.setAttribute("src", WIntegratorLogic.prototype.stopimage.src);


                }
                tag7.setAttribute("class", "img-fluid mx-auto d-block");
                tag5.appendChild(tag7);
                tag4.appendChild(tag5);
                tag3.appendChild(tag4);



            }
            else {


                tag4 = document.createElement("td");
                tag5 = document.createElement("a");
                tag5.setAttribute("href", "javascript:void(0);");
                tag5.setAttribute("data-isstart", "false");
                tag5.setAttribute("data-issysapp", "false");
                tag5.setAttribute("id", "usrapp" + i);
                tag5.setAttribute("data-toggle", "tooltip");
                tag5.setAttribute("data-placement", "top");
                tag5.setAttribute("title", languageapp["appname"])
                //WIntegratorLogic.prototype.apps[WIntegratorLogic.prototype.appsconfigkeys[i]].init();
                //WIntegratorLogic.prototype.apps[WIntegratorLogic.prototype.appsconfigkeys[i]].translate(languageapp);
                tag5.app = WIntegratorLogic.prototype.apps[WIntegratorLogic.prototype.appsconfigkeys[i]];
                WIntegratorLogic.prototype.apps[WIntegratorLogic.prototype.appsconfigkeys[i]].applink = tag5;
                tag5.onclick = WIntegratorLogic.startstopapp;

                tag7 = document.createElement("p");
                tag7.setAttribute("id", "txtusrapp" + i);
                tag7.setAttribute("class", "text-center");
                tag7.appendChild(document.createTextNode(languageapp["appname"]));
                tag5.appendChild(tag7);

                tag7 = document.createElement("img");
                tag7.setAttribute("id", "imgusrapp" + i);
                tag7.setAttribute("alt", languageapp["appname"]);

                if (WIntegratorLogic.prototype.apps[WIntegratorLogic.prototype.appsconfigkeys[i]].getStopImage() != null) {
                    tag7.setAttribute("src", WIntegratorLogic.prototype.apps[WIntegratorLogic.prototype.appsconfigkeys[i]].getStopImage().src);
                }
                else {
                    tag7.setAttribute("src", WIntegratorLogic.prototype.stopimage.src);


                }
                tag7.setAttribute("class", "img-fluid mx-auto d-block");
                tag5.appendChild(tag7);
                tag4.appendChild(tag5);
                tag3.appendChild(tag4);
                tag2.appendChild(tag3);
                tag3 = null;


            }


        }

        if (tag3 != null) {
            tag2.appendChild(tag3);

        }

        tag.appendChild(tag2);
        document.getElementById("appmenu").appendChild(tag);
        document.getElementById("appmenu").style.display = "block";


    }




    static insertsysapssmodule() {

        let taghead;
        let tag;


        taghead = document.getElementsByTagName("head");

        if (WIntegratorLogic.prototype.modulestoload[WIntegratorLogic.prototype.loadmodulescount].substr(WIntegratorLogic.prototype.modulestoload[WIntegratorLogic.prototype.loadmodulescount].length - 3).toUpperCase() == ".JS") {


            tag = document.createElement("script");
            tag.setAttribute("type", "text/javascript");
            tag.setAttribute("src", WIntegratorLogic.prototype.modulestoload[WIntegratorLogic.prototype.loadmodulescount]);
            tag.onload = WIntegratorLogic.loadsysmodules;
            taghead[0].appendChild(tag);

        }
        else {

            tag = document.createElement("link");
            tag.setAttribute("rel", "stylesheet");
            tag.setAttribute("type", "text/css");
            tag.setAttribute("href", WIntegratorLogic.prototype.modulestoload[WIntegratorLogic.prototype.loadmodulescount]);
            tag.onload = WIntegratorLogic.loadsysmodules;
            taghead[0].appendChild(tag);

        }
    }



    static loadsysmodules() {


        WIntegratorLogic.prototype.loadmodulescount++;
        if (WIntegratorLogic.prototype.loadmodulescount >= WIntegratorLogic.prototype.modulestoload.length) {
            delete WIntegratorLogic.prototype.loadmodulescount;
            delete WIntegratorLogic.prototype.modulestoload;
            WIntegratorLogic.initpage2();

        }
        else {

            setTimeout(WIntegratorLogic.insertsysapssmodule, 500);

        }


    }


    static initpage2() {

        let taghead;
        let tag;

        taghead = document.getElementsByTagName("head");


        WIntegratorLogic.prototype.mainconfig = ProcessConfigFile.loadMainConfig();
        WIntegratorLogic.prototype.userconfig = UserConfig.getInstance();




        document.getElementById("appmenu").style.display = "none";

        document.getElementById("applayer").setAttribute("class", "modal fade");
        document.getElementById("applayer").setAttribute("tabindex", "-1");
        document.getElementById("applayer").setAttribute("role", "dialog");
        document.getElementById("applayer").setAttribute("aria-labelledby", "AppLayer");
        document.getElementById("applayer").setAttribute("aria-hidden", "true");

        tag = "<div class=\"modal-dialog modal-dialog-centered\" role=\"document\">";
        tag = tag + "<div class=\"modal-content\">";
        tag = tag + "<div class=\"modal-header\">";
        tag = tag + "<h5 class=\"modal-title\" id=\"apptitle\"></h5>";
        tag = tag + "<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">";
        tag = tag + "<span aria-hidden=\"true\">&times;</span>";
        tag = tag + "</button>";
        tag = tag + "</div>";
        tag = tag + "<div class=\"modal-body\" id=\"appbody\">";
        tag = tag + "</div>";
        tag = tag + "</div>";
        tag = tag + "</div>";

        document.getElementById("applayer").innerHTML = tag;
        document.getElementById("errorlayer").style.display = "none";

        WIntegratorLogic.prototype.startimage = new Image();
        WIntegratorLogic.prototype.startimage.src = "WIntegrator/resources/images/start.jpg";

        WIntegratorLogic.prototype.stopimage = new Image();
        WIntegratorLogic.prototype.stopimage.src = "WIntegrator/resources/images/stop.jpg";

        WIntegratorLogic.prototype.currentlanguage = new Language(WIntegratorLogic.prototype.mainconfig.urlbase, WIntegratorLogic.prototype.mainconfig.appsfolder, "");
        try {
            WIntegratorLogic.prototype.currentlanguage.setCurrentLanguage(WIntegratorLogic.prototype.userconfig.getValue("language"));
        }
        catch (e) {


        }

        WIntegratorLogic.prototype.language = WIntegratorLogic.prototype.currentlanguage.loadIntegrartorLanguage();




        if (WIntegratorLogic.prototype.mainconfig.preloaderclass != undefined && WIntegratorLogic.prototype.mainconfig.preloaderclass != null && WIntegratorLogic.prototype.mainconfig.preloaderclass.trim() != "" && WIntegratorLogic.prototype.mainconfig.preloaderfile != undefined && WIntegratorLogic.prototype.mainconfig.preloaderfile != null && WIntegratorLogic.prototype.mainconfig.preloaderfile.trim() != "") {


            tag = document.createElement("script");
            tag.onload = function () {

                WIntegratorLogic.preloadstep();



            }
            tag.onerror = function () {

                throw new PreloderException(WIntegratorLogic.prototype.language.loadapperror);


            }
            tag.setAttribute("type", "text/javascript");
            tag.setAttribute("src", WIntegratorLogic.prototype.mainconfig.preloaderfile);
            taghead[0].appendChild(tag);


        }
        else {

            WIntegratorLogic.loadappsstep();


        }



    }


    static preloadstep() {


        let preloader
        try {


            preloader = eval("new " + WIntegratorLogic.prototype.mainconfig.preloaderclass + "()");
        }
        catch (e) {


            setTimeout(WIntegratorLogic.preloadstep, 500);

        }


        if ((preloader instanceof Preloader) == true) {

            preloader.initintegrator(WIntegratorLogic.prototype.bang);
            WIntegratorLogic.loadappsstep();

        }
        else {

            console.error(WIntegratorLogic.prototype.language.preloadernotvalid);


        }




    }




    static loadappsstep() {


        let taghead;
        let tag;
        let creado;





        taghead = document.getElementsByTagName("head");


        creado = false;

        while (creado == false) {
            try {

                WIntegratorLogic.prototype.systemapps[0] = new EsmeraldaConfig();
                WIntegratorLogic.prototype.systemapps[0].appname = "EsmeraldaConfig";
                WIntegratorLogic.prototype.systemapps[1] = new EsmeraldaLanguage();
                WIntegratorLogic.prototype.systemapps[1].appname = "EsmeraldaLanguage";
                creado = true;
            }
            catch (e) {



            }
        }






        WIntegratorLogic.prototype.appsconfig = ProcessConfigFile.loadAppsConfig();


        for (let appkey in WIntegratorLogic.prototype.appsconfig) {
            WIntegratorLogic.prototype.appsconfigkeys.push(appkey);


        }


        if (WIntegratorLogic.prototype.appsconfigkeys.length > 0) {





            WIntegratorLogic.prototype.appsloadnumber = 0;
            window.setTimeout(WIntegratorLogic.insertuserpaddmodules, 500);





        }
        else {
            WIntegratorLogic.initcomponets();
            //WIntegratorLogic.prototype.checkappinterval = setInterval(WIntegratorLogic._checkappstatus(), 1000);



        }


    }





    static insertuserpaddmodules() {



        let taghead;
        let tag;
        let modulepath;


        taghead = document.getElementsByTagName("head");


        modulepath = WIntegratorLogic.prototype.mainconfig.urlbase + WIntegratorLogic.prototype.mainconfig.appsfolder + WIntegratorLogic.prototype.appsconfigkeys[WIntegratorLogic.prototype.appsloadnumber] + "/" + WIntegratorLogic.prototype.appsconfig[WIntegratorLogic.prototype.appsconfigkeys[WIntegratorLogic.prototype.appsloadnumber]].appfile;
        tag = document.createElement("script");
        tag.setAttribute("type", "text/javascript");
        tag.setAttribute("src", modulepath);
        tag.onload = WIntegratorLogic.loaduserappsmodules;
        taghead[0].appendChild(tag);



    }



    static loaduserappsmodules() {

        WIntegratorLogic.prototype.appsloadnumber++;
        if (WIntegratorLogic.prototype.appsloadnumber < WIntegratorLogic.prototype.appsconfigkeys.length) {

            window.setTimeout(WIntegratorLogic.insertuserpaddmodules, 500);



        }
        else {

            WIntegratorLogic.initcomponets();
            //WIntegratorLogic.prototype.checkappinterval = setInterval(WIntegratorLogic._checkappstatus(), 1000);



        }

    }



    static startstopapp() {

        let appnumber;
        let imageprefix;
        appnumber = parseInt(this.getAttribute("id").substr(6), 10);



        if (this.getAttribute("data-issysapp") == "true") {


            imageprefix = "imgsysapp";

        }
        else {


            imageprefix = "imgusrapp";
        }


        document.getElementById("apptitle").innerHTML = "";
        document.getElementById("appbody").innerHTML = "";
        if (this.getAttribute("data-isstart") == "true") {


            this.app.stop();
            this.setAttribute("data-isstart", "false")
            if (this.app.getStopImage() != null) {

                document.getElementById(imageprefix + appnumber).src = this.app.getStopImage().src;


            }
            else {


                document.getElementById(imageprefix + appnumber).src = WIntegratorLogic.prototype.stopimage.src;

            }
        }
        else {

            this.app.start();
            this.setAttribute("data-isstart", "true")
            if (this.app.getStartImage() != null) {

                document.getElementById(imageprefix + appnumber).src = this.app.getStartImage().src;


            }
            else {


                document.getElementById(imageprefix + appnumber).src = WIntegratorLogic.prototype.startimage.src;

            }


        }
        WIntegratorLogic.prototype.currentapp = this.app;



    }


    static unloadpage() {



        for (let i = 0; i < WIntegratorLogic.prototype.appsconfigkeys.length; i++) {

            try {


                WIntegratorLogic.prototype.apps[WIntegratorLogic.prototype.appsconfigkeys[i]].stop();
                WIntegratorLogic.prototype.apps[WIntegratorLogic.prototype.appsconfigkeys[i]].destroy();


            }
            catch (e) {


            }

        }




        for (let i = 0; i < WIntegratorLogic.prototype.systemapps.length; i++) {

            try {


                WIntegratorLogic.prototype.systemapps[i].stop();
                WIntegratorLogic.prototype.systemapps[i].destroy();


            }
            catch (e) {


            }

        }




        try {


            WIntegratorLogic.prototype.userconfig.store();


        }
        catch (e) {


        }





    }

    static showapp() {





    }


    static hiddenapp() {


        if ((WIntegratorLogic.prototype.currentapp != undefined && WIntegratorLogic.prototype.currentapp != null && WIntegratorLogic.prototype.currentapp instanceof IntegratorApp) == true) {








            let appnumber;
            let imageprefix;
            appnumber = parseInt(WIntegratorLogic.prototype.currentapp.applink.getAttribute("id").substr(6), 10);



            if (WIntegratorLogic.prototype.currentapp.applink.getAttribute("data-issysapp") == "true") {


                imageprefix = "imgsysapp";

            }
            else {


                imageprefix = "imgusrapp";
            }



            WIntegratorLogic.prototype.currentapp.stop();
            WIntegratorLogic.prototype.currentapp.applink.setAttribute("data-isstart", "false")
            if (WIntegratorLogic.prototype.currentapp.getStopImage() != null) {

                document.getElementById(imageprefix + appnumber).src = WIntegratorLogic.prototype.currentapp.getStopImage().src;


            }
            else {


                document.getElementById(imageprefix + appnumber).src = WIntegratorLogic.prototype.stopimage.src;

            }


        }


    }

/*
    static _checkappstatus() {


        for (let i = 0; i < WIntegratorLogic.prototype.systemapps.length; i++) {

            if (WIntegratorLogic.prototype.systemapps[i].getStatus() == IntegratorApp.prototype.ISENABLE) {
                console.log("1 " + i + " Activado");

            }
            else {
                console.log("1 " + i + " Desactivado");


            }


        }



        for (let i = 0; i < WIntegratorLogic.prototype.appsconfigkeys.length; i++) {



            if (WIntegratorLogic.prototype.apps[WIntegratorLogic.prototype.appsconfigkeys[i]].getStatus() == IntegratorApp.prototype.ISENABLE) {
                console.log("2 " + i + " Activado");

            }
            else {
                console.log("2 " + i + " Desactivado");


            }

        }

    }
*/




}//class
//export default WIntegrator;
WIntegratorLogic.prototype.mainconfig = null;
WIntegratorLogic.prototype.startimage = null;
WIntegratorLogic.prototype.stopimage = null;
WIntegratorLogic.prototype.currentlanguage = null;
WIntegratorLogic.prototype.language = new Array();
WIntegratorLogic.prototype.bang = new Array();
WIntegratorLogic.prototype.userconfig = null;
WIntegratorLogic.prototype.currentapp = null;
WIntegratorLogic.prototype.appsconfig = new Array();
WIntegratorLogic.prototype.appsconfigkeys = new Array();
WIntegratorLogic.prototype.appsloadnumber = 0;
WIntegratorLogic.prototype.apps = new Array();
WIntegratorLogic.prototype.systemapps = new Array();
WIntegratorLogic.prototype.checkappinterval = 0;
window.onload = WIntegratorLogic.initpage;
window.onunload = WIntegratorLogic.unloadpage;


