/*
 * @lc app=leetcode.cn id=12 lang=javascript
 *
 * [12] 整数转罗马数字
 */

// @lc code=start
/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
	// var thousand = Math.floor(num / 1000);
	// var hundred = Math.floor((num % 1000) / 100);
	// var ten = Math.floor((num % 100) / 10);
	// var bit = Math.floor(num % 10);
	// thousand && (result += bitCalc(thousand, "M"));
	// hundred && (result += bitCalc(hundred, "CDM"));
	// ten && (result += bitCalc(ten, "XLC"));
	// result += bitCalc(bit, "IVX");
	return `${bitCalc(Math.floor(num / 1000), "M")}${bitCalc(Math.floor((num % 1000) / 100), "CDM")}${bitCalc(
		Math.floor((num % 100) / 10),
		"XLC"
	)}${bitCalc(Math.floor(num % 10), "IVX")}`;
};

function bitCalc(bit, char) {
	let ret = "";
	switch (bit) {
		case 1:
		case 2:
		case 3:
			ret += char[0].repeat(bit);
			break;
		case 4:
			ret += `${char[0]}${char[1]}`;
			break;
		case 5:
			ret += char[1];
			break;
		case 6:
		case 7:
		case 8:
			ret += `${char[1]}${char[0].repeat(bit - 5)}`;
			break;
		case 9:
			ret += `${char[0]}${char[2]}`;
			break;
	}
	return ret;
}
// intToRoman(3);
// @lc code=end
