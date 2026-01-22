


export function calcAmount(list){
  console.log(list);

  let amounts = null
  if (list.length === 0) {
    return 0;
  }
  else {
   amounts = list.map(a => (
    Number(a.amount)
  ))
  }

  return amounts.reduce((acc, amount) => acc + amount, 0)
}