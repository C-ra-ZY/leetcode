var subsetsWithDup = function (nums) {
  nums.sort((a, b) => a - b);
  let result = [];
  for (let index = 1; index < nums.length + 1; index++) {
    let temp = unit(nums, index);
    result.push(...temp);
  }
  result.push([]);
  return [
    ...new Set(
      result.map((e) => {
        return JSON.stringify(e);
      })
    ),
  ].map(JSON.parse);

  function unit(arr, n) {
    let functionText = `let result=[];`;
    loopTextSuffix = ``;

    for (let count = 1; count <= n; count++) {
      let placeholder = `index${count}`;
      functionText += `for(let ${placeholder}=${
        count > 1 ? `index${count - 1}` : -1
      }+1;${placeholder}<${arr.length};${placeholder}++){`;
      loopTextSuffix += `}\n`;
    }
    functionText += `result.push([${new Array(n)
      .fill(undefined)
      .map((e, index) => {
        return `arr[index${index + 1}]`;
      })}])`;

    functionText += loopTextSuffix;
    functionText += "return result;";
    let functionEntity = new Function("arr", "n", functionText);
    return functionEntity(arr, n);
  }
};
