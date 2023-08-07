let weight, height, error, bmi, measure;

calculate = () => {
    weight = document.getElementById("weight").value;
    height = document.getElementById("height").value;
    error = "Please enter a valid value";
    measure = "";

    if (height > 0 && weight > 0){
        height = height / 100;
        height = height * height;
        bmi = weight / height;
        bmi = bmi.toFixed(1);
        if (bmi <= 18.4){
            measure = `Your BMI is <b>${bmi}</b> which means you're <b>underweight</b>.`
            document.getElementById("result").innerHTML=measure
        }
        else if (bmi >= 18.5 && bmi <= 24.9){
            measure = `Your BMI is <b>${bmi}</b> which means your weight is <b>normal</b>.`
            document.getElementById("result").innerHTML=measure
        }
        else if (bmi >= 25 && bmi < 30){
            measure = `Your BMI is <b>${bmi}</b> which means you're <b>overweight</b>.`
            document.getElementById("result").innerHTML=measure
        }
        else if (bmi >= 30){
            measure = `Your BMI is <b>${bmi}</b> which means you're <b>obese</b>.`
            document.getElementById("result").innerHTML=measure
        }
        else{
            document.getElementById("result").innerHTML=error
        }
        }
    else{
        document.getElementById("result").innerHTML=error
    }
}
