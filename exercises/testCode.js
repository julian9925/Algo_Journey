function getMiddle (str) {
    const chars = str.split('');
    const isOdd = chars.length % 2 === 1;
    console.log(chars);

    const oddIndex = isOdd && chars.length > 1 ? Math.floor(chars.length / 2) : 0;
    
    return !isOdd ? `${chars[(chars.length / 2) - 1]}${chars[(chars.length / 2)]}` : 
      `${chars[oddIndex]}`;
        
  }

    function lookSay (n) {
        let i = 1;
        let str = "1";
        let stack = [];
        while (i < n) {
            stack = str.split("");
            str = "";
            let cur = stack[0],
            count = 0;
            while (stack.length > 0) {
            const bottom = stack.shift();
            if (cur === bottom) {
                count++;
            } else {
                str = str + `${count}${cur}`;
                cur = bottom;
                count = 1;
            }
            }
            str = str + `${count}${cur}`;
            i++;
        }
        return str;
    }

    function firstNonRepeatingLetter (str) {
        const hashMap = new Array(str.length).fill({
            count: 0,
            index: -1
        });
        const chars = str.split('');

        console.log(hashMap);
      
        // chars.forEach((value, index) => {
        //     if (hashMap[(value).toLowerCase()].count === undefined) {
        //         hashMap[(value).toLowerCase()].count = 1;
        //         hashMap[(value).toLowerCase()].index = index;
        //     } else {
        //         hashMap[(value)]++;
        //     }
        // });

        // console.log(hashMap);

        // let nonRepeatedChars = '';
        // for (let key in hashMap) {
        //     if (hashMap[key].count === 1) {
        //         nonRepeatedChars = chars[hashMap[key]["index"]];
        //         break;
        //     }
        // }

        // return nonRepeatedChars;
      }


// console.log(getMiddle("test"));
// console.log(getMiddle("A"));
// console.log(getMiddle("testing"));
// console.log(getMiddle("middle"));

console.log(lookSay(3322));
// console.log(firstNonRepeatingLetter("STreSS"));