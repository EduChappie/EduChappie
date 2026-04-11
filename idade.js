function calcularIdade(dataNascimento) {
    // separa dia, mês e ano
    const [dia, mes, ano] = dataNascimento.split("/").map(Number);

    // cria objeto de data (mês em JS começa do 0, então subtrai 1)
    const nascimento = new Date(ano, mes - 1, dia);
    const hoje = new Date();

    let idade = hoje.getFullYear() - nascimento.getFullYear();

    // verifica se já fez aniversário esse ano
    const mesAtual = hoje.getMonth();
    const diaAtual = hoje.getDate();

    if (
        mesAtual < (mes - 1) || 
        (mesAtual === (mes - 1) && diaAtual < dia)
    ) {
        idade--;
    }

    return idade;
}

// exemplo
const i = calcularIdade("21/07/2006");

document.querySelector("span#idade").innerHTML = i

