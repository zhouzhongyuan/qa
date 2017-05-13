
var issues = document.getElementsByClassName('issues-listing')[0];
var list = issues.getElementsByClassName('js-navigation-open');
list = Array.from(list);
const s = list.map((item, index) => { return `- [${item.innerText}](${item.href})`;})
const o = s.join('\n');
console.log(o);
