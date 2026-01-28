type Token =
  | { tipo: 'numero', valor: number }
  | { tipo: 'mais' }

const code = '1222'

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
    if (this.isNumber(code[this.idx])) {
      let number = code[this.idx];
      let nextChar = this.peek();

      if (nextChar === null) {
        throw new Error('Invalid code');
      }

      while (this.isNumber(nextChar)) {
        number = number + nextChar;
        this.next();

        nextChar = this.peek();
        if (nextChar === null) {
          break;
        }
      }

      this.tokens.push({ tipo: 'numero', valor: parseInt(number) });
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
    if (this.idx + 1 < this.code.length) {
      return this.code[this.idx + 1];
    }

    return null;
  }
}

const lexer = new Lexer(code);
console.log(lexer.lex());
