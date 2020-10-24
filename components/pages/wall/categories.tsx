import { Input, Icon, Container } from 'semantic-ui-react';

import { Category as CategoryType, categories } from '@/types';

interface CategoriesProps {
  category: CategoryType | null,
  pickCategory: (category: CategoryType) => void,
};

export const Categories = ({ category, pickCategory }: CategoriesProps) => {
  return (
    <div className={`column categories-hld `}>
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
            <h3 className="bg-accent text-accent">{category}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
};
