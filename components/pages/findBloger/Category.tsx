
import { memo } from 'react';

import { Category as CategoryType } from '@/types';

interface CategoryProps {
  setActiveCategory: (category: CategoryType | null) => void,
  activeCategory: CategoryType | null,
  category: CategoryType | null,
}

export const Category = memo(({ setActiveCategory, activeCategory, category }: CategoryProps) => (
  <li className="nav-item ml mr-2 mb-3">
    <a
      onClick={() => setActiveCategory(category)}
      className={`nav-link p-0 ${category === activeCategory && 'active'}`}
    >
      <strong className="h6 mb-0 pb-1 d-block">{category ? category : 'All'}</strong>
    </a>
  </li>
));
