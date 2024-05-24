// Competetive Programming Question

function canSwapToEqual(s1, s2) {
    if (s1 === s2) {
        return true;
    }
    if (s1.length !== s2.length) {
        return false;
    }

    let diff = [];
    for (let i = 0; i < s1.length; i++) {
        if (s1[i] !== s2[i]) {
            diff.push(i);
        }
        if (diff.length > 2) {
            return false;
        }
    }

    if (diff.length !== 2) {
        return false;
    }

    // Check if swapping the differing characters makes the strings equal
    console.log("object",diff)
    const [i, j] = diff;
    return s1[i] === s2[j] && s1[j] === s2[i];
}

// Example true cases
console.log(canSwapToEqual("abcd", "abdc")); 
// console.log(canSwapToEqual("12345", "12435")); 
// console.log(canSwapToEqual("hello", "hlelo")); 
// console.log(canSwapToEqual("test", "tset")); 

// console.log(canSwapToEqual("attack", "defend")); 
// console.log(canSwapToEqual("abcd", "dcba")); 
// console.log(canSwapToEqual("converse", "conserve")); 
