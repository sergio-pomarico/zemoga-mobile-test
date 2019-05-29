
export function updateArray(array: any[], newItem: any, key: any = 'id') {
  if (array.length === 0) return [newItem];
  return array.map((item) => {
    if (item[key] !== newItem[key]) return item;
    else return { ...item, ...newItem };
  });
}