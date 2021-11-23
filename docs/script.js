const calcular = document.getElementById('calcular');


function prova () {
    const nome = document.getElementById('nome').value;
    const aplicacao = document.getElementById('aplicacao').value;
    const taxa = document.getElementById('taxa').value;
    const parcelas = document.getElementById('parcelas').value;


    if (aplicacao !== '' && taxa !== '' && parcelas !== '' ){
        
      var calculo1 = (1+taxa/100);
      var calculo2 = Math.pow(calculo1, parcelas);
      var calculo3 = (calculo2-1);
      var calculo4 = (calculo3/taxa/100)
      var calculo5 = (calculo4*100).toFixed(4)   
        
    

        resultado.textContent = `Olá ${nome}, se você aplicar ${aplicacao} reais à taxa de juros de ${taxa} ao mês, durante ${calculo5} meses, acumulará uma poupança de: ${calculo5} reais.`;
        




    }else {
        resultado.textContent = 'O valor da prestação ultrapassa 30% do valor de seu salário mensal, certifique-se de ter preenchido todos os campos';
    }

}
calcular.addEventListener('click', prova);
