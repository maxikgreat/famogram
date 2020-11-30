import { BaseLayout } from '@/components/layouts';
import { Categories, People } from '@/components/pages/findBloger';
import {useState, useEffect} from 'react';
import {Category, User} from '@/types';
import {useGetBloggers} from '@/hooks';
import {withAuth} from '@/services/auth0';
import {toast} from 'react-toastify';
import {CategoriesMobile} from '@pagesComponents/findBloger/CategoriesMobile';

interface WallProps {
  user: User,
  token: string,
}

export const getServerSideProps = withAuth();

export default function Wall({ user, token }: WallProps) {
  const [getBloggers, getBloggersState] = useGetBloggers(token);
  useEffect(() => {
    getBloggers(undefined)
      .catch((error) => toast(error, { type: 'error' }))
  }, []);
  const [activeCategory, setActiveCategory] = useState<Category[]>([]);
  
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
              getBloggersState={getBloggersState}
            />
          </div>
        </div>
      </section>
    </BaseLayout>
  )
}
