import { v4 as generateId } from 'uuid';

const InitCategories = [
  { id: '77bb7976-7a6e-49e8-8034-9146757f3dfc', name: 'Auto' }, 
  { id: '25650d22-5470-4daa-98a6-73a430685b48', name: 'Tanken', parent: '77bb7976-7a6e-49e8-8034-9146757f3dfc' },
  { id: '1b824cf9-8653-4b48-bf1c-897f76a7591b', name: 'Essen' },
  { id: '5f64c3bf-798b-4c7c-951c-94e33ed0c65e', name: 'Einkauf', parent: '1b824cf9-8653-4b48-bf1c-897f76a7591b' },
  { id: 'd40299de-d982-402a-a739-03dee3f56497', name: 'Restaurant', parent: '1b824cf9-8653-4b48-bf1c-897f76a7591b' }
];

const CategoryDb = InitCategories;

const categories = () => CategoryDb;

const addCategory = (_, {name, parent}) =>
{
  const newCateogory = { id: generateId(), name, parent };
  CategoryDb.push(newCateogory);
  return newCateogory;
}

const CategoryQuery = { categories };
const CategoryMutation = { addCategory };

export { CategoryQuery, CategoryMutation };