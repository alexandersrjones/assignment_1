var myimg = document.getElementById('ava1')
var menu = document.getElementById('menu')
var num = 0
var num2 = 0
var num3 = 0
var cent = document.getElementById('center')

document.getElementById('boxava1').addEventListener('click', function(){
    myimg.src=('ava1.png');
});

document.getElementById('boxava2').addEventListener('click', function(){
    myimg.src=('ava2.png');
});

document.getElementById('menu').addEventListener('click', function(){
    menu.style.right='0px';
});

document.getElementById('boxup').addEventListener('click', function(){
    num = num - 7;
    cent.style.top=num + 'px';
});

document.getElementById('boxdown').addEventListener('click', function(){
    num = num + 7;
    cent.style.top=num + 'px';
});

document.getElementById('boxleft').addEventListener('click', function(){
    num2 = num2 - 7;
    cent.style.left=num2 + 'px';
});

document.getElementById('boxright').addEventListener('click', function(){
    num2 = num2 + 7;
    cent.style.left=num2 + 'px';
});

document.getElementById('box+').addEventListener('click', function(){
    num3 = num3 + 1;
    myimg.style.height = (100 + num3)+'%';
});

document.getElementById('box-').addEventListener('click', function(){
    num3 = num3 - 1;
    myimg.style.height = (100 + num3)+'%';
});

document.getElementById('ava1').addEventListener('click', function(){
    document.getElementById('boxup').style.display = 'none';
    document.getElementById('boxdown').style.display = 'none';
    document.getElementById('boxleft').style.display = 'none';
    document.getElementById('boxright').style.display = 'none';
    document.getElementById('boxava1').style.display = 'none';
    document.getElementById('boxava2').style.display = 'none';
    document.getElementById('box+').style.display = 'none';
    document.getElementById('box-').style.display = 'none';
});

document.getElementById('header').addEventListener('click', function(){
    document.getElementById('boxup').style.display = 'initial';
    document.getElementById('boxdown').style.display = 'initial';
    document.getElementById('boxleft').style.display = 'initial';
    document.getElementById('boxright').style.display = 'initial';
    document.getElementById('boxava1').style.display = 'inline-block';
    document.getElementById('boxava2').style.display = 'inline-block';
    document.getElementById('box+').style.display = 'inline-block';
    document.getElementById('box-').style.display = 'inline-block';
});

document.getElementById('but1').addEventListener('click', function(){
    document.getElementById('but4').style.display = 'block';
});

document.getElementById('but2').addEventListener('click', function(){
    document.getElementById('but6').style.display = 'block';
});

document.getElementById('but3').addEventListener('click', function(){
    document.getElementById('but5').style.display = 'block';
});