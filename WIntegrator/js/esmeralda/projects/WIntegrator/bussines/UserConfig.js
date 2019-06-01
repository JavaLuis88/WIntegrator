//import WIntegrator from '../WIntegratorLogic.js';
//import Cookies from "./Cookies.js"
class UserConfig {

    constructor() {

        this.userconfig = new Object();
        let config
        config=null;

        
        if (this.hasgotLocalStorage()==true) {


            config = window.localStorage.getItem(WIntegratorLogic.prototype.mainconfig.storeuserconfigkey);

        }
        else if (this.hasgotCookie()==true){

            config = Cookies.getInstance().getCookie(WIntegratorLogic.prototype.mainconfig.storeuserconfigkey);


        }

        try {


            config = JSON.parse(config);

        }
        catch (e) {

            config = null;

        }


        if (config != null) {


            this.userconfig = config;

        }

    }


    getValue(key) {

        let retval;
        retval=undefined;


        if (key != undefined && key != null && key.trim() != "")   {
        
            retval=this.userconfig[key];
        }


        return retval;
    }

    setValue(key, value) {


        let retval;
        retval=false;


        if (key != undefined && key != null && key.trim() != "")   {
        
            this.userconfig[key]=value;
            retval=true;
        }


        return retval;


    }


    keys() {

        let retval;
        let key;
        retval=new Array();
        for (key in this.userconfig) {

            retval.push(key);

        } 

        return retval;

    }


    deleteValue(key) {


        let retval;
        retval=false;

        if (key != undefined && key != null && key.trim() != "" && this.keys().indexOf(key)!=-1)   {
        
            delete this.userconfig[key];
            retval=true;

        }


        return retval;


    }

    hasgotLocalStorage() {


        let retval;
        retval=false;

        if (window.localStorage) {


            retval=true;

        }    
        

        return retval;

    }
    
    hasgotCookie() {



        let retval;
        retval=false;

        Cookies.getInstance().setCookie("COOKIEPRUEBA","PRUEBA");
        if(Cookies.getInstance().getCookie("COOKIEPRUEBA")=="PRUEBA"){
            Cookies.getInstance().deleteCookie("COOKIEPRUEBA");
            retval=true;

        }    
        

        return retval;



        

    }

    store() {

        let jsonstring;
        let expiredate;
        let retval;
        retval=false;


        jsonstring=JSON.stringify(this.userconfig);
        if (this.hasgotLocalStorage()==true) {


            window.localStorage.setItem(WIntegratorLogic.prototype.mainconfig.storeuserconfigkey,jsonstring);
            retval=true;
        }
        
        else if (this.hasgotCookie()==true){

            expiredate=new Date();
            expiredate.setTime(expiredate.getTime()+(180*24*60*60*1000));
            Cookies.getInstance().setCookie(WIntegratorLogic.prototype.mainconfig.storeuserconfigkey,jsonstring,expiredate);
            retval=true;

        }

        return retval;

    }

    static getInstance() {


        if (UserConfig.prototype.obj instanceof UserConfig == false) {//if


            UserConfig.prototype.obj = new UserConfig()


        }//if

        return UserConfig.prototype.obj;


    }



}

//export default UserConfig;