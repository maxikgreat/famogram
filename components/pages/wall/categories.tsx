
import { Categories as CategoriesEnum } from '@/types';

export const Categories = () => {
  return (
    <div className="categories-hld">
      <h2>Categories</h2>
      <ul>
        {Object.keys(CategoriesEnum).map(category => (
          <li>{category}</li>
        ))}
      </ul>
    </div>
  );
};
