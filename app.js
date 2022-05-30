const output = document.getElementById('data');
const button = document.getElementById('add');
const Back = document.getElementById('back');
const Clear = document.getElementById('clear');
const Sound = document.getElementById('sound');
const Audio = document.getElementById('audio');
const Audio1 = document.getElementById('audio1');
const Audio2 = document.getElementById('audio2');
const Audio3 = document.getElementById('audio3');


output.style.backgroundColor ="gray";
console.log()
//uper count
let count = 0;
button.addEventListener('click',()=>{
    if(count<=10){

        output.innerHTML = count++;
        output.style.backgroundColor ='blue';
        output.style.color = "black";
}else{
        count = 0;
        Audio3.play();
}
    Audio1.play();
});





//down count 
Back.addEventListener('click',()=>{
    if(count>=0){
        output.innerHTML = count--;
        Audio3.pause();
        output.style.backgroundColor = "yellow";  
        output.style.color = "black";  


    }else{
        count = 0;
    }
    Audio.play();

});


//clear count
Clear.addEventListener('click',()=>{
    if(count<=10){
        output.innerHTML = 0;
        Audio3.pause();
        output.style.backgroundColor = "green";    
        output.style.color = "white";    

    }else{
        count = 0;
    };
    Audio2.play();

});



//music start


Sound.addEventListener('click',()=>{
    Audio3.play();
    Audio1.play();
    output.style.backgroundColor = "red";   
});

// music stop 
Sound.addEventListener('dblclick',()=>{
    Audio3.pause();
    Audio1.play();
});






//stopwatch


const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');
const btn3 = document.querySelector('#btn3');
const output_watch = document.querySelector('#output')


let [mil,sec,min,hou] =[0,0,0,0];
output_watch.innerHTML ='00:00:00:000';



function msmh(){
    mil+=10;
    if(mil == 1000){
        mil =0;
        sec++;
        if(sec ==60){
            sec =0;
            min++;
        Audio1.play();

            if(min ==60){
                min =0;
                hou++;
            }
        }
    }

    let h = (hou>10)? "0"+ hou:hou;
    let m = (min>10)? "0"+ min:min;
    let s = (sec>10)? "0"+ sec:sec;
    let ms = (mil>10)? "0"+ mil:mil;
    output_watch.innerHTML = `${h}  :  ${m}  :  ${s}  :  ${ms}`;

}




let setIn ="";
btn1.addEventListener('click',()=>{
    setIn = setInterval(()=>{
        msmh();
        Audio.play();
    },10)
});

btn2.addEventListener('click',()=>{
    clearInterval(setIn);
});

btn3.addEventListener('click',()=>{
    clearInterval(setIn);
    output_watch.innerHTML = '00:00:00:000'
})
