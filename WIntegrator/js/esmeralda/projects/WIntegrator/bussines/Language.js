"use strict"
//import AJAXObj from "./AJAXObj.js";
//import NoValidValueException from "../exceptions/NoValidValueException.js";
//import LoadinglanguageException from "../exceptions/LoadinglanguageException.js";


class Language {//class




    constructor(urlbase,appsfolder,currentlanguage="") {//constructor

        if (urlbase==undefined || urlbase==null || urlbase.trim()=="") {

            
            throw new NoValidValueException("urlbase value  is not valid");

        }

        else if (appsfolder==undefined || appsfolder==null || appsfolder.trim()=="") {

            
            throw new NoValidValueException("appsfolder value  is not valid");

        }
        else {




            this.urlbase=urlbase;
            this.appsfolder=appsfolder;


            if (currentlanguage!=undefined && currentlanguage!=null && currentlanguage.trim()!="") {

                this.currentlanguage=currentlanguage;


            }
            else {

                this.currentlanguage=navigator.language.split("-")[0];

            }




        }

    }//constructor





    setCurrentLanguage(currentlanguage) {


        if (currentlanguage!=undefined && currentlanguage!=null && currentlanguage.trim()!="") {

            this.currentlanguage=currentlanguage;


        }
        else {

            throw new NoValidValueException("currentlanguage value  is not valid");


        }

    }

    getCurrentLanguage() {


        return this.currentlanguage;

    }



    loadIntegrartorLanguage() {


        
        
        let ajaxobj;
        let language;
        let name;
        let retval;
       

        ajaxobj=AJAXObj.getAJAXObj()
        ajaxobj.open("GET",this.urlbase + "WIntegrator/languages/language.json",false);
        ajaxobj.send(null);
        try {//try1

            retval=JSON.parse(ajaxobj.responseText);
            
            

        }//try1
        catch(e) {//catch1

          throw new  LoadinglanguageException("default language can not be load");

        }//catch1
       

        ajaxobj.open("GET",this.urlbase +"WIntegrator/languages/language."+this.currentlanguage+".json",false);
        ajaxobj.send(null);
        try {//try1

            language=JSON.parse(ajaxobj.responseText);
            
            for  (name in language) {

                retval[name]=language[name];



            }
            

        }//try1
        catch(e) {//catch1


        }//catch1
       


        return retval;
        


    }



    loadAppLanguage(appname) {



        let ajaxobj;
        let language;
        let name;
        let retval;
       

        if (appname!=undefined && appname!=null && appname.trim()!="") {


            ajaxobj=AJAXObj.getAJAXObj()
            ajaxobj.open("GET",this.urlbase + this.appsfolder + appname + "/languages/language.json",false);
            ajaxobj.send(null);
            try {//try1
    
                retval=JSON.parse(ajaxobj.responseText);
                
                
    
            }//try1
            catch(e) {//catch1
    
              throw new  LoadinglanguageException("default app language can not be load");
    
            }//catch1
           
    
            ajaxobj.open("GET",this.urlbase + this.appsfolder+ appname +"/languages/language."+this.currentlanguage+".json",false);
            ajaxobj.send(null);
            try {//try1
                
                language=JSON.parse(ajaxobj.responseText);
                
                for  (name in language ) {
    
                    retval[name]=language[name];
    
    
    
                }
                
    
            }//try1
            catch(e) {//catch1
    


    
            }//catch1
           
    




        }


       else {

            throw new  LoadinglanguageException("appanme value is not valid");


       }

        return retval;
        

            


    }





}//class


//export default Language;