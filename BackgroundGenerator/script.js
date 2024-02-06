const gradientSelect = document.getElementById('gradient');
const colorInputs = document.querySelectorAll('.color-choice input[type="color"]');


const handleChange = () => {

    let gradientType = gradientSelect.value;
    let colorChoice = Array.from(colorInputs).map(color => color.value);
    document.body.style.background = `${gradientType}(${colorChoice[0]} , ${colorChoice[1]})`
}

gradientSelect.addEventListener("change", handleChange);
colorInputs.forEach(color => color.addEventListener("change", handleChange));


