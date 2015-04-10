// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397704
// To debug code on page load in Ripple or on Android devices/emulators: launch your app, set breakpoints, 
// and then run "window.location.reload()" in the JavaScript Console.
(function () {
    "use strict";

    document.addEventListener( 'deviceready', setupCamera, false );

    function setupCamera() {
        // camera
        document.querySelector("#photoCanvas").addEventListener("click", startCamera, false);

        var cameraPopoverHandle;

        function startCamera() {
            navigator.camera.getPicture(onSuccess, onFail,
             {
                 destinationType: Camera.DestinationType.FILE_URI,
                 sourceType: Camera.PictureSourceType.CAMERA,
                 correctOrientation: true,
             });
        }

        function onSuccess(u) {
            document.querySelector("#photoCanvas").src = u;
        }

        function onFail(e) {
            console.log('onFail');
            console.dir(e);
        }
    };
} )();