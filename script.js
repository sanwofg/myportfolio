function darkMode(){
    let modee = document.querySelector('.mode');
    
     if(modee.innerHTML === `DARK MODE`){

        modee.innerHTML = `LIGHT MODE`;
        document.querySelector('body').style.backgroundColor = 'black';
        modee.classList.add('mode2')
        
     } else{
        document.querySelector('body').style.backgroundColor = 'white'
        modee.innerHTML = `DARK MODE`;
        modee.classList.remove('mode2')
    }
      
}