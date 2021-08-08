var yu = {};

yu.dropdownClickContent = function (theInt)
{
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

/**
 * 
 * @param {...string} elements
 */
yu.galleryContent = function (...elements) {
    var theQuery = document.querySelectorAll('[yu-container="gallery"]');

    for (var i = 0; i < elements.length; i++) {
        for (var q = 0; q < theQuery.length; q++) {

            theQuery.item(q).children.item(i).classList.add("rounded-3", "cards-3");
            theQuery.item(q).children.item(i).src = elements[i];
        }
    }
}

yu.allSameClasses = function () {
    var theQuery = document.querySelectorAll('[yu-classes="all-same"]');

    for (var q = 0; q < theQuery.length; q++) {
        var classesNames = theQuery.item(q).children.item(0).className;

        for (var i = 0; i < theQuery.item(q).children.length; i++) {
            theQuery.item(q).children.item(i).className = classesNames;
        }
    }
}

yu.tab = {};
yu.bars = {};

yu.tab.tabContainers = function () {

    var allAreButton = function ()
    {
        for (var i = 0; i < elements.length; i++) {
            if (typeof (document.getElementById(elements[i]).children) == HTMLButtonElement) {
                continue;
            }
            else {
                return false;
            }
        }
        return true;
    }

    if (allAreButton) {
        for (var q = 0; q < document.querySelectorAll("[yu-container='tab-contents']").length; q++)
        {
            for (var s = 0; s < document.querySelectorAll("[yu-container='tab-contents']").item(q).children.length; s++)
            {
                document.querySelectorAll("[yu-container='tab-contents']").item(q).children.item(s).setAttribute("id", "tab-" + (s + document.querySelectorAll("[yu-container='tab-contents']").item(q).children.length * q));
            }
        }
    }
    else {
        alert("Error on tab functionnality.");
    }
    


}

yu.bars.sidebarContainers = function ()
{

    var d = document;

    var sidebar_menu = d.querySelectorAll("[yu-container='sidebar-menu']");
    var sidebar_content = d.querySelectorAll("[yu-container='sidebar-content']");

    if (d.querySelectorAll("[yu-content='sidebar-push-open-20']").length != 0)
    {
        window.matchMedia("(max-width: 768px)").addListener(function () {
            if (window.matchMedia("(max-width: 768px)").matches) {
                d.querySelectorAll("[yu-content='sidebar-push-open-20']").item(0).addEventListener('click', function () {
                    sidebar_menu.item(0).style.left = "0%";
                    sidebar_content.item(0).style.left = "50%";
                });

                d.querySelectorAll("[yu-content='sidebar-push-close-20']").item(0).onclick = function () {
                    sidebar_menu.item(0).style.left = "-100%";
                    sidebar_content.item(0).style.left = "0%";
                };
            }
            else {
                d.querySelectorAll("[yu-content='sidebar-push-open-20']").item(0).addEventListener('click', function () {
                    sidebar_menu.item(0).style.left = "0%";
                    sidebar_content.item(0).style.left = "20%";
                });

                d.querySelectorAll("[yu-content='sidebar-push-close-20']").item(0).onclick = function () {
                    sidebar_menu.item(0).style.left = "-100%";
                    sidebar_content.item(0).style.left = "0%";
                };
            }
        });

        window.matchMedia("(max-width: 600px)").addListener(function () {
            if (window.matchMedia("(max-width: 600px)").matches) {
                d.querySelectorAll("[yu-content='sidebar-push-open-20']").item(0).addEventListener('click', function () {
                    sidebar_menu.item(0).style.left = "0%";
                    sidebar_content.item(0).style.left = "50%";
                });

                d.querySelectorAll("[yu-content='sidebar-push-close-20']").item(0).onclick = function () {
                    sidebar_menu.item(0).style.left = "-100%";
                    sidebar_content.item(0).style.left = "0%";
                };
            }
            else {
                d.querySelectorAll("[yu-content='sidebar-push-open-20']").item(0).addEventListener('click', function () {
                    sidebar_menu.item(0).style.left = "0%";
                    sidebar_content.item(0).style.left = "20%";
                });

                d.querySelectorAll("[yu-content='sidebar-push-close-20']").item(0).onclick = function () {
                    sidebar_menu.item(0).style.left = "-100%";
                    sidebar_content.item(0).style.left = "0%";
                };
            }
        });

        d.querySelectorAll("[yu-content='sidebar-push-open-20']").item(0).addEventListener('click', function () {
            sidebar_menu.item(0).style.left = "0%";
            sidebar_content.item(0).style.left = "20%";
        });

        d.querySelectorAll("[yu-content='sidebar-push-close-20']").item(0).onclick = function () {
            sidebar_menu.item(0).style.left = "-100%";
            sidebar_content.item(0).style.left = "0%";
        };
    }
    else if (d.querySelectorAll("[yu-content='sidebar-push-open-25']").length != 0)
    {
        window.matchMedia("(max-width: 768px)").addListener(function ()
        {
            if (window.matchMedia("(max-width: 768px)").matches) {
                d.querySelectorAll("[yu-content='sidebar-push-open-25']").item(0).onclick = function ()
                {
                    sidebar_menu.item(0).style.left = "0%";
                    sidebar_content.item(0).style.left = "100%";
                };

                d.querySelectorAll("[yu-content='sidebar-push-close-25']").item(0).onclick = function ()
                {
                    sidebar_menu.item(0).style.left = "-100%";
                    sidebar_content.item(0).style.left = "0%";
                };
            }
            else {
                d.querySelectorAll("[yu-content='sidebar-push-open-25']").item(0).onclick = function ()
                {
                    sidebar_menu.item(0).style.left = "0%";
                    sidebar_content.item(0).style.left = "25%";
                };

                d.querySelectorAll("[yu-content='sidebar-push-close-25']").item(0).onclick = function ()
                {
                    sidebar_menu.item(0).style.left = "-100%";
                    sidebar_content.item(0).style.left = "0%";
                };
            }
        });

        window.matchMedia("(max-width: 600px)").addListener(function () {
            if (window.matchMedia("(max-width: 600px)").matches) {
                d.querySelectorAll("[yu-content='sidebar-push-open-25']").item(0).onclick = function ()
                {
                    d.querySelectorAll("[yu-container='sidebar-menu']").item(0).style.left = "0%";
                    d.querySelectorAll("[yu-container='sidebar-content']").item(0).style.left = "100%";
                };

                d.querySelectorAll("[yu-content='sidebar-push-close-25']").item(0).onclick = function ()
                {
                    d.querySelectorAll("[yu-container='sidebar-menu']").item(0).style.left = "-100%";
                    d.querySelectorAll("[yu-container='sidebar-content']").item(0).style.left = "0%";
                };
            }
            else {
                d.querySelectorAll("[yu-content='sidebar-push-open-25']").item(0).onclick = function ()
                {
                    d.querySelectorAll("[yu-container='sidebar-menu']").item(0).style.left = "0%";
                    d.querySelectorAll("[yu-container='sidebar-content']").item(0).style.left = "25%";
                };

                d.querySelectorAll("[yu-content='sidebar-push-close-25']").item(0).onclick = function ()
                {
                    d.querySelectorAll("[yu-container='sidebar-menu']").item(0).style.left = "-100%";
                    d.querySelectorAll("[yu-container='sidebar-content']").item(0).style.left = "0%";
                };
            }
        });

        d.querySelectorAll("[yu-content='sidebar-push-open-25']").item(0).onclick = function () {
            d.querySelectorAll("[yu-container='sidebar-menu']").item(0).style.left = "0%";
            d.querySelectorAll("[yu-container='sidebar-content']").item(0).style.left = "25%";
        };

        d.querySelectorAll("[yu-content='sidebar-push-close-25']").item(0).onclick = function () {
            d.querySelectorAll("[yu-container='sidebar-menu']").item(0).style.left = "-100%";
            d.querySelectorAll("[yu-container='sidebar-content']").item(0).style.left = "0%";
        };
    }
    else if (d.querySelectorAll("[yu-content='sidebar-open']").length != 0) {
        d.querySelectorAll("[yu-content='sidebar-open']").item(0).onclick = function () {
            d.querySelectorAll("[yu-container='sidebar-menu']").item(0).style.left = "0%";
        };

        d.querySelectorAll("[yu-content='sidebar-close']").item(0).onclick = function () {
            d.querySelectorAll("[yu-container='sidebar-menu']").item(0).style.left = "-100%";
        };
    }
    else {
        
    }
};

yu.tab.tabOpener = function (tabOpening) {
    for (var q = 0; q < document.querySelectorAll("[yu-container='tab-contents']").length; q++) {
        for (var s = 0; s < document.querySelectorAll("[yu-container='tab-contents']").item(q).children.length; s++) {
            document.getElementById("tab-" + (s + document.querySelectorAll("[yu-container='tab-contents']").item(q).children.length * q)).style.display = "none";
        }
    }
    document.getElementById(tabOpening).style.display = "block";
}

yu.bars.stickyBarElements = function () {
    if (document.getElementById("bar-stick").innerHTML.length != 0) {
        var allElements = document.getElementById("bar-stick");

        var off = allElements.offsetTop;

        if (window.pageYOffset >= off) {
            if (allElements.classList.contains("bar-sticky")) {
                allElements.classList.replace("no-sticky", "bar-sticky");
            }
            else {
                allElements.classList.add("bar-sticky");
            }
        }
        if (window.pageYOffset <= off) {
            allElements.classList.replace("bar-sticky", "no-sticky");
        }
    }
    else {

    }
}
