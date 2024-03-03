// const isBirthday: boolean = true;
// let age: number = 40;
// const userName: string = "John";

// const userData = {
// 	isBirthdayData: false,
// 	ageData: 40,
// 	userNameData: 'John',
// 	messages: {
// 		error: "Error"
// 	},
// }

// const createError = (msg: string) => {
// 	throw new Error(msg)
// }

// function logBrMsg({isBirthdayData, ageData, userNameData, messages: {error}}: {
// 	isBirthdayData: boolean
// 	userNameData: string
// 	ageData: number,
// 	messages: {error: string}
// }): string {
// 	if (isBirthdayData) {
// 		console.log('i am here')
// 		return `Congrats ${userNameData} age ${ageData + 1}`
// 	} else {
// 		return createError(error)
// 	}
// }

// logBrMsg(userData)

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



// TASK2
// const electricityUserData = {
// 	readings: 95,
// 	units: 'kWt',
// 	mode: 'double',
// }

// const waterUserData = {
// 	readings: 3,
// 	units: 'm3',
// }

// const elRate: number = 0.45
// const wRate: number = 2

// const monthPayments: number[] = [0, 0] // [electricity, water]

// const calculatePayments = (
// 	{readings, mode}: {
// 		readings: number
// 		mode: string
// 	},
// 	wData: {
// 		readings: number,
// 	},
// 	elRate: number,
// 	wRate: number
// ): void => {
// 	if (mode === 'double' && readings < 50) {
// 		monthPayments[0] = readings * elRate * 0.7
// 	} else {
// 		monthPayments[0] = readings * elRate
// 	}
// 	monthPayments[1] = wData.readings * wRate
// }

// calculatePayments(electricityUserData, waterUserData, elRate, wRate)

// const sendInvoice = ([el, water]: number[], {readings, units}: {
// 	readings: number;
//   units: string;
// }, waterUserData: {
// 	readings: number;
//   units: string;
// }): string => {
// 	const text = `    Hello!
//     This month you used ${electricityUserData.readings} ${electricityUserData.units} of electricity
//     It will cost: ${el}€
    
//     This month you used ${waterUserData.readings} ${waterUserData.units} of water
//     It will cost: ${water}€`
// 	return text
// }

// const invoice: string = sendInvoice(monthPayments, electricityUserData, waterUserData)
// console.log(invoice);