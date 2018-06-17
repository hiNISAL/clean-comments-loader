const blockRegExp = /\/\*([\s\S]*?)\*\//gm
const lineRegExp = /\/\/.*?$/gm;
const emptyLineRegExp = /\n(\n)*( )*(\n)*\n/gm;

let tags = ['\'', '"', '`'];

function parse(arr, type) {
  if (type === 'onlyBlock') {
    return arr.join('').replace(blockRegExp, '');
  }

  if (type === 'onlyLine') {
    return arr.join('').replace(lineRegExp, '');
  }
  
  return arr.join('')
        .replace(blockRegExp, '')
        .replace(lineRegExp, '');
}

// 将数组进行合并 并把合并后的内容放在数组第一位
function handleStringArray(arr, type) {
  let [a = [], ...b] = arr;

  b = parse(b, type)
  
  return [[...a, b].join('')];
}

// 清除空行
function rmEmptyLine(str) {
  return str.replace(emptyLineRegExp, '\n\n');
}

exports.removeComments = function(code, type) {
  code = '\n' + code;
  const length = code.length;
  let strFlag = false;

  let parsedStrArr = [];

  // 开始遍历
  for (let i = 0; i < length; i ++) {
    parsedStrArr.push(code[i]);

    // 如果碰到引号
    if (tags.includes(code[i])) {
      let tag = code[i];

      let start = i;

      // 将已有的进行合并 并放到数组第一位
      parsedStrArr = handleStringArray(parsedStrArr, type);

      // 找到引号末尾 直接添加 并合并 放到数组第一位 （不对字符串内的注释进行匹配替换）
      while(1) {
        start ++;
        parsedStrArr.push(code[start]);
        if (code[start] === tag) {
          parsedStrArr = [parsedStrArr.join('')];
          i = start;
          break;
        }
      }
    }
  }

  let res = handleStringArray(parsedStrArr, type).join('').slice(1, length);

  res = rmEmptyLine(res);

  return res;
};
