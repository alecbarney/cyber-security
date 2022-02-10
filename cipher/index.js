const cipher = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',' ']

const cipherCode = ['b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','a',' ']
solution = [];
encoded = [];


const translate = (code) =>{
    for(i=0; i<code.length; i++){
      solution.push(cipher[cipherCode.indexOf(code[i])])
    }return solution.join('')
}



const unTranslate = (code) =>{
    for(i=0; i<code.length; i++){
      encoded.push(cipherCode[cipher.indexOf(code[i])])
    }return encoded.join('')
}





console.log(unTranslate('i love cryptography'))
console.log(translate('j mpwf dszquphsbqiz'))