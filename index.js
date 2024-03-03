var isBirthday = true;
var age = 40;
var userName = "John";
var createError = function (msg) {
    throw new Error(msg);
};
function logBrMsg(isBirthday, userName, age) {
    if (isBirthday) {
        return "Congrats ".concat(userName, " age ").concat(age + 1);
    }
    else if (!isBirthday) {
        return 'Too Bad!';
    }
    return createError('Error');
}
logBrMsg(isBirthday, userName, age);
// const currRate = "1.05";
// const fetchCurr = (response: string): number => {
// 	const data = JSON.parse(response);    
// 	return data;
// };
// function transferEurToUsd(available: boolean, amount: number, commission: number): void {
// 	if (available) {
// 		let res = fetchCurr(currRate) * amount * commission;
// 		console.log(res);
// 		// Или запись в элемент на странице вместо консоли
// 	} else {
// 		console.log("Сейчас обмен недоступен");
// 	}
// }
// transferEurToUsd(true, 500, 1.05);
