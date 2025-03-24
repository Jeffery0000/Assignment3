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
    const sideARounded = Math.round(sideA * 100) / 100;
    const sideBRounded = Math.round(sideB * 100) / 100;

    if (angleA <= 90) {
        if (sideARounded < height) {
            return "no triangle";
        }
        else if (sideARounded == height) {
            return "right triangle";
        }
        else if (sideARounded > sideBRounded) {
            return "one triangle";
        }
        else if (height < sideARounded && sideARounded < sideBRounded) {
            return "two triangles";
        }
    }
    else if (angleA < 180) {
        if (sideARounded <= sideBRounded) {
            return "no triangle";
        }
        else if (sideARounded > sideBRounded) {
            return "one triangle";
        }
    }
    else {
        return "no triangle";
    }
}

document.getElementById("ambiguous-form").addEventListener("submit", (event) => {
    event.preventDefault();

    const angleA = parseFloat(document.getElementById("ambiguous-angle-a").value);
    const sideA = parseFloat(document.getElementById("ambiguous-side-a").value);
    const sideB = parseFloat(document.getElementById("ambiguous-side-b").value);

    document.getElementById("ambiguous-result").value = ambiguousCase(angleA, sideA, sideB);
});

const newtonsMethod = (guess) => {

    const newtonFunction = (x) => {
        return (6 * Math.pow(x, 4)) - (13 * Math.pow(x, 3)) - (18 * Math.pow(x, 2)) + (7 * x) + 6;
    }

    const newtonDerivative = (x) => {
        return (24 * Math.pow(x, 3)) - (39 * Math.pow(x, 2)) - (36 * x) + 7;
    }

    let x1 = guess;

    do {
        x1 = x1 - (newtonFunction(x1)) / (newtonDerivative(x1));
    } while (Math.abs(newtonFunction(x1)) > 0.0001);

    return Math.round(x1 * 100) / 100;
}

document.getElementById("newtons-form").addEventListener("submit", (event) => {
    event.preventDefault();

    const guess = parseFloat(document.getElementById("root-guess").value);
    const rootApprox = newtonsMethod(guess);

    document.getElementById("root-approx").value = rootApprox;
});

const polynomialFunction = (coefficients, exponents, x) => {
    let result = ['', 0];

    for (let i = 0; i < coefficients.length; i++) {

        if (i > 0 && coefficients[i] > 0) {
            result[0] += ' + ';
        }
        else if (i > 0 && coefficients[i] < 0) {
            result[0] += ' - ';
        }

        if (coefficients[i] != 0) {
            if (exponents[i] == 0) {
                result[0] += Math.abs(coefficients[i]);
            }
            else if (exponents[i] == 1) {
                result[0] += Math.abs(coefficients[i]) + 'x';
            }
            else {
                result[0] += Math.abs(coefficients[i]) + 'x^' + exponents[i];
            }
        }

        result[1] += parseFloat(coefficients[i] * Math.pow(x, exponents[i]));
    }
    result[1] = Math.round(result[1] * 100) / 100;
    return result;
}

document.getElementById("polynomial-form").addEventListener("submit", (event) => {
    event.preventDefault();
    const coefficients = document.getElementById("coefficients").value.split(' ');
    const exponents = document.getElementById("exponents").value.split(' ');
    const x = parseFloat(document.getElementById("x-value").value);

    const array = polynomialFunction(coefficients, exponents, x);
    const func = array[0];
    const evaluation = array[1];

    document.getElementById("polynomial-func").value = func;
    document.getElementById("polynomial-evaluation").value = evaluation;
});