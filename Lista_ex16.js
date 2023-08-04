const idadeDoAluno = 18;
const possuiResponsavel = false;

if (idadeDoAluno >= 18) {
    console.log(`aluno maior de idade, pode fazer a rematricula `);
} else if (possuiResponsavel) {
    console.log(`responsavel deve fazer a rematricula`);
} else {
    console.log(`não é possivel realizar a rematricula`);
}