export const sortByDate = (array: any[]) => {
  const sortedArray = array.sort((a: any, b: any) => {
    const d1 = new Date(a.data.pubDate).valueOf();
    const d2 = new Date(b.data.pubDate).valueOf();

    return d2 - d1;
  });
  return sortedArray;
};
