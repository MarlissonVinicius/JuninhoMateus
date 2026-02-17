# Mini Interpretador em TypeScript

Este projeto implementa um interpretador extremamente simples em **TypeScript** capaz de entender expressões no formato:

```
1 mais 2
```

O objetivo inicial é reconhecer que a palavra **"mais"** representa uma operação de soma entre dois números naturais de 1 dígito.

---

## 📘 Introdução

O interpretador deverá:

- Receber uma string contendo dois números de 1 dígito  
- Identificar a palavra **"mais"** como operador de soma  
- Calcular o resultado da expressão  
- Exibir o resultado no console  

Formato esperado da entrada:

```
numero mais numero
```

Exemplo:

```
3 mais 4
```

---

## 🧠 Exemplo de uso

Entrada:

```
1 mais 2
```

Saída esperada:

```
3
```

Outro exemplo:

Entrada:

```
7 mais 5
```

Saída:

```
12
```

---

## 📌 Regras iniciais

- Apenas números naturais de **1 dígito (0–9)**  
- Apenas a operação **"mais"**  
- A expressão terá exatamente o formato:

```
<numero> mais <numero>
```

Com espaços entre as partes.

---

## 🏗 Estrutura inicial sugerida

```
/src
  └── index.ts
README.md
```

---

## ✅ TODO

### Estrutura básica
- [ ] Criar arquivo principal em TypeScript  
- [ ] Receber a expressão como string  
- [ ] Separar a string em partes (tokenização simples)  

### Identificação
- [ ] Verificar se existem exatamente 3 partes  
- [ ] Verificar se a segunda parte é a palavra `"mais"`  
- [ ] Converter as partes numéricas para tipo `number`  

### Execução
- [ ] Realizar a soma  
- [ ] Exibir resultado no console  

---

## 🚀 Próximos passos (futuro)

- [ ] Permitir números com mais de 1 dígito  
- [ ] Permitir outras operações (menos, vezes, dividido)  
- [ ] Criar um Lexer formal  
- [ ] Criar um Parser  
- [ ] Criar uma AST  
- [ ] Implementar um pequeno REPL  

---

## 📌 Objetivo educacional

Este projeto tem como objetivo aprender os fundamentos da construção de interpretadores, evoluindo gradualmente de uma abordagem simples para uma arquitetura mais robusta com **Tokenização, Parsing e Avaliação**.
