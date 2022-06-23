let num = [5, 8, 2, 9, 3]
a = [10, 10, 10, 10, 10, 10]

console.log(`Nosso vetor é o ${num}`)
num[3] = 8
num.push(12)
console.log(num.length)

for (let i = 0; i < num.length; i++) {
    console.log(`Índice ${i}: valor --> ${num[i]}`)
}
console.log('==========================')
for (i in num) {
    console.log(`Posição ${i} = ${num[i]}`)
}

console.log(`${num.indexOf(13)}`)