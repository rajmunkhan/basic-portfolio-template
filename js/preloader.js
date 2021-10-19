var loader = document.querySelector('.pre-loader');
document.onreadystatechange = () => {
    if (document.readyState === 'complete') {
        fade = loader;
        var intervalID = setInterval(function () {
              
            if (!fade.style.opacity) {
                fade.style.opacity = 1;
            }
              
              
            if (fade.style.opacity > 0) {
                fade.style.opacity -= 0.1;
            } 
              
            else {
                clearInterval(intervalID);
            }
              
        }, 150);
        loader.style.display = "none";
    }
  };