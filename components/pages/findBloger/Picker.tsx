// @ts-expect-error
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { useState, useMemo } from 'react';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import { Input } from '@/components/common';
import { Category as CategoryType, categories } from '@/types'
import { Category } from '.';

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
  };

  const images = useMemo(() => {
    const images: JSX.Element[] = [];

    for (let i = 0; i < 20; i++) {
      images.push(
        <div className="card shadow-40 rounded" key={i}>
          <div className="badge badge-primary badge-absolute lg">Tag</div>
          <img height={Math.floor(Math.random() * 300) + 100} style={{ objectFit: 'cover', borderTopLeftRadius: 20 }} src="../assets/images/vectors/vector-45.png" alt="Vector" />
          <div className="card-body">
            <div className="row align-items-end no-gutters">
              <div className="col-7">
                <small className="card-subtitle text-secondary">Electronics</small>
                <h6 className="card-title font-weight-normal mb-0">Moog Synthesizer</h6>
              </div>
              <div className="col-5">
                <h6 className="font-weight-bold mb-0 text-right text-center">$468.00</h6>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return images;
  }, [activeCategory, setActiveCategory]);

  return (
    <section className="fabrx-section bg-white mt-5 picker-section">
      <div className="container">
        <div className="row py-0">
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
            <div className="d-flex flex-row align-items-center justify-content-between">
              <h2 className="d-inline-block mr-lg-5">People</h2>
              <ul className="nav nav-tabs nav-tabs-no-bg nav-tabs-rounded nav-tabs-md p-0 mb-2 bg-transparent justify-content-end">
                <li className="nav-item">
                  <a className="nav-link active" data-toggle="tab" href="#Active">Active</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-toggle="tab" href="#Inactive1">Inactive</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-toggle="tab" href="#Inactive2">Inactive</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-toggle="tab" href="#Inactive3">Inactive</a>
                </li>
              </ul>
            </div>
            <Input
              name="account" 
              icon={faSearch} 
              placeholder="Find account"
              onChange={({ target: { value }}) => {console.log('hello')}}
              value=""
            />
            <div className="tab-content text-center mt-4 mt-md-5 mt-lg-0 scroll-list">
              <div className="tab-pane fade active show">
                <ResponsiveMasonry columnsCountBreakPoints={{ 250: 1, 350: 2, 750: 3, 900: 3 }}>
                  <Masonry gutter="20px">
                    {images}
                  </Masonry>
                </ResponsiveMasonry>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}