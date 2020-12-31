import {toast} from 'react-toastify';

import { BaseLayout } from '@/components/layouts';
import {Categories, Details, People} from '@/components/pages/findBloger';
import { useState, useEffect } from 'react';
import { Category, User } from '@/types';
import { useGetBloggers } from '@/hooks';
import { CategoriesMobile } from '@pagesComponents/findBloger/CategoriesMobile';
import { Redirect } from '@/components/common';
import { withAuth } from '@/services/auth0';

interface WallProps {
  user: User,
  token: string,
}

export interface ICategory {
  label: Category,
  value :Category,
}

export const getServerSideProps = withAuth();

export default function FindBlogger({ user, token }: WallProps) {
  const [getBloggers, getBloggersState] = useGetBloggers(token);
  
  useEffect(() => {
    getBloggers(undefined)
      .catch((error) => toast(error, { type: 'error' }))
  }, []);
  
  const [activeCategory, setActiveCategory] = useState<ICategory[]>([]);
  const [showDetails, setShowDetails] = useState(false);
  
  const filterBloggers = () => {
    if (activeCategory.length === 0) return getBloggersState.data;
    return getBloggersState.data?.filter((user) =>
      activeCategory.map(({ label }) => label).includes(user.user_metadata?.instagram?.category as Category))
  }
  
  if (!user.user_metadata?.contactInfo) return <Redirect url="/first_enter" />;
  
  return (
    <>
      <Details show={showDetails} setShow={setShowDetails} />
      <BaseLayout className="wall" user={user}>
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
                setShowDetails={setShowDetails}
              />
            </div>
          </div>
        </section>
      </BaseLayout>
    </>
  )
}
