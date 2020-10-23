import { Input, Icon } from 'semantic-ui-react';

import { Category as CategoryType, categories } from '@/types';

interface CategoriesProps {
  pickCategory: (category: CategoryType) => void,
};

export const Categories = ({ pickCategory }: CategoriesProps) => {
  return (
    <div className="categories-hld">
      <h2 className="bg-accent text-accent">pick category</h2>
      <div className="search-hld bg-accent">
        <Input>
          <Icon name="search" size="large" />
          <input className="text-accent" />
        </Input>
      </div>
      <ul className="listing">
        {categories.map((category) => (
          <li onClick={() => pickCategory(category)}>
            <div 
              className="category-bg"
              style={{ backgroundImage: `url('/assets/images/categories/${category.replace(/ |,|\/|-/g, '')}.jpg')`}}
            />
            <h3 className="bg-accent text-accent">{category}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
};
