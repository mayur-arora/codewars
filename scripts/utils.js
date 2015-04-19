var utils = (function () {
    var getJSONData = function (url, params) {
        var promise = new Promise(function (resolve, reject) {
            var xhr = new XMLHttpRequest();
            xhr.open("GET", url, true);
            xhr.setRequestHeader("Authorization","ZirftCcWdSxxs5zPBr5V");
            xhr.responseType = "json";
            xhr.send();
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        resolve(xhr.response);
                    } else {
                        reject();
                    }
                }
            }
        });
        return promise;
    }
    var compileTemplate = function(parent,templateId,data){
        var template = document.getElementById(templateId).innerHTML;
        var compiledTemplate = Handlebars.compile(template);
        document.getElementById(parent).innerHTML= compiledTemplate(data);
        
    }
    var attachEvents = function(eventsObj){
        Object.keys(eventsObj).forEach(function(id){
            Object.keys(eventsObj[id]).forEach(function(event){
                document.getElementById(id).addEventListener(event,eventsObj[id][event]);
            });
        });
    }
    
    return {
        getJSONData: getJSONData,
        compileTemplate:compileTemplate,
        attachEvents:attachEvents
    }
})();