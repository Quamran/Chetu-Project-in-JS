const images = ["images/image 1.jpg",
    "images/image 2.jpg",
    "images/image 3.jpg",
    "images/image 4.jpg",
    "images/image 5.jpg",
    "images/image 6.jpg",
    "images/image 7.jpg",
    "images/image 8.jpg"] ;

    var i = 0 ;

    function Slider(){

        document.getElementById('imgslider') .src =images[i] ;

        if(i < (images.length - 1)){

            i++ ;

        }
        else{

            i = 0 ;

        }
             
        
    
          

           

        
        
    }

    setInterval(Slider, 2000)