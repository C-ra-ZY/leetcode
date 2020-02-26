/*
 * @lc app=leetcode.cn id=30 lang=javascript
 *
 * [30] 串联所有单词的子串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
	if (!s || !words.length) {
		return [];
	}
	let map = new Map();
	for (let word of words) {
		map.set(word, (map.get(word) || 0) + 1);
	}

	function split(s, wordLen) {
		let arr = [],
			index = 0,
			tempStr = "";
		while (index < s.length) {
			tempStr += s[index];
			if (index % wordLen === wordLen - 1) {
				arr.push(tempStr);
				tempStr = "";
			}
			index++;
		}
		return arr;
	}

	let targetLength = s.length - words.join("").length + 1,
		wordLength = words[0].length,
		res = [],
		totalLen = wordLength * words.length,
		index = 0;
	while (index < targetLength) {
		let str = s.substr(index, totalLen);
		if (map.has(str.substr(0, wordLength))) {
			let tempWords = split(str, wordLength);
			let tempMap = new Map(map);
			for (let tempWord of tempWords) {
				let count = tempMap.get(tempWord);
				tempMap.set(tempWord, count - 1);
			}
			if (![...tempMap.values()].some((e) => e !== 0)) {
				res.push(index);
			}
		}
		index++;
	}

	return res;
};
// findSubstring("sheateateseatea", ["sea", "tea", "ate"]);
// @lc code=end
