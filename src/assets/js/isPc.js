function isPc() {  
    var userAgentInfo = navigator.userAgent;  
    var Agents = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod");
    var flag = true;  
    for (var v = 0; v < Agents.length; v++) {  
        if (userAgentInfo.indexOf(Agents[v]) > 0) { flag = false; break; }  
    }  
    return flag;  
} 
if (!isPc()){
    window.location.href = 'http://www.51hbx.com/wap/FQcarInfo.html';
}     