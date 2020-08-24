import { v4 as generateId } from 'uuid';

const InitCategories = [{ id: '77bb7976-7a6e-49e8-8034-9146757f3dfc', name: 'Wohnung' }, { id:  '1b824cf9-8653-4b48-bf1c-897f76a7591b', name: 'Essen' }];

const CategoryDb = InitCategories;

const categories = () => CategoryDb;

const addCategory = (_, {name}) =>
{
  const newCateogory = { id: generateId(), name };
  CategoryDb.push(newCateogory);
  return newCateogory;
}

const CategoryQuery = { categories };
const CategoryMutation = { addCategory };

export { CategoryQuery, CategoryMutation };

