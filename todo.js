var ul = document.getElementById('list');
var li; 




var addButton = document.getElementById('add');
addButton.addEventListener('click',addItem);

var addButton = document.getElementById('remove');
addButton.addEventListener('click',removeItem);

var removeall = document.getElementById('removeall');
removeall.addEventListener('click',removeAll);

var input = document.getElementById('input');
input.addEventListener('change',del);

function del()
{
    var h2 = document.getElementById('mypara');
    h2.className = 'del';
}

function addItem(){
    var item = document.getElementById('input');
    var item = input.value;
    ul = document.getElementById('list');
    var textnode = document.createTextNode(item);

    if(item === '')
    {
        var p = document.createElement('h2');
        var t = document.createTextNode('Enter your todo');
        p.appendChild(t);

        var para = document.getElementById('mypara');
        var h2=document.getElementById('myh2');
        para.replaceChild(p,h2);

        return false;   
       

    }
    else{
        li = document.createElement('li');
        var checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.setAttribute('id','check');
        var label = document.createElement('label');
        ul.appendChild(label);
        li.appendChild(checkbox);
        label.appendChild(textnode);
        li.appendChild(label);
        ul.insertBefore(li,ul.childNodes[0]);

        setTimeout(() => {
            li.className = 'visual';
        }, 10);

        input.value='';

    }
}

function removeItem(){
    li = ul.children
    for (let index = 0; index < li.length; index++) {
        while(li[index] && li[index].children[0].checked)
        {
            ul.removeChild(li[index]);

        }
        
    }
}

function removeAll() {
    while(ul.firstChild)
    {
        ul.removeChild(ul.firstChild);
    }
}
