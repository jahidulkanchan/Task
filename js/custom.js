
    var ToggleBtn = document.getElementById('toggle-btn');
    var BangText = document.getElementById('bang-text');
    var EngText = document.getElementById('eng-text');
    ToggleBtn.addEventListener('click', function(){
    ToggleBtn.classList.toggle('active');
    BangText.classList.toggle('active');
    EngText.classList.toggle('active');
    })

  // deposit button
   const depositBtn = document.getElementById('deposit-btn');
   depositBtn.addEventListener('click', function(){
    console.log(parseInt(Math.random()*100));
   let depositUserNumber = document.getElementById('deposit-user-number').value;
    let newDepositUserNumber = parseFloat(depositUserNumber);

    let passValue = document.getElementById('pass-value');
    let newPassValue = parseFloat(passValue.innerText);
    
    let totalNumber = document.getElementById('total-value');
    let newTotal = totalNumber.innerText;
    newTotal = parseFloat(newTotal);
    
     
   if(newDepositUserNumber >= 1 ){
      passValue.innerText = newDepositUserNumber + newPassValue;
      totalNumber.innerText =( newTotal + newDepositUserNumber);
   }
    document.getElementById('deposit-user-number').value = '';

    });

  // withdraw button
    let withdrawBtn = document.getElementById('withdraw-btn');

    withdrawBtn.addEventListener('click', function(){
    let withdrawUserNumber = document.getElementById('withdraw-user-number').value;
   let newWithdrawUserNumber = parseFloat(withdrawUserNumber);

   let passValue = document.getElementById('pass-value');
   let newPassValue = parseFloat(passValue.innerText);

   let totalNumber = document.getElementById('total-value');
    let newTotal = totalNumber.innerText;
    newTotal = parseFloat(newTotal);
   
    if(newWithdrawUserNumber <= newTotal ){
      passValue.innerText = newWithdrawUserNumber + newPassValue;
      totalNumber.innerText =( newTotal + newWithdrawUserNumber*-1);
    }
    else if(newWithdrawUserNumber > newTotal ){
      alert('insufficient balanced. Your current balance $ ' + newTotal)
    }

    document.getElementById('withdraw-user-number').value = ''; 

   });


   // increment decrement button
    const minusNumber = document.getElementById('minus');
    countNumber = document.getElementById('number');
    priceNumber = document.getElementById('price-value');
    plusNumber = document.getElementById('plus');

    var i = 1;
    function addJust(condition){
      if (condition == true){
        i++;
      }
      else if(condition == false && i>1){
        i--;
      };
      countNumber.innerText = i; 
      priceNumber.innerText = 100*i;  
     }

    plusNumber.addEventListener('click', function(){  
      addJust(true);
    })
    minusNumber.addEventListener('click', function(){      
      addJust(false);
    });
    