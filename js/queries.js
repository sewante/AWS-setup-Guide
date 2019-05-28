/**
 * Loading the individual component that has been selected
 */
$(function(){
  
    $('#ban').on("click", ".comp", function(evt){
        evt.preventDefault();

        $('.canva').empty().load('layouts/explore/component.html');
        var component = evt.target.text;
        
        // prepare the path to the component's xml file
        var path = "xml/components/"+component+"/"+component+".xml";
        
        //get the object representation of the component's xml document
        var componentXML = readXMLFile(path);
        
        // load the component's name
        $('#compName').text(readComponentName(componentXML));

        // load the component's purpose
        $('#compPurpose').text(readComponentPurpose(componentXML));

        //load the component's description
        $('#compDescription').text(readComponentDescription(componentXML));

        // get the component's path to the general image
        var partialImagePath =  readComponetImage(componentXML, "general");
        var mainImagePath = "xml/components/"+component+"/"+partialImagePath;
        // load the component's image
        $('#compImage').attr('src',mainImagePath) ;
        
        // load the component's properties
        $('#compProperties').empty().append(getPropertiesList(componentXML));

        // load the component's link
        $('#compLink').attr('href', readComponentLink(componentXML));
        

    });
});
 