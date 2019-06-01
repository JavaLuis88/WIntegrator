function checkES6support() {

    "use strict";
    var retval;
    retval=false;    
    if (typeof Symbol != "undefined") {
        
        
        try {
       
            eval("class Foo {}");
            eval("var bar = (x) => x+1");
            eval("function testrest(...x){};testrest(...new Array(1,2,3));")
            retval=true;
        } catch (e) {

            
        }
    
        
      }
    
      return retval;


}
if (checkES6support()) {

document.write("<script src=\"WIntegrator/js/esmeralda/projects/WIntegrator/bussines/AJAXObj.js\">\n");
document.write("</script>\n");
document.write("<script src=\"WIntegrator/js/esmeralda/projects/WIntegrator/bussines/CheckFeatures.js\">\n");
document.write("</script>\n");
document.write("<script src=\"WIntegrator/js/esmeralda/projects/WIntegrator/bussines/WIntegratorLogic.js\">\n");
document.write("</script>\n");
}
else{

    window.onload = initpage;

    function initpage() {
        var tagbody
        tagbody = document.getElementsByTagName("body");
        if (tagbody != undefined && tagbody != null && tagbody.length >= 1) {
    
    
    
            tagbody[0].innerHTML = "Browser is not valid"
    
    
    
    
        }
        else {
    
            alert("Browser is not valid");
    
    
        }
    
    }


}
