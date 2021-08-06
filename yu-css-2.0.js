/* Loads the 1st simple content. */
function allSameClasses()
{
    var theQuery = document.querySelectorAll('[yu-classes="all-same"]');

    for (var q = 0; q < theQuery.length; q++) {
        var classesNames = theQuery.item(q).children.item(0).className;

        for (var i = 0; i < theQuery.item(q).children.length; i++) {
            theQuery.item(q).children.item(i).className = classesNames;
        }
    }
}

/**
 * 
 * @param {...string} elements
 */
function galleryContent(...elements) {
    var theQuery = document.querySelectorAll('[yu-container="gallery"]');

    for (var i = 0; i < elements.length; i++)
    {
        for (var q = 0; q < theQuery.length; q++) {
            
            theQuery.item(q).children.item(i).classList.add("rounded-3", "cards-3");
            theQuery.item(q).children.item(i).src = elements[i];
        }
    }
        
}

function dropdownClickContent(theInt) {

    var theQuery = document.querySelectorAll("[yu-container='dropdown-click-container']");

    theQuery.item(theInt).onclick = function () {
        var theClassElement = theQuery.item(theInt).children.item(1);
        if (theClassElement.style.display === "block") {
            theClassElement.style.display = "none";
        }
        else {
            theClassElement.style.display = "block";
        }
    }
    
}