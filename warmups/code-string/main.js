/*
Return the number of times that the string "code" appears anywhere
in the given string, except we'll accept any letter for the "d", so
"cope" and "cooe" would also count.

countCode("aaacodebbb") -> 1
countCode("codexxcode") -> 2
countCode("cozexxcope") -> 2
*/

function countCode(string) {
    console.log(string.replace(/[zp]/g, "d").split("code").length - 1);
}

countCode("aaacodebbb");
countCode("codexxcode");
countCode("cozexxcope");