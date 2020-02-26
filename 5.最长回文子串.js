/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  var n = s.length;
  var res = "";
  var dp = new Array(n).fill(undefined).map(e => new Array(n).fill(false));
  for (var i = 0; i < n; i++) {
    for (var j = i; j >= 0; j--) {
      if (s.charAt(i) === s.charAt(j) && (i - j < 2 || dp[i - 1][j + 1])) {
        console.log(`i is ${i}: ${s.charAt(i)}, j is ${j}: ${s.charAt(j)}`);
        dp[i][j] = true;
        console.log(JSON.stringify(dp));
      }
      if (dp[i][j] && i - j + 1 > res.length) {
        console.log(
          `i is ${i}: ${s.charAt(i)}, j is ${j}: ${s.charAt(
            j
          )}, former res is ${res}`
        );
        res = s.substring(j, i + 1);
      }
    }
  }
  return res;
};

// var str =
//   "civilwartestingwhetherthatnaptionoranynartionsoconceivedandsodedicatedcanlongendureWeareqmetonagreatbattlefiemldoftzhatwarWehavecometodedicpateaportionofthatfieldasafinalrestingplaceforthosewhoheregavetheirlivesthatthatnationmightliveItisaltogetherfangandproperthatweshoulddothisButinalargersensewecannotdedicatewecannotconsecratewecannothallowthisgroundThebravelmenlivinganddeadwhostruggledherehaveconsecrateditfaraboveourpoorponwertoaddordetractTgheworldadswfilllittlenotlenorlongrememberwhatwesayherebutitcanneverforgetwhattheydidhereItisforusthelivingrathertobededicatedheretotheulnfinishedworkwhichtheywhofoughtherehavethusfarsonoblyadvancedItisratherforustobeherededicatedtothegreattdafskremainingbeforeusthatfromthesehonoreddeadwetakeincreaseddevotiontothatcauseforwhichtheygavethelastpfullmeasureofdevotionthatweherehighlyresolvethatthesedeadshallnothavediedinvainthatthisnationunsderGodshallhaveanewbirthoffreedomandthatgovernmentofthepeoplebythepeopleforthepeopleshallnotperishfromtheearth";
// var str="babaddtattarrattatddetartrateedredividerb"
var str = "abacab";
console.log(new Date());
console.log(longestPalindrome(str));
console.log(new Date());
// @lc code=end
