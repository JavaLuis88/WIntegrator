class AJAXObj {//class


    static getAJAXObj() {//getAJAXObj

        let retval;
        retval = null;
        if (window.XMLHttpRequest) {//if1
            retval = new XMLHttpRequest();
        }//if1
        else if (window.ActiveXObject) {//elseif1-1
            retval = new ActiveXObject("Microsoft.XMLHTTP");
        }//elseif1-1

        return retval;
    }//getAJAXObj


}//class

//export default AJAXObj;
