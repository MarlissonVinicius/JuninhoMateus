type Token =
  | { tipo: 'numero', valor: number }
  | { tipo: 'mais' }

type Ast = { tipo: 'soma', x: number, y: number }

class Lexer {
  code: string;
  idx: number = 0;
  tokens: Token[] = [];

  constructor(code: string) {
    this.code = code;
  }

  isNumber(char: string): boolean {
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

  lex(): Token[] {
    while (this.idx < code.length) {
      if (this.isNumber(code[this.idx])) {
        let number = code[this.idx];
        let nextChar = this.peek();

        if (nextChar === null) {
          this.tokens.push({ tipo: 'numero', valor: parseInt(number) });
          this.next();
          break;
        }

        while (this.isNumber(nextChar)) {
          number = number + nextChar;
          this.next();

          nextChar = this.peek();
          if (nextChar === null) break;
        }

        this.tokens.push({ tipo: 'numero', valor: parseInt(number) });
        this.next();
      } else if (code[this.idx] === '+') {
        this.tokens.push({ tipo: 'mais' });
        this.next();
      }
    }

    return this.tokens;
  }

  next(): string | null {
    if (this.idx + 1 < this.code.length) {
      this.idx += 1;

      return this.code[this.idx];
    }

    return null;
  }

  peek(): string | null {
    if (this.idx + 1 < this.code.length) return this.code[this.idx + 1];

    return null;
  }
}

class Parser {
  tokens: Token[];
  idx: number = 0;
  ast: Ast[] = [];
  constructor(tokens: Token[]) {
    this.tokens = tokens;
  }

  parse(): Ast[] {
    const tokenAtual = this.tokens[this.idx];
    const token2 = this.tokens[this.idx + 1];
    const token3 = this.tokens[this.idx + 2];

    if (tokenAtual.tipo === 'numero' && token2.tipo === 'mais' && token3.tipo == 'numero') {
      this.ast.push({ x: tokenAtual.valor, tipo: 'soma', y: token3.valor });
    }

    return this.ast;
  }
}

class Interpreter {
  ast: Ast[];
  idx: number = 0;

  constructor(ast: Ast[]) {
    this.ast = ast;
  }

  interp(): number {
    const x: number = this.ast[0].x;
    const y: number = this.ast[0].y;

    return x + y;
  }
}

const code = '14+2'
const lexer = new Lexer(code);
const parser = new Parser(lexer.lex())
const interpreter = new Interpreter(parser.parse());

console.log(interpreter.interp());
