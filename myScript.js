

const imageslider = document.querySelector('#imageslider');

const bottombtn1 = document.querySelector('#imgto1');
const bottombtn2 = document.querySelector('#imgto2');
const bottombtn3 = document.querySelector('#imgto3');
const bottombtn4 = document.querySelector('#imgto4');
const bottombtn5 = document.querySelector('#imgto5');

const leftarrow = document.querySelector('#leftarrow');
const rightarrow = document.querySelector('#rightarrow');

bottombtn1.addEventListener('click', moveA);
bottombtn2.addEventListener('click', moveB);
bottombtn3.addEventListener('click', moveC);
bottombtn4.addEventListener('click', moveD);
bottombtn5.addEventListener('click', moveE);

leftarrow.addEventListener('click', moveleft);
rightarrow.addEventListener('click', moveright);

function moveA()
{
    imageslider.style.transform = 'translate(0px)';
    nowindex =1;
}

function moveB()
{
    imageslider.style.transform = 'translate(-1060px)';
    nowindex =2;
}

function moveC()
{
    imageslider.style.transform = 'translate(-2120px)';  
    nowindex =3;
}

function moveD()
{
    imageslider.style.transform = 'translate(-3180px)';  
    nowindex =4;
}

function moveE()
{
    imageslider.style.transform = 'translate(-4240px)';  
    nowindex =5;
}


function moveleft()
{
    if(nowindex == 1)
    {
        nowindex ==1;
    }
    else
    {
        nowindex --;
    }

    moveslider(nowindex);
}

function moveright()
{
    if(nowindex == 5)
    {
        nowindex ==5;
    }
    else
    {
        nowindex ++;
    }

    moveslider(nowindex);
}

function moveslider(index)
{
    switch(index)
    {
        case 1:
            moveA();
        break;
        case 2:
            moveB();
        break;
        case 3:
            moveC();
        break;
        case 4:
            moveD();
        break;
        case 5:
            moveE();
        break;
    }
}





const $topBtn 
= document.querySelector(".topbtn");

// 버튼 클릭 시 맨 위로 이동
$topBtn.onclick = () => {
  window.scrollTo({ top: 2500, behavior: "smooth" });  
}

const $bottomBtn 
= document.querySelector(".botbtn");

// 버튼 클릭 시 맨 위로 이동
$bottomBtn.onclick = () => {
  window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });  
}