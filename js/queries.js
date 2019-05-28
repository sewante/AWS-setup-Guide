/**
 * Loading the individual component that has been selected
 */
var testPath = null;
$(function(){
  
    $('#ban').on("click", ".comp", function(evt){
        evt.preventDefault();
        var component = evt.target.text;
        
        var path = "xml/components/"+component+"/"+component+".xml";
        testPath = path;
        //get the object representation of the component's xml document
        var componentXML = readXMLFile(path);

        // get the component's name
        var name = readComponentName(componentXML);

        // get the component's purpose
        var purpose = readComponentPurpose(componentXML);

        // get the component's path to the general image
        var partialImagePath =  readComponetImage(componentXML, "general");
        var mainImagePath = "xml/components/"+component+"/"+partialImagePath;
        
        // get the component's properties
        var properties = new Array();
        properties = readComponentProperties(componentXML);

        var propertiesList = "";
        for(var i = 0; i < properties.length; i++) {
            propertiesList += "<li class='list-group-item'>"+properties[i]+"</li>";
        }
        
        $('#compProperties').html = propertiesList;

        $('.canva').empty().load('layouts/explore/component.html');
        

    });
});

function getTestPath() {
    return testPath;
} 