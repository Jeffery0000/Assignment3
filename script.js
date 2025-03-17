const heronsFormula = (a, b, c) => {
    return (1 / 4) * Math.sqrt((4 * a * a * b * b) - (Math.pow(((a * a) + (b * b) - (c * c)), 2)));
}

document.getElementById("heron-form").addEventListener("submit", (event) => {
    event.preventDefault();
    const a = document.getElementById("heron-a").value;
    const b = document.getElementById("heron-b").value;
    const c = document.getElementById("heron-c").value;
    const area = heronsFormula(a, b, c);
    document.getElementById("heron-result").value = area;
});

const ambiguousCase = (angleA, sideA, sideB) => {
    angleA = angleA * (Math.PI / 180);
    const height = sideB * Math.sin(angleA);
    console.log(height);
}

const newtonsMethod = (guess) => {

}

const polynomialFunction = (coefficients, exponents, x) => {

}

