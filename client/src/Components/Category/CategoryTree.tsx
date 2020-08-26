import React from 'react';
import { DraggableTree } from 'Components/ThirdParty/DraggableTree';
import { generateTree, TreeItem } from 'Helper/TreeHelper';
import { Category } from './Category';

type Props = {
  categories: Category[]
};

function CategoryTree({ categories }: Props)
{
  const categoryTree: TreeItem<Category, string>[] = generateTree<Category, string>(categories, x => x.id, x => x.parent, x => x.name);

  return (
    <DraggableTree
      defaultExpandAll
      gData={categoryTree}
      onTreeChanged={(tree: any) => console.log(tree)}
    />
  );
}

export { CategoryTree };