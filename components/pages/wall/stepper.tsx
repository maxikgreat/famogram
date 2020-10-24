import { useState } from 'react';
import { Container } from 'semantic-ui-react';

import { Categories, People, Bloger } from './';
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
    setStepper(prevState => prevState.category 
      ? ({ ...prevState, category: null })
      : ({ ...prevState, category })
    );

  return (
    <section className="stepper-hld">
      <Categories
        category={stepper.category}
        pickCategory={pickCategoryHandler}
      />
      <People />
      <Bloger />
    </section>
  )
};
