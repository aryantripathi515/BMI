const form = document.querySelector('form');

form.addEventListener('submit',(e)=>{
    e.preventDefault();

    const height = Number(document.querySelector('#height').value);
    const weight = Number(document.querySelector('#Weight').value);
    const result = document.querySelector('#result');

    if(height === '' || height<0 || isNaN(height)){
        result.innerHTML=`Please Gave valid Height ${height}.`
    }else if(weight === '' || weight<0 || isNaN(weight)){
        result.innerHTML=`Please Gave valid Weight ${weight}.`
    }else{
        const bmi = (weight/((height*height)/10000)).toFixed(2)
        if(bmi<18.66){
            result.innerHTML= `<span>BMI:${bmi}</span>
            <span> Under Weight</span>`

        }else if(bmi>18.66 && bmi <24.99){
            result.innerHTML= `<span>BMI:${bmi}</span>
            <span> Normal Range</span>`
        } else if(bmi>24.99){
            result.innerHTML= `<span>BMI:${bmi}</span>
            <span> OverWeight</span>`
        }
     
    }
    
});