var score = 0;
var is_collided = false;

//-----1)Function to Move Mario up, left, right.
document.onkeydown = function(event){                                             /*here event-variable is the code returned respective to key pressed.*/
    console.log('The code of key pressed by you is = ', event.keyCode)            /* event.keyCode will give the code of that key.*/
    //To Move Mario Up with, up-arrow key.
    if(event.keyCode == 38)
    {
        let mario = document.querySelector('.mario');
        mario.classList.add('animatemario');
        setTimeout(() => {
            mario.classList.remove('animatemario')
        }, 2700);
    }
    //To Move Mario Right, with Right arrow key.
    if(event.keyCode==39)
    {
        let mario = document.querySelector('.mario');
        let marioX = parseInt(window.getComputedStyle(mario, null).getPropertyValue('left'));
        mario.style.left = marioX + 150 + "px";
    }
    //To Move Mario Left, with Left arrow key.
    if(event.keyCode==37)
    {
        let mario = document.querySelector('.mario');
        let marioX = parseInt(window.getComputedStyle(mario, null).getPropertyValue('left'));
        mario.style.left = (marioX - 150) + "px";
    }
} 

//----------2)Function to detect Collision between Mario And Obstacle(Dragon).
setInterval(() => {
    let mario = document.querySelector('.mario');
    let obstacle = document.querySelector('.obstacle');
    let gameover = document.querySelector('.gameover');
    let playagain = document.querySelector('.playagain');
    let gametitle = document.querySelector('.gametitle');

/* let mx->mario_x_distance, my->mario_y_distance and ox->obstacle_x_distance, oy->obstacle_y_distance */
/* window.getComputedStyle(..elementname.., null).getPropertyValue('left/right/top/bottom') will give respective distance of "elementname"-CONTAINER from left/right/top/bottom in PIXELS, thus that should be parsed for calculation.*/
mx = parseInt(window.getComputedStyle(mario, null).getPropertyValue('left'));
my = parseInt(window.getComputedStyle(mario, null).getPropertyValue('top'));
ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));

diff_x = Math.abs(ox-mx);
diff_y = Math.abs(oy-my);                                             /*via paint we can find that, width of Mario=153px and height of mario=170px*/
if(diff_x < 180 && diff_y < 190)
   {
       gameover.style.visibility = 'visible';
       obstacle.classList.remove('animateobstacle');
       playagain.style.visibility = 'visible';
       gametitle.style.visibility = 'hidden';
      is_collided = true;                                              /*this variable will help in deciding SCORE.*/
   }
   
}, 100);

//--------3) Function to Set Score after each-passage of Dragon(obstacle) after each 5 second.
setInterval(() => {
    if(is_collided == false)
    {
        score++;
        document.getElementById('scorecont').innerHTML = "Your Score : " + score;
    }
}, 5000);                                                              // here i am using 5 second means to update score after each 5 second, becoz dragon passes through complete screen in ""5 seconds"" for each time.

