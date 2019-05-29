
export function updateArray(array: any[], newItem: any, key: any = 'id') {
  if (array.length === 0) return [newItem];
  return array.map((item) => {
    if (item[key] !== newItem[key]) return item;
    else return { ...item, ...newItem };
  });
}

export function deleteInArray(array: any[], itemToDelete: any) {
  const itemIndex = array.indexOf(itemToDelete);
  const newArray = array.slice(); // Copy all array
  if (itemIndex !== -1) {
    newArray.splice(itemIndex, 1);
  }
  return newArray;
}