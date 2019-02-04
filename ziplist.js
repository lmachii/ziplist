const list1 = [0, 1, 2, 3];
const list2 = ['a', 'b', 'c', 'd'];

function zipList(lista, listb) {
  let list = [];
  for(let i = 0; i < lista.length; i++) {
    list.push(lista[i]);
    list.push(listb[i]);
  }
  return list;
}

console.log(zipList(list1, list2));

function zipListTheSimpleWay(lista, listb) {
  return _.flatten(_.zip(lista,listb));
}

console.log(zipListTheSimpleWay(list1, list2));
