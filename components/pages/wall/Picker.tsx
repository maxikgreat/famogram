// @ts-expect-error
import Masonry from "react-responsive-masonry";
import { useState, useMemo } from 'react';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import { Input } from '@/components/common';
import { Category as CategoryType, categories } from '@/types'
import { Category } from './';

export const Picker = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryType>(categories[0]);
  const [searchCategory, setSearchCategory] = useState<string>('');

  const renderCategories = () => {
    return categories
      .filter((category) => category.toLowerCase().includes(searchCategory.toLowerCase()))
      .map((filteredCategory, index) => (
        <Category
          key={index}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          category={filteredCategory}
        />
      ));
  }

  const images = useMemo(() => {
    const images: JSX.Element[] = [];

    for (let i = 0; i < 20; i++) {
      images.push(<img height={Math.floor(Math.random() * 300) + 100} style={{ objectFit: 'cover' }} src="../assets/images/vectors/vector-45.png" alt="Vector" />);
    }

    return images;
  }, [activeCategory, setActiveCategory]);

  return (
    <section className="fabrx-section bg-white mt-5 picker-section">
      <div className="container">
        <div className="row py-0 py-md-5">
          <div className="col-lg-4">
            <h2>Categories</h2>
            <Input
              name="category" 
              icon={faSearch} 
              placeholder="Find category"
              onChange={({ target: { value }}) => setSearchCategory(value)}
              value={searchCategory}
            />
            <ul className="nav nav-tabs nav-tags-stack nav-tabs-line bg-transparent flex-row scroll-list">
              {renderCategories()}
            </ul>
          </div>
          <div className="col-lg-8">
            <h2>People</h2>
            <Input
              name="account" 
              icon={faSearch} 
              placeholder="Find account"
              onChange={({ target: { value }}) => {console.log('hello')}}
              value=""
            />
            <div className="tab-content text-center mt-4 mt-md-5 mt-lg-0 scroll-list">
              <div className="tab-pane fade active show">
                <Masonry columnsCount={3} gutter="20px">
                  {images}
                </Masonry>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}