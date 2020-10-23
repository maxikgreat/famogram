import { useState } from 'react';
import { Container } from 'semantic-ui-react';

import { Categories } from './';
import { Category as CategoryType } from '@/types';

export const Stepper = () => {

  const [stepper, setStepper] = useState<{
    category: CategoryType | null,
    bloger: string | null,
  }>({
    category: null,
    bloger: null,
  });

  const pickCategoryHandler = (category: CategoryType) => 
    setStepper(prevState => ({ ...prevState, category }));

  return (
    <section className="listing-hld parallax">
      <Categories pickCategory={pickCategoryHandler} />
      {/* <People /> */}
    </section>
  )
};
