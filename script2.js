 let nomes = ['Mick', 'Leo', 'Rafa']
 let novo = nomes

 novo.pop() //apaga o ultimo
 console.log(novo)

 console.log(nomes.length)

 //

 let nomes2 = ['Mick2', 'Leo2', 'Rafa2']

 let remove = nomes2.shift()
 console.log(nomes, remove)

 //

 let nomes3 = ['Mick3', 'Leo3', 'Rafa3']

 nomes3.push('carlos') //coloca no final
 nomes3.unshift('lucas') //coloca no começo
 console.log(nomes3)

 //

 let nomes4 = ['Mick4', 'Leo4', 'Rafa4']
 let novo4 = nomes.slice(0,2)
 console.log(novo4)