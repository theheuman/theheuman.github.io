$(document).ready(function () {

    var sidebarActive = true;
    var sidebarWidth = 250;
    $('#sidebarCollapse').on('click', function () {
        //also need to do some kind of media query to do this
        if (sidebarActive) {
            sidebarDisplay(false)
        }
        else {
            sidebarDisplay(true)
        }
    });

    function sidebarDisplay(display) {
        //console.log("Display Sidebar: " + display)
        //show the sidebar
        if (display) {
            $('#content').css('margin-left', sidebarWidth)
            $('#sidebar').css('width', sidebarWidth)
            $('#sidebar').css('margin-left', '0px')
            $('#chevron').removeClass("fa-chevron-right")
            $('#chevron').addClass("fa-chevron-left")
            sidebarActive = true;
        }
        //dont show the sidebar
        else {
            $('#content').css('margin-left', '0px')
            $('#sidebar').css('width', sidebarWidth)
            $('#sidebar').css('margin-left', -sidebarWidth)
            $('#chevron').removeClass("fa-chevron-left")
            $('#chevron').addClass("fa-chevron-right")
            sidebarActive = false;
        }
    }


    function myFunction(x) {
        if (x.matches) {
            sidebarWidth = 175;
            changeToIcons(true);
        }
        else {
            sidebarWidth = 250;
            changeToIcons(false);
        }

        sidebarDisplay(!(x.matches))
    }

    var x = window.matchMedia("(max-width: 985px)")
    myFunction(x)
    x.addListener(myFunction) // Attach listener function on state changes

    function changeToIcons(icons) {
        if (icons) {
            //add icons to menu items
        }
        else {
            //remove icons from menu items
        }
    }
});