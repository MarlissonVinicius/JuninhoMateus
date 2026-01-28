# Projeto JuninhoMateus
Este projeto implementa um dialeto simplificado de Lisp. Com as seguintes características:
- Abstrações através do operador `def`
- Lambdas através do operador `lambda` (Essas expressões podem receber apenas 1 argumento, seja criativo)
- Operadores aritméticos: +, -, *, /
- Um REPL
- Comentários com ;

## Exemplos

```lisp
(def id (lambda (x) x))
(id 10) ; 10

(def sum (lambda (x) (lambda (y) (+ x y))))
(sum 10 10) ; 20

(def x (list 1 2 3 4))
(map (lambda (x) (* x 2)) x) ; '(2 4 6 8)

(head x) ; 1
(tail x) ; '(2 3 4)
```

## TODO
### Operadores
- [ ] def
- [ ] list
- [ ] lambda
- [ ] map
- [ ] head
- [ ] tail
- [ ] *
- [ ] /
- [ ] +
- [ ] -
- [ ] ' (esse aqui é uma forma curta do `list`)
