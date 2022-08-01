// variáveis e constantes
var open = false;
const enable = grab("#enable"), disable = grab("#disable"), more = grab("#more");
const options = grab(".options"), reset = grab("#reset"), msg = grab("#msg");
const save1 = grab("#save1"), load1 = grab("#load1"), sreset1 = grab("#sreset1");
const save2 = grab("#save2"), load2 = grab("#load2"), sreset2 = grab("#sreset2");
const save3 = grab("#save3"), load3 = grab("#load3"), sreset3 = grab("#sreset3");
const save4 = grab("#save4"), load4 = grab("#load4"), sreset4 = grab("#sreset4");

// "métodos"
enable.onclick = () => {
    document.body.contentEditable = 'true';
    document.designMode = 'on';
    void 0;
}
disable.onclick = () => {
    document.body.contentEditable = 'false';
    document.designMode = 'off';
    void 0;
}
more.onclick = () => {
    if(!open){ // as opções estão escondidas
        options.style.visibility = "visible";
        more.innerText = "-";               
        open = true;
    }
    else{ // as opções não estão escondidas
        options.style.visibility = "hidden";
        more.innerText = "+"
        open = false;
    }
}
reset.onclick = () => {
    if(confirm("Você tem certeza que quer resetar?")){
        alert("Feito!");
        document.location.reload();
    }
}

save1.onclick = () => save(1);
load1.onclick = () => load(1);
sreset1.onclick = () => saveReset(1);

save2.onclick = () => save(2);
load2.onclick = () => load(2);
sreset2.onclick = () => saveReset(2);

save3.onclick = () => save(3);
load3.onclick = () => load(3);
sreset3.onclick = () => saveReset(3)

save4.onclick = () => save(4);
load4.onclick = () => load(4);
sreset4.onclick = () => saveReset(4);

// funções
function grab(id){return document.querySelector(id);}
function save(num){
    var text = msg.innerText; 
    if(text == "\n" || text == "texto aqui") {
        alert("Não tem nenhum texto para ser salvo!");
    }
    else{
        if(confirm(`Você tem CERTEZA que quer salvar este texto no save ${num}?`)){
            localStorage.setItem(`texto${num}`, text);
            alert(`Texto salvo no save ${num}!`);
        }
    }
}
function load(num){
    var text = localStorage.getItem(`texto${num}`);
    if(text == "" || text == "texto aqui" || text == null){
        alert("Não tem nenhum texto para ser carregado!");
    }
    else{
        if(msg.innerText == "\n" || msg.innerText == "texto aqui"){
            msg.innerText = text;
            alert(`Texto do save ${num} carregado!`);
        }
        else if(confirm(`Você tem CERTEZA que quer carregar o texto do save ${num}?\nSe não salvar o atual, você pode perder ele para SEMPRE.`)){
            msg.innerText = text;
            alert(`Texto do save ${num} carregado!`);
        }
    }
}
function saveReset(num){
    if(confirm(`Você tem certeza que quer deletar o save ${num}?`)){
        if(confirm("VOCÊ TEM CERTEZA? ÚLTIMO AVISO.")){
            localStorage.removeItem(`texto${num}`);
            alert("Save resetado!");
        }
    }
}