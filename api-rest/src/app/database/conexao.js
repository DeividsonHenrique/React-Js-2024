import mysql from "mysql2";

const conexao = mysql.createConnection({
  host: "localhost",
  port: "3306",
  user: "root",
  password: "Henry",
  database: "bdcopa",
});

conexao.connect();
/**
 * executa um codigo sql com ou sem valores
 * @param {string} sql istrução sql a ser executada
 * @param {array=id | [selecao, id]}  valores a serem passados para o sql
 * @param {string} mensagemReject mensagem a ser exibida em caso de erro
 * @returns objeto da promessa
 */
export const consulta = (sql, valores = "", mensagemReject) => {
  return new Promise((resolve, reject) => {
    conexao.query(sql, valores, (erro, resultado) => {
      if (erro) return reject(mensagemReject);
      const row = JSON.parse(JSON.stringify(resultado));
      console.log(row);
      return resolve(row);
    });
  });
};

export default conexao;
