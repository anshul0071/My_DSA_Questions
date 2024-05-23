function validParanthesis(str){
    const obj = {
        "{" : "}",
        "(" : ")",
        "[" : "]"
    }
    const res = [];
    for (const s of str){
        if(Object.keys(obj).includes(s)){
            res.push(s);
        }else{
            if(obj[res.pop()] !== s)
            return false
        }
    }
    return res.length === 0

}

const res = validParanthesis("[()");
console.log(res)