let weight, height, error, bmi, measure;

calculate = () => {
    weight = document.getElementById("weight").value;
    height = document.getElementById("height").value;
    error = "Please enter a valid value";
    height = height / 100;
    height = height * height;
    bmi = weight / height;
    bmi = bmi.toFixed(1);

    if(bmi <= 18.4){
        measure = `Your BMI is ${bmi} which means you're underweight.`;
    }
    else if (bmi >= 18.5 && bmi <= 24.9){
        measure = `Your BMI is ${bmi} which means your weight is normal.`;
    }
    else if (bmi >= 25 && bmi < 30){
        measure = `Your BMI is ${bmi} which means you're overweight.`;
    }
    else if(bmi >= 30){
        measure = `Your BMI is ${bmi} which means you're obese.`;
    }

    if (weight === 0){
        document.getElementById("result").innerHTML=error;
    }
    else if(height === 0){
        document.getElementById("result").innerHTML=error;
    }
    else{
        document.getElementById("result").innerHTML=measure;
    }

    if (weight < 0){
        document.getElementById("result").innerHTML=error;
    }
    else if(height < 0){
        document.getElementById("result").innerHTML=error;
    }
    else{
        document.getElementById("result").innerHTML=measure; 
    }
}