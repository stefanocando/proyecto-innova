let btn_veg = document.getElementById("vegetariano");
let btn_sodio = document.getElementById("sodio");
let btn_azucar = document.getElementById("bajo-azucar");
let btn_gluten = document.getElementById("sin_gluten");
let btn_diabetes = document.getElementById("diabetes");
let fork = document.getElementById("fork");
let emporio = document.getElementById("emporio");
let quinoa = document.getElementById("quinoa");
let huerto = document.getElementById("huerto");

btn_veg.addEventListener("click", showVeg);
btn_sodio.addEventListener("click", showBajoSodio);
btn_azucar.addEventListener("click", showBajoAzucar);
btn_gluten.addEventListener("click", showNoGluten);
btn_diabetes.addEventListener("click", showDiabetes);

function showVeg() {
    if (btn_veg.checked == true){
        fork.style.display = "none";
        emporio.style.display = "none";
        quinoa.style.display = "none";
        huerto.style.display = "block";
    }
    else {
        fork.style.display = "block";
        emporio.style.display = "block";
        quinoa.style.display = "block";
        huerto.style.display = "block";
    }
}

function showBajoSodio() {
    if (btn_sodio.checked == true){
        fork.style.display = "none";
        emporio.style.display = "none";
        quinoa.style.display = "block";
        huerto.style.display = "block";
    }
    else {
        fork.style.display = "block";
        emporio.style.display = "block";
        quinoa.style.display = "block";
        huerto.style.display = "block";
    }
}

function showBajoAzucar() {
    if (btn_azucar.checked == true){
        fork.style.display = "block";
        emporio.style.display = "none";
        quinoa.style.display = "block";
        huerto.style.display = "block";
    }
    else {
        fork.style.display = "block";
        emporio.style.display = "block";
        quinoa.style.display = "block";
        huerto.style.display = "block";
    }
}

function showNoGluten() {
    if (btn_gluten.checked == true){
        fork.style.display = "none";
        emporio.style.display = "none";
        quinoa.style.display = "none";
        huerto.style.display = "block";
    }
    else {
        fork.style.display = "block";
        emporio.style.display = "block";
        quinoa.style.display = "block";
        huerto.style.display = "block";
    }
}

function showDiabetes() {
    if (btn_diabetes.checked == true){
        fork.style.display = "none";
        emporio.style.display = "block";
        quinoa.style.display = "block";
        huerto.style.display = "block";
    }
    else {
        fork.style.display = "block";
        emporio.style.display = "block";
        quinoa.style.display = "block";
        huerto.style.display = "block";
    }
}
