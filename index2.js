let mouseDowned = false,mouseDowned2=false;

let x, y, rotateX = 0, rotateY = 0, rotateZ = 0,cubID;

let markaz = document.getElementById("markaziyDiv");

let arr =(markaz.children);

let idlar=[];

let markaz_arr=[];

for (let i of arr)

{

    idlar.push(parseFloat(i.id));

}

idlar=idlar.sort((x,y)=>x-y);

for(let i of idlar)

{

    var n={

        x:(i)%3+1,

        y:(parseInt((i)/3)%3)+1,

        z:parseInt((i)/9)+1

    };

    markaz_arr.push(n);

}

console.log(markaz_arr);

function cub_down(i,e)
{
    mouseDowned2 = true;

    x=e.clientX;
    y=e.clientY;
}

function cub_up()
{
    mouseDowned2=false;
}

function cub_mouseMove(e)
{
    let x1=e.clientX,y1=e.clientY;
    if(mouseDowned2)
    {
        if(Math.abs(x-x1)>Math.abs(y-y1))
        {
            
        }
    }
}

function mouseDown(e) {

    mouseDowned = true;

    x = e.clientX;

    y = e.clientY;

}
function mouseUp(e) {

    mouseDowned = false;
    mouseDowned2=false;
}

function mouseMove(e) {

    console.log(mouseDowned2+" "+mouseDowned);

    if (mouseDowned&&!mouseDowned2) {

        rotateX += (Math.cos((rotateY % 360) * Math.PI / 180) * (y - e.clientY)) / 5;

        rotateZ += (Math.sin((rotateY % 360) * Math.PI / 180) * (y - e.clientY)) / 5;

        rotateY += (e.clientX - x) / 5;

        markaz.style.transform = "rotateY(" + rotateY + "deg) rotateX(" + rotateX + "deg) rotateZ(" + rotateZ + "deg)";

        y = e.clientY;

        x = e.clientX;

    }

}