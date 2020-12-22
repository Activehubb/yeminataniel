const toggleBtn = document.getElementById('toggle').addEventListener('click', openSlide);

const closeBtn = document.getElementById('closeNav').addEventListener('click', closeSlide);

const currentDate = new Date().getFullYear();

document.getElementById('date').innerHTML = currentDate;

function openSlide (){
  document.getElementById('closeNav').style.width = '100%';
  document.body.style.backgroundColor = 'rgba(0,0,0,.5)';
}
function closeSlide (){
  document.getElementById('closeBtn').style.width = '0';
  document.getElementById('closeNav').style.width = '100%';
  document.getElementById('closeNav').style.display = 'none';

  document.body.style.backgroundColor = '#fff';
}

console.log(currentDate);


// SLIDES]

let slideClasses = document.querySelectorAll('.slide'),
            prevBtn = document.querySelector('#prev'),
                nextBtn = document.querySelector('#next'),
                   currentSlide = 0;

      // INITIATE AN EVENT LISTENER FOR PREV & NEXT BTN
      

      // CREATING A RESET FUNCTION
      function reset(){
        for(i = 0; i < slideClasses.length; i++){
          slideClasses[i].style.display = 'none';
        }
      }

      // INITIATE A SLIDE FUNCTION 
      function slide(){
        reset();
        slideClasses[0].style.display = 'block';
      }

      // INITIATING A PREVBTN FUNCTION 
      function leftSlide (){
        reset();
        slideClasses[currentSlide -1].style.display = 'block';
        currentSlide--;
      }

      // INITIATING A PREVBTN FUNCTION 
      function rightSlide(){
        reset();
        slideClasses[currentSlide +1].style.display = 'block';
        currentSlide++;
      }

      // INITIATE AN EVENT LISTENER FOR PREV & NEXT BTN
      prevBtn.addEventListener('click', function(){
        if(currentSlide === 0){
          currentSlide = slideClasses.length ;
        }
        leftSlide();
        // setTimeout(leftSlide(), 2000)
      });

      nextBtn.addEventListener('click', function(){
        if(currentSlide === slideClasses.length -1){
          currentSlide = -1;
        }
        rightSlide();
      })



      slide();

      // AUTOMATIC SLIDES

      let slideIndex = 0;

      function showSlides(){
        for( let i = 0; i < slideClasses.length; i++){
          slideClasses[i].style.display = 'none';
        }
        slideIndex++;
        if(slideIndex > slideClasses.length) {slideIndex = 1};
        slideClasses[slideIndex-1].style.display = 'block';
        setTimeout(showSlides, 5000);
      }
      showSlides();



      