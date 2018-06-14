const blockRegExp = /\/\*([\s\S]*?)\*\//gm
const lineRegExp = /\/\/.*?$/gm;

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

function handleStringArray(arr, type) {
  let [a = [], ...b] = arr;

  b = parse(b, type)
  
  return [[...a, b].join('')];
}

exports.removeComments = function(code, type) {
  code = '\n' + code;
  const length = code.length;
  let strFlag = false;

  let parsedStrArr = [];

  for (let i = 0; i < length; i ++) {
    parsedStrArr.push(code[i]);

    if (tags.includes(code[i])) {
      let tag = code[i];

      let start = i;

      parsedStrArr = handleStringArray(parsedStrArr, type);

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

  return handleStringArray(parsedStrArr, type).join('').slice(1, length);
};
