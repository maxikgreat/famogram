
import {Dispatch, memo, SetStateAction, VFC} from 'react';

import { Category as CategoryType } from '@/types';
import {ICategory} from '@/pages/find_bloger';

interface CategoryProps {
  setActiveCategory: Dispatch<SetStateAction<ICategory[]>>
  activeCategory: ICategory[],
  category?: CategoryType,
}

export const Category: VFC<CategoryProps> = memo(({ setActiveCategory, activeCategory, category }) => {
  const onClick = () => {
    if (!category) return setActiveCategory([]);
    if (activeCategory.find(cat => cat.value === category)) {
      return setActiveCategory(prevState => prevState.filter(cat => cat.value !== category))
    }
    setActiveCategory(prevState => [...prevState, {label: category, value: category}]);
  };
  
  return (
    <li className="nav-item ml mr-2 mb-3">
      <a
        onClick={onClick}
        className={`nav-link p-0 ${(activeCategory.length === 0 && !category && 'active') || (!!activeCategory.find((cat) => cat.value === category) && 'active')}`}
      >
        <strong className="h6 mb-0 pb-1 d-block">{category ? category : 'All'}</strong>
      </a>
    </li>
  )
});
