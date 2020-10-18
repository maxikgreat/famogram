import { Input, Icon } from 'semantic-ui-react';

import { Categories as CategoriesEnum } from '@/types';

export const Categories = () => {
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
        {Object.keys(CategoriesEnum).map(category => (
          <li>
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
