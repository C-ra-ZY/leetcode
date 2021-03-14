var minWindow = function (s, t) {
  if (!s) {
    return s;
  }
  if (s.length < t.length) {
    return "";
  }
  let pool = [];
  for (let index = 0; index < s.length; index++) {
    if (t.includes(s[index])) {
      pool.push(index);
    }
  }
  let tags = t.split(""),
    result = "";
  for (let index = t.length - 1; index < pool.length; index++) {
    let start = pool[index - t.length + 1],
      end = pool[index];
    if (start === end) {
      end++;
    }
    let temp = s.substr(start, end);

    if (check(temp)) {
      if (!result) {
        result = temp;
      } else if (result.length > temp.length) {
        result = temp;
      }
    }
  }
  return result;
  function check(temp) {
    for (let tag of tags) {
      if (temp.includes(tag)) {
        temp = temp.replace(tag, "");
      } else {
        return false;
      }
    }
    return true;
  }
};
let timeLable = "time";
console.time(timeLable);
console.log(
  `\n` + minWindow("AA", "AA")
  // "hwffmpuhbqftfeqfsyvwbrxwbgzalhfselzsctbdmgzrnpzfnwdonakoilrutwozjormjurvaspphouwkzmxczokkfgddvcplvdupussphhwxethdfgfeusrbyufvzugwzdmvvgkenhbtckzjqeqnyhoxbvscrbzqenmbtwfifiejudtkjjziqqhtlzwdcxtikhjfgqpnatxuwqfgbgqtwxmiyklbhgjtqvywlojmhiggynobweusbjcztpadwmwmhxkultgucpcceqgauatvlvxfnzkjlgxudhpqcxngmpltgrtctoafmxmzwwkkcheiqvystlbhdoajfwnaknfwktvjpftuozcevczoqcxtqyevurxgffdryaaoivkyvmdsqeiggfbwfhtbzqigvlxunakxxuwuibmafujnckjhscjturzqeymtywrwspscqfcxblkdwtlqxwlrpkjvkvolthjlwbnogqlibvnzqyrpwchlosgboxmhevvbwkrfcdpgachrdzizdrnukvvysjhxeeacprjtwyzxdhqgiyhlswhcsccklljrqlwhdfabgcyjjqprryejvmlnopzcajtsupzzxcbdgbmpudilbmwyajlryltawotqgusdytgewutqxddaqbzqkkhkxcltrgmzagczzkdxgzqdctfuxenhrwuqzhmsnyr",
  // "pgvofhuentu"
);
console.timeEnd(timeLable);
