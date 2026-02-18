type Token = //lista de tokens válidos - Lexer
    { tipo: 'numero'; valor: number } | { tipo: 'mais' } | { tipo: 'menos' };

type Expr = //Arvore de sintaxe abstrata - Parser
    | { tipo: 'soma'; x: Expr; y: Expr }
    | { tipo: 'subtracao'; x: Expr; y: Expr }
    | { tipo: 'numero'; valor: number };

class Lexer {
    code: string;
    idx: number = 0;
    tokens: Token[] = [];

    constructor(code: string) {
        this.code = code;
    }

    isNumber(char: string): boolean {
        //verificar se um caracter é numérico
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

    lex(): Token[] {
        while (this.idx < code.length) {
            //enquanto o contador for menor que o tamanho do código
            if (this.isNumber(code[this.idx])) {
                //se for numérico...
                let number = code[this.idx]; //pego o caracter atual
                let nextChar = this.peek(); //verifico o que é o próximo caracter

                if (nextChar === null) {
                    //se o próximo caracter for nulo...
                    this.tokens.push({ tipo: 'numero', valor: parseInt(number) }); //adiciono tipo número e o seu valor à lista de tokens
                    this.next(); //avanço o contador
                    break; //paro o laço de repetição
                }

                while (this.isNumber(nextChar)) {
                    //enquanto o próximo caracter for numérico...
                    number = number + nextChar; //crio um texto para concatenar os cracteres numéricos
                    this.next(); //avanço a posição

                    nextChar = this.peek(); //verifico o que é o próximo caracter
                    if (nextChar === null) break; //caso seja nulo, paro o laço de repetição
                }

                this.tokens.push({ tipo: 'numero', valor: parseInt(number) });
                this.next();
            } else if (code[this.idx] === '+') {
                this.tokens.push({ tipo: 'mais' });
                this.next();
            } else if (code[this.idx] === '-') {
                this.tokens.push({ tipo: 'menos' });
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
/*
  EXPR - NUMERO | OPERAÇÃO 
  NÚMERO - tem pelo menos 1 dígito de 0 à 9 ou tem sinal - e pelo menos um dígito de 0 à 9  
  OPERAÇÃO - SOMA | SUBTRAÇÃO 
  SOMA - NÚMERO + EXPR
  SUBTRAÇÃO - NÚMERO - EXPR
  */
class Parser {
    tokens: Token[];
    cont: number = 0;
    constructor(tokens: Token[]) {
        this.tokens = tokens;
    }

    parse(): Expr {
        //-14-22+3 | Less - Number - Less - Number - Plus - Number

        //caso base - próximo item da lista de tokens for nulo
        const tokenAtual = this.tokens[this.cont];

        if (tokenAtual === undefined) throw new Error('cabou');

        const nextToken = this.tokens[this.cont + 1];
        //ast - {Tipo, x, {tipo, x, {tipo, x}}}
        let expr: Expr | null = null;
        if (tokenAtual.tipo === 'menos') {
            if (nextToken !== undefined && nextToken.tipo === 'numero') {
                expr = { tipo: 'numero', valor: nextToken.valor * -1 };
                this.cont += 2;
            }
        } else if (tokenAtual.tipo === 'numero') {
            this.cont++;
            expr = { tipo: 'numero', valor: tokenAtual.valor };
        }

        if (expr === null) {
            throw new Error('expressão inválida');
        }

        const op = this.tokens[this.cont];

        if (op !== undefined && op.tipo === 'menos') //verificar a próxima operação
        {
            this.cont++;
            return { tipo: 'subtracao', x: expr, y: this.parse() };
        } else if (op !== undefined && op.tipo === 'mais') {
            this.cont++;
            return { tipo: 'soma', x: expr, y: this.parse() };
        } else {
            return expr;
        }

        throw new Error('Erro desconhecido, SE VIRE ');
    }
}

class Interpreter {
    ast: Expr;
    idx: number = 0;

    constructor(ast: Expr) {
        this.ast = ast;
    }

    interp(): number {
        switch (this.ast.tipo) {
            case 'numero':
                return this.ast.valor;

            case 'soma':
                const SumEsquerda = new Interpreter(this.ast.x).interp();
                const SumDireita = new Interpreter(this.ast.y).interp();
                return SumDireita + SumEsquerda;

            case 'subtracao':
                const SubEsquerda = new Interpreter(this.ast.x).interp();
                const SubDireita = new Interpreter(this.ast.y).interp();
                return SubDireita - SubEsquerda;
        }
    }
}

const enter = '-5+4 +10';
let code = '';
for (let i = 0; i < enter.length; i++) {
    if (enter[i] != ' ') {
        code += enter[i];
    }
}
const lexer = new Lexer(code);
const parser = new Parser(lexer.lex());
const interpreter = new Interpreter(parser.parse());

console.log(interpreter.interp());