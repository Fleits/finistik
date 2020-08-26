type TreeItem<T, K> =
{
  key: K
  title: string
  item: T
  children: TreeItem<T, K>[]
};

function generateTree<T, K>(collection: T[],
  getKey: (item: T) => K,
  getParentKey: (item: T) => K,
  getTitle: (item: T) => string,
  parentKey: K | null = null): TreeItem<T, K>[]
{
  return collection
    .filter(c => getParentKey(c) === parentKey)
    .map(c => ({
      key: getKey(c),
      title: getTitle(c),
      item: c,
      children: generateTree(collection, getKey, getParentKey, getTitle, getKey(c))
    }));
}

export type { TreeItem };
export { generateTree };