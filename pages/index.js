import { Product, FooterBanner, HeroBanner } from '../components';
import { client } from '../lib/client';

const Home = ({ products, bannerData }) => {

  return (
    <div >
      <HeroBanner heroBanner={bannerData.length && bannerData[0]} />
      {console.log('BannerData', bannerData)}
     <div className='products-heading'>
      <h1>Best selling products</h1>
     </div>

      
    </div>
  )
}

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData }
  }
}

export default Home;
