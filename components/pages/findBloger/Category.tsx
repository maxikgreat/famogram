
import {Dispatch, memo, SetStateAction, VFC} from 'react';

import { Category as CategoryType } from '@/types';

interface CategoryProps {
  setActiveCategory: Dispatch<SetStateAction<CategoryType[]>>
  activeCategory: CategoryType[],
  category?: CategoryType,
}

export const Category: VFC<CategoryProps> = memo(({ setActiveCategory, activeCategory, category }) => {
  const onClick = () => {
    if (!category) return setActiveCategory([]);
    if (activeCategory.find(cat => cat === category)) {
      return setActiveCategory(prevState => prevState.filter(cat => cat !== category))
    }
    setActiveCategory(prevState => [...prevState, category]);
  };
  
  return (
    <li className="nav-item ml mr-2 mb-3">
      <a
        onClick={onClick}
        className={`nav-link p-0 ${(activeCategory.length === 0 && !category && 'active') || (!!activeCategory.find((cat) => cat === category) && 'active')}`}
      >
        <strong className="h6 mb-0 pb-1 d-block">{category ? category : 'All'}</strong>
      </a>
    </li>
  )
});
