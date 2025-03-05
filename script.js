
document.getElementById("heronForm").addEventListener("submit", (event) =>{
    event.preventDefault();
    let a = document.getElementById("heronA").value;
    let b = document.getElementById("heronB").value;
    let c = document.getElementById("heronC").value;
    let s = (parseFloat(a) + parseFloat(b) + parseFloat(c)) / 2;
    let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    document.getElementById("heronResult").value = area;
});
