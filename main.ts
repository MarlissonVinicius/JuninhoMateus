type Token = //Criação do tipo token, onde se for do tip número terá um valor que será um número 
  | { tipo: 'numero', valor: number }
  | { tipo: 'mais' }

class Lexer { 
  code: string; //atributo code, que será utilizado internamente na classe 
  idx: number = 0; //ponteiro que dirá qual posiçao atual está sendo lida 
  tokens: Token[] = []; //array do tipo token que receberá todos os textos que foram convertidos 

  constructor(code: string) {
    this.code = code;
  }

  isNumber(char: string): boolean { //método que verifica se argumento passado é um número 
    //caso seja, retornará verdadeiro 
    if (char === '0') { return true; }
    if (char === '1') { return true; }
    if (char === '2') { return true; }
    if (char === '3') { return true; }
    if (char === '4') { return true; }
    if (char === '5') { return true; }
    if (char === '6') { return true; }
    if (char === '7') { return true; }
    if (char === '8') { return true; }
    if (char === '9') { return true; }

    return false;
  }
  
  lex(): Token[] { //método que fará a conversão de string para token 
    while (this.idx < code.length) { 
      console.log(this.idx, code.length,code[this.idx], code[this.idx+1])
      if (this.isNumber(code[this.idx])) { //verifica se o caracterer atual que estou é um número 
        let number = code[this.idx]; //pega o número atual e guardar 
        let nextChar = this.peek(); //recebe a posição do próximo índice  

        if (nextChar === null) { //verificando se o próximo caractere é nulo 
          //throw new Error('Invalid code'); //caso seja, lanço uma exceção. 
          break; 
        }

        while (this.isNumber(nextChar)) { //enquanto o próximo caracter for um número 
          number = number + nextChar; //concatenando o valor atual com o próximo 
          this.next(); //avançando o ponteiro 

          nextChar = this.peek(); //observo o próximo número 
          if (nextChar === null) {
            break;
          }
        }

        this.tokens.push({ tipo: 'numero', valor: parseInt(number) }); // converto a string em inteiro e armazeno o tipo e valor no array de tokens 
        this.next()
      } else if (code[this.idx] === "+") {
        this.tokens.push({ tipo: "mais" })
        this.next(); 
      }
    }
    return this.tokens;
  }

  next(): string | null {
    if (this.idx + 1 < this.code.length) { //verificando se a próxima casa existe 
      this.idx += 1; //se existir, eu passo para ela 
      return this.code[this.idx]; //me retorna o caracter da próxima casa 
    }

    return null; //caso não tenha próxima casa, me retorna nulo 
  }

  peek(): string | null { //método espiada 
    if (this.idx + 1 < this.code.length) { //se a próximo indice for menor que o tamanho máximo da minha string 
      return this.code[this.idx + 1]; //retornar a próxima posição 
    }

    return null;
  }
}

const code = '+1222+1345' //Constante que receberá o comando 
const lexer = new Lexer(code);
console.log(lexer.lex());
