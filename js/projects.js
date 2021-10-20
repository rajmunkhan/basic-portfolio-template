let projects=[
    {projectName:"driver detector",projectDesc:"this is the first project and made up of html css"},
    {projectName:"Till mark",projectDesc:"this is the ecommerce project and made up of html css php js"},
    {projectName:"SRMforum",projectDesc:"a forum where students can share the events"},
    {projectName:"Claroom",projectDesc:"Here teacher can assign the tast and students can submit the pdf"},
]

const text="I am a Frontend Developer and an Open Source Enthusiast ! "; //you can change the template here 

let index=0;

function autowrite(){
    document.querySelector('.underText').innerHTML=text.slice(0,index);
    ++index;

    if(index>text.length){
        index=0;
    }
}

setInterval(autowrite,100);