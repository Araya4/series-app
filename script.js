const content = document.getElementById('myVideo');
const arrSrc = ["https://placehold.co/128x72/50B498/DEF9C4?text=Home",
"k67GBsH6KHMt0sBlZam" , 'k4vik4QaAhibmHBlZio' , 'k38EjQ3yvi40m6BlZim' , 'k2nISFY0nl4OY6BlZik','kZyrYnOwlYFoiNBlZig',
'k6SMmcKlfLs5H6BlZii','k1zMQmiZCHqCMBBlZEi','k7q3j3t4Vvbs0WBlZEg','ko9txT3mPXqW44BlZEa','k5roxIbt2Tn5YRBlZEc',
'11','12','13','14','15',
'16','17','18','19','20','1003029247','1003032131'];

function handleContent(num){
    if(num===0){
        content.src = arrSrc[0];
    }
    else if(num>20){
        content.src = `https://player.vimeo.com/video/${arrSrc[num]}?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479`;
    }else if(num>10){
        console.log(arrSrc[num]);

    }else{
        content.src = `https://www.dailymotion.com/embed/video/${arrSrc[num]}?autoplay=1`;
    }
}
