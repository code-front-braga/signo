function carregar() {
let data_nascimentoInput = document.querySelector('#nascimento');
let resultado = document.querySelector('#res');
let data_nascimento = data_nascimentoInput.value;


if(!data_nascimento) {
    alert('Escolha uma data');
    return;
       
} else {

    let separarData = data_nascimento.split('-');
    let dia = Number(separarData[2]);
    let mes = Number(separarData[1]);
    let signo = '';

    switch(mes) {

        case 1:
            if(dia <= 20) {
                signo = 'Capricórnio';                
                resultado.innerHTML = `Seu signo é: ${signo}.`

            } else {
                signo = 'Aquário';
                resultado.innerHTML = `Seu signo é: ${signo}`;
            }
            break;

        case 2:
            if(dia <= 18) {
                signo = 'Aquário';
                resultado.innerHTML = `Seu signo é: ${signo}`;
            } else {
                signo = 'Peixes'
                resultado.innerHTML = `Seu signo é: ${signo}`;
            }
            break;
            
        case 3:
            if(dia <= 20) {
                signo = 'Peixes';
                resultado.innerHTML = `Seu signo é: ${signo}`;
            } else {
                signo = 'Áries';
                resultado.innerHTML = `Seu signo é: ${signo}`;
            }
            break;

        case 4:
            if(dia <= 20) {
                signo = 'Áries';
                resultado.innerHTML = `Seu signo é: ${signo}`;
            } else {
                signo = 'Touro';
                resultado.innerHTML = `Seu signo é: ${signo}`;
            }
            break;

        case 5:
            if(dia <= 20) {
                signo = 'Touro';
                resultado.innerHTML = `Seu signo é: ${signo}`;
            } else {
                signo = 'Gêmeos';
                resultado.innerHTML = `Seu signo é: ${signo}`;
            }
            break;

        case 6:
            if(dia <= 20) {
                signo = 'Gêmeos';
                resultado.innerHTML = `Seu signo é: ${signo}`;
            } else {
                signo = 'Câncer';
                resultado.innerHTML = `Seu signo é: ${signo}`;
            }
            break;

        case 7:
            if(dia <= 22) {
                signo = 'Câncer';
                resultado.innerHTML = `Seu signo é: ${signo}`;
            } else {
                signo = 'Leão';
                resultado.innerHTML = `Seu signo é: ${signo}`;
            }
            break;
        
        case 8:
            if(dia <= 22) {
                signo = 'Leão';
                resultado.innerHTML = `Seu signo é: ${signo}`;
            } else {
                signo = 'Virgem';
                resultado.innerHTML = `Seu signo é: ${signo}`;
            }
            break;

        case 9:
            if(dia <= 22) {
                signo = 'Virgem';
                resultado.innerHTML = `Seu signo é: ${signo}`;
            } else {
                signo = 'Libra';
                resultado.innerHTML = `Seu signo é: ${signo}`;
            }
            break;

        case 10:
            if(dia <= 22) {
                signo = 'Libra';
                resultado.innerHTML = `Seu signo é: ${signo}`;
            } else {
                signo = 'Escorpião';
                resultado.innerHTML = `Seu signo é: ${signo}`;
            }
            break;

        case 11:
            if(dia <= 21) {
                signo = 'Escorpião';
                resultado.innerHTML = `Seu signo é: ${signo}`;
            } else {
                signo = 'Sagitário';
                resultado.innerHTML = `Seu signo é: ${signo}`;
            }
            break;

        case 12:
            if(dia <= 21) {
                signo = 'Sagitário';
                resultado.innerHTML = `Seu signo é: ${signo}`;
            } else {
                signo = 'Capricórnio';
                resultado.innerHTML = `Seu signo é: ${signo}`;
            }
            break;

            default:                
        }
    }   
}




