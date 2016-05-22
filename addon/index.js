(function() {

    var iframe = document.createElement('iframe');
    iframe.src = "http://localhost:8080/";
    iframe.style.position = 'fixed';
    iframe.style.bottom = 0;
    iframe.style.left = 0;
    iframe.style.right = 0;
    iframe.style.width = '100%';
    iframe.style.height = '30px';
    iframe.style.border = 0;
    document.body.appendChild(iframe);

})();