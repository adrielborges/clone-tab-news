function status(request, response) {
  response.status(200).json({ chave: "Aluno acima da média" });
}

export default status;
