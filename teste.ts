class Teste{
    decre(num:number) {
        if (num > 0) {
            console.log(num)
            num-- 
            this.decre(num)
        }
    }

    cont(init: number, lim: number) {
        //caso base - init == lim 
    }
}

const teste = new Teste();
teste.decre(15) 