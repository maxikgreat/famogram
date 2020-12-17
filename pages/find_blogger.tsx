

import { BaseLayout } from '@/components/layouts';
import { Categories, People } from '@/components/pages/findBloger';
import {useState, useEffect} from 'react';
import {Category, User} from '@/types';
import {useGetBloggers} from '@/hooks';
import { useRouter } from 'next/router';
import {withAuth} from '@/services/auth0';
import {toast} from 'react-toastify';
import {CategoriesMobile} from '@pagesComponents/findBloger/CategoriesMobile';
import {Redirect} from '@/components/common';
import {GetServerSideProps} from 'next';

interface WallProps {
  user: User,
  token: string,
}

export interface ICategory {
  label: Category,
  value :Category,
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  return {
    props: query
  }
}

export default function FindBlogger(props) {
  // const { query } = useRouter();
  console.log(props);
  // console.log(query);
  const [getBloggers, getBloggersState] = useGetBloggers('1234');
  useEffect(() => {
    getBloggers(undefined)
      .catch((error) => toast(error, { type: 'error' }))
  }, []);
  const [activeCategory, setActiveCategory] = useState<ICategory[]>([]);
  
  const filterBloggers = () => {
    if (activeCategory.length === 0) return getBloggersState.data;
    return getBloggersState.data?.filter((user) =>
      activeCategory.map(({ label }) => label).includes(user.user_metadata?.instagram?.category as Category))
  }
  
  // if (!user.user_metadata?.contactInfo) return <Redirect url="/first_enter" />;
  
  return (
    <BaseLayout className="wall">
      <section className="fabrx-section bg-white mt-5 picker-section">
        <div className="container">
          <div className="row py-0 p-3 p-md-0">
            
            <Categories
              activeCategory={activeCategory}
              setActiveCategory={setActiveCategory}
              getBloggersState={getBloggersState}
            />
            <CategoriesMobile
              activeCategory={activeCategory}
              setActiveCategory={setActiveCategory}
            />
            <People
              loading={getBloggersState.loading}
              error={getBloggersState.error}
              bloggers={filterBloggers()}
            />
          </div>
        </div>
      </section>
    </BaseLayout>
  )
}
