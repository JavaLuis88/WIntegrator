"use strict"
//import AJAXObj from "./AJAXObj.js";
class CheckFeatures {//class


    constructor(checkpage=true,ajaxrequired = true, webwokersrequired = true) {//constructor


        this.checkpage=checkpage
        this.ajaxrequired = ajaxrequired;
        this.webwokersrequired=webwokersrequired;




    }//contructor




    setCheckpage(checkpage = false) {//setCheckpage


        this.checkpage = checkpage;


    }//setCheckpage


    getCheckpage(ajaxrequired = false) {//getCheckpage


        this.ajaxrequired = ajaxrequired;


    }//getCheckpage

    CheckPage() {//checkpage

        let retval;
        let htmltag;
        let headtag;
        let bodytag;
        let articletag;
        let articletag2;
        let articletag3;
        retval=false;

        htmltag=document.getElementsByTagName("html")

        if (htmltag!=undefined && htmltag!=null && htmltag.length==1) {//if1

            headtag=htmltag[0].getElementsByTagName("head");
            bodytag=htmltag[0].getElementsByTagName("body");


            if (headtag!=undefined && headtag!=null && headtag.length==1 && bodytag!=undefined && bodytag!=null && bodytag.length==1) {//if2

                articletag=bodytag[0].querySelector("article#appmenu");                
                articletag2=bodytag[0].querySelector("article#applayer");                
                articletag3=bodytag[0].querySelector("article#errorlayer");                
  
                retval=(articletag!=undefined && articletag!=null && articletag2!=undefined && articletag2!=null && articletag3!=undefined && articletag3!=null);



            }//if2


        }//if1

        return retval;


    }//checkpage


    setAjaxrequired(ajaxrequired = false) {//setAjaxrequired


        this.ajaxrequired = ajaxrequired;


    }//setAjaxrequired


    getAjaxrequired(ajaxrequired = false) {//getAjaxrequired


        this.ajaxrequired = ajaxrequired;


    }//getAjaxrequired

    supportAjax() {//supportAjax


        return (AJAXObj.getAJAXObj()!=null);


    }//supportAjax




    setWebwokersrequired (webwokersrequired  = false) {//setWebwokersrequired


        this.webwokersrequired = webwokersrequired;


    }//setWebwokersrequired


    getWebwokersrequired() {//getWebwokersrequired


        return this.webwokersrequired;


    }//getWebwokersrequired

    supportWebWokers() {//supportWebWokers


        return (typeof(Worker) !== "undefined");


    }//supportWebWokers



    check() {

        return !((this.checkpage==true && this.CheckPage()==false) || (this.ajaxrequired==true && this.supportAjax()==false) || (this.webwokersrequired==true && this.supportWebWokers==false));


    }


    static getInstance() {//getInstance


        if (CheckFeatures.prototype.obj instanceof CheckFeatures == false) {//if


            CheckFeatures.prototype.obj = new CheckFeatures()


        }//if

        return CheckFeatures.prototype.obj;

    }//getInstance
}//class

//export default CheckFeatures;