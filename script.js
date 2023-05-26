function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
const buttonHandler1 =async(id) =>{
    let button = document.getElementById(id);
    let img = button.getElementsByTagName("img")
    img[0].classList.remove("d-none")
    if(id==='button5' || id==='button10' || id==='button15'){
        button.style.color = '#40a9ff'
    }
    else if(id!='button1' && id!='button6'  && id!='button11'){
        button.style.borderColor = button.style.color = '#262626'
    }
    
    await delay(2000);
    img[0].classList.add('d-none');
    button.disabled = true;
    if(id!='button1'){
        button.style.borderColor = button.style.color = '#d9d9d9'
    }
}
const buttonHandler2 = async(id) =>{
    let button = document.getElementById(id);
    if(id === 'button16' || id ==='button21' || id==='button26' || id === 'button31' || id ==='button36' || id==='button41'){
        button.getElementsByTagName("img")[0].src = './assets/loading.svg';
    }
    else if(id === 'button20' || id ==='button25'|| id==='button30' || id === 'button35' || id ==='button40'|| id==='button45'){
        button.getElementsByTagName("img")[0].src = './assets/loadingPrimary.svg';
    }
    else{
        button.getElementsByTagName("img")[0].src = './assets/loadingGrey.svg';
    }
    await delay(2000);

    button.disabled = true;
    button.getElementsByTagName("img")[0].src = './assets/blackSearch.svg';
    button.getElementsByTagName("img")[0].style.opacity = 0.3;


}