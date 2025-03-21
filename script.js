const heronsFormula = (a, b, c) => {
    return (1 / 4) * Math.sqrt((4 * a * a * b * b) - (Math.pow(((a * a) + (b * b) - (c * c)), 2)));
}

document.getElementById("heron-form").addEventListener("submit", (event) => {
    event.preventDefault();
    const a = document.getElementById("heron-a").value;
    const b = document.getElementById("heron-b").value;
    const c = document.getElementById("heron-c").value;
    let area = heronsFormula(a, b, c);
    area = Math.round(area * 100) / 100;
    document.getElementById("heron-result").value = area;
});

const ambiguousCase = (angleA, sideA, sideB) => {
    let height = sideB * Math.sin(angleA * (Math.PI / 180));
    height = Math.round(height * 100) / 100;
    sideA = Math.round(sideA * 100) / 100;
    console.log(height);
    if (angleA <= 90) {
        if (sideA < height) {
            document.getElementById("ambiguous-result").value = "no triangle";
        }
        else if (sideA === height) {
            document.getElementById("ambiguous-result").value = "right triangle";
        }
        else if (sideA > height) {
            document.getElementById("ambiguous-result").value = "one triangle";
        }
        else if (height < sideA && sideA < sideB) {
            document.getElementById("ambiguous-result").value = "two triangles";
        }
    }
    else if (angleA < 180) {
        if (sideA < sideB || sideA === sideB) {
            document.getElementById("ambiguous-result").value = "no triangle";
        }
        else if (sideA > sideB) {
            document.getElementById("ambiguous-result").value = "one triangle";
        }
    }
    else {
        document.getElementById("ambiguous-result").value = "no triangle";
    }
}

document.getElementById("ambiguous-form").addEventListener("submit", (event) => {
    event.preventDefault();
    const angleA = parseFloat(document.getElementById("ambiguous-angle-a").value);
    const sideA = parseFloat(document.getElementById("ambiguous-side-a").value);
    const sideB = parseFloat(document.getElementById("ambiguous-side-b").value);
    ambiguousCase(angleA, sideA, sideB);
});

newtonFunction = (x) => {
    return (6 * Math.pow(x, 4)) - (13 * Math.pow(x, 3)) - (18 * Math.pow(x, 2)) + (7 * x) + 6;
}

newtonDerivative = (x) => {
    return (24 * Math.pow(x, 3)) - (39 * Math.pow(x, 2)) - (36 * x) + 7;
}

const newtonsMethod = (guess) => {
    let x1 = guess;

    do {
        x1 = x1 - (newtonFunction(x1)) / (newtonDerivative(x1));
    } while (Math.abs(newtonFunction(x1)) > 0.0001);
    return Math.round(x1 * 100) / 100;
}

document.getElementById("newtons-form").addEventListener("submit", (event) => {
    event.preventDefault();
    console.log("newton");
    const guess = parseFloat(document.getElementById("root-guess").value);
    const rootApprox = newtonsMethod(guess);
    document.getElementById("root-approx").value = rootApprox;
});

const polynomialFunction = (coefficients, exponents, x) => {

}

