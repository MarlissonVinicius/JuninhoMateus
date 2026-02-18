//Tokens
type Token =
    | { tipo: 'Number'; valor: number }
    | { tipo: 'Plus'; valor: '+' }
    | { tipo: 'Less'; valor: '-' };

type Expr = { tipo: 'Sum'; x: number; y: number } | { tipo: 'Sub'; x: number; y: number };

//Lexer - Processo responsável por receber o texto string e converter para tokens e valores
class Lexer {
    comand: string;
    posi: number = 0;
    tokens: Token[] = [];

    constructor(comand: string) {
        this.comand = comand; //comand variável irá receber o valor da parâmetro
    }

    isNumber(char: string): boolean {
        if (char === '0') {
            return true;
        }
        if (char === '1') {
            return true;
        }
        if (char === '2') {
            return true;
        }
        if (char === '3') {
            return true;
        }
        if (char === '4') {
            return true;
        }
        if (char === '5') {
            return true;
        }
        if (char === '6') {
            return true;
        }
        if (char === '7') {
            return true;
        }
        if (char === '8') {
            return true;
        }
        if (char === '9') {
            return true;
        }

        return false;
    }

    avancar() {
        if (this.posi < this.comand.length) {
            this.posi++;
        }
    }

    lex(): Token[] {
        //comand 15 mais 2
        while (this.posi < this.comand.length) {
            0 < 9;
            let word = this.comand[this.posi]; //1
            let num: string = '';
            console.log('MC Posi:' + this.posi + ' | Palavra ' + word); // 0 - 1

            if (word != undefined) {
                if (word != ' ') {
                    if (this.isNumber(word)) {
                        const a = this.comand[this.posi + 1];
                        //
                        while (a != undefined && this.isNumber(a)) {
                            //1 - 5
                            console.log(word)
                            word = word + a;
                            this.avancar(); // 2
                        }
                        this.tokens.push({ tipo: 'Number', valor: parseInt(word) });
                    } else if (word === '+') {
                        this.tokens.push({ tipo: 'Plus', valor: '+' });
                    } else if (word === '-') {
                        this.tokens.push({ tipo: 'Less', valor: '-' });
                    } else {
                        throw new Error('Invalid Word');
                    }
                }
            }
            this.avancar();
        }
        return this.tokens;
    }
}

class Parser {
    tokens: Token[] = [];
    exprs: Expr[] = []; //{tipo: Operação, x: number, y:{tipo: Operação, x: number, y:etc...}}
    posi: number = 0;

    constructor(tokens: Token[]) {
        this.tokens = tokens;
    }

    avancar() {
        if (this.posi < this.tokens.length) {
            this.posi++;
        }
    }

    parse(): Expr[] {
        if (
            this.tokens[0]?.tipo === 'Number' &&
            this.tokens[1]?.tipo === 'Plus' &&
            this.tokens[2]?.tipo === 'Number'
        ) {
            this.exprs.push({ tipo: 'Sum', x: this.tokens[0].valor, y: this.tokens[2].valor });
        } else if (
            this.tokens[0]?.tipo === 'Number' &&
            this.tokens[1]?.tipo === 'Less' &&
            this.tokens[2]?.tipo === 'Number'
        ) {
            this.exprs.push({
                tipo: 'Sub',
                x: this.tokens[0].valor,
                y: this.tokens[2].valor,
            });
        }
        return this.exprs;
    }
}

class Interpreter {
    exprs: Expr[] = [];

    constructor(exprs: Expr[]) {
        this.exprs = exprs;
    }

    interp(): number {
        if (this.exprs[0]?.tipo === 'Sum') {
            return this.exprs[0]?.x + this.exprs[0]?.y;
        } else if (this.exprs[0]?.tipo === 'Sub') {
            return this.exprs[0].x - this.exprs[0].y;
        } else {
            throw new Error('Invalid Expression');
        }
    }
}

//Entrada
const comand = '15 + 8';
const lexer = new Lexer(comand);
const parser = new Parser(lexer.lex());
const interpreter = new Interpreter(parser.parse());
console.log(comand + ' = ' + interpreter.interp());
//Saída esperada 7
