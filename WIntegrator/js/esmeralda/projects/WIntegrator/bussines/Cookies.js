"use strict";
class Cookies {


    constructor() {



    }

    setCookie(name, value, expire = null) {

        let cookiestring
        let retval;
        retval = false;

        if (name != undefined && name != null && name.trim() != "")   {

            retval = true;
            cookiestring = escape(name) + "=" + escape(value);
            if ((expire instanceof Date) == true) {

                cookiestring = cookiestring + ";expires=" + expire.toGMTString();
            }

            document.cookie = cookiestring;


        }
        return retval;


    }


    getCookie(name) {


        let partes;
        let partes2;
        let partes3;
        let retval;

        retval = undefined;

        if (name != undefined && name != null && name.trim() != "") {


            partes3 = new Array();
            partes = document.cookie.split(";");
            for (let i = 0; i < partes.length; i++) {

                partes2 = partes[i].split("=");
                if (partes2.length>=2) { 
                    partes3[unescape(partes2[0].trim())] = unescape(partes2[1].trim())
                }
            }


            retval = partes3[name];

        }

        return retval;

    }



    deleteCookie(name) {

        let expiredate;
        expiredate=new Date();
        expiredate.setTime(expiredate.getTime()-1);

        return this.setCookie(name,"",expiredate);

       


    }


    static getInstance() {


        if (Cookies.prototype.obj instanceof Cookies == false) {//if


            Cookies.prototype.obj = new Cookies()


        }//if

        return Cookies.prototype.obj;


    }

}



//export default Cookies;