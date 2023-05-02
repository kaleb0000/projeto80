var Nomes = []

function Submit(){
    var inp = document.getElementById("inserir").value
    Nomes.push(inp)
    document.getElementById("done").innerHTML = "Pronto!!"
    document.getElementById("display").innerHTML = Nomes
    console.log(Nomes)
}