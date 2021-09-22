import commerce from '@lib/api/commerce'
import { Layout } from '@components/common'
import { ProductCard } from '@components/product'
import { Grid, Marquee, Hero } from '@components/ui'
// import HomeAllProductsGrid from '@components/common/HomeAllProductsGrid'
import type { GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import { ChevronDown, ChevronRight, ChevronUp } from '@components/icons'

import { useState } from 'react'

// import { Swiper, SwiperSlide } from 'swiper/react'
// import SwiperCore, { Navigation, Pagination, A11y, Autoplay } from 'swiper'
// import 'swiper/css'
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// SwiperCore.use([Navigation, Pagination])

import { RatingView } from 'react-simple-star-rating'


export async function getStaticProps({
  preview,
  locale,
  locales,
}: GetStaticPropsContext) {
  const config = { locale, locales }
  const productsPromise = commerce.getAllProducts({
    variables: { first: 6 },
    config,
    preview,
    // Saleor provider only
    ...({ featured: true } as any),
  })
  const pagesPromise = commerce.getAllPages({ config, preview })
  const siteInfoPromise = commerce.getSiteInfo({ config, preview })
  const { products } = await productsPromise
  const { pages } = await pagesPromise
  const { categories, brands } = await siteInfoPromise

  return {
    props: {
      products,
      categories,
      brands,
      pages,
    },
    revalidate: 60,
  }
}

// const renderCategorySwiper = () => {
//   return [0, 1, 2, 3, 4, 5, 6].map((item, index) => {
//     return <SwiperSlide key={'category_' + index}>
//       <div className="flex flex-col pt-4 pb-10 bg-white">
//         <div className="flex">
//           <img className="mx-auto" src="/assets/img/product1.png" alt="" />
//         </div>
//         <div className="uppercase text-center text-color_1 tracking-widest font-bold text-2xl">DERMAL FILLERS</div>
//       </div>
//     </SwiperSlide>
//   })
// }

// const renderProductSwiper = () => {
//   return [0, 1, 2, 3, 4, 5, 6].map((item, index) => {
//     return <SwiperSlide key={'category_' + index}>
//       <div className="flex flex-col pt-4 pb-10 bg-white relative">
//         <div className="ttcommon_font_bold absolute top-0 right-0 bg-c_52B5D3 text-c_00080D text-lg py-1 px-8">$30.00</div>
//         <div className="flex">
//           <img className="mx-auto" src="/assets/img/product1.png" alt="" />
//         </div>
//         <div className="uppercase text-center text-color_1 tracking-widest font-bold text-2xl">DERMAL FILLERS</div>
//       </div>
//     </SwiperSlide>
//   })
// }

// const renderProfileImgSwiper = () => {
//   return ["http://demos.thementic.com/wordpress/WC01/WC010007/wp-content/uploads/2019/02/t3.jpg",
//     "https://monteluke.com.au/wp-content/gallery/linkedin-profile-pictures/3.JPG",
//     "https://monteluke.com.au/wp-content/gallery/linkedin-profile-pictures/9.JPG",
//     "https://monteluke.com.au/wp-content/gallery/linkedin-profile-pictures/1.jpg",
//     "https://monteluke.com.au/wp-content/gallery/linkedin-profile-pictures/34268-MLS-Serene-Zhuang-007flin.jpg"].map((item, index) => {
//       return <SwiperSlide key={'profile_img_' + index}>
//         <div className="">
//           <div className="flex">
//             <img className="mx-auto rounded-full opacity-75" src={item} width={90} height={90} alt="" />
//           </div>
//         </div>
//       </SwiperSlide>
//     })
// }

// const renderProfileDetailSwiper = () => {
//   return [0, 1, 2, 3, 4].map((item, index) => {
//     return <SwiperSlide key={'profile_detail_' + index}>
//       <div className="">
//         <div className="text-sm text-center" style={{ lineHeight: 17 + 'px' }}>DR TUKBA YALCIN  |  DIRECTOR LUMIERE AESTHETICS</div>
//         <div className="flex justify-center mt-7">
//           <RatingView ratingValue={3} size={30} className="foo" fillColor="#87C1B9" emptyColor="rgba(135, 193, 185, 0.3)" />
//         </div>
//         <p className="text-sm text-center mt-7 mx-auto" style={{ maxWidth: 426 + 'px' }}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.</p>
//       </div>
//     </SwiperSlide>
//   })
// }

const renderFAQCollapse = () => {
  const [myArray, setMyArray] = useState<Boolean[]>([]);
  
  var items = [
    {
      'title': 'How does it work?',
      'detail': 'The hyaluronic acid gel in Belotero Hydro are known for its water retention properties. It binds to moisture and increases in size, thereby replacing volume lost through fat loss.'
    },
    {
      'title': 'How long do the results last?',
      'detail': 'The hyaluronic acid gel in Belotero Hydro are known for its water retention properties. It binds to moisture and increases in size, thereby replacing volume lost through fat loss.'
    },
    {
      'title': 'What is the expected recovery time for my patients?',
      'detail': 'The hyaluronic acid gel in Belotero Hydro are known for its water retention properties. It binds to moisture and increases in size, thereby replacing volume lost through fat loss.'
    },
    {
      'title': 'What are some important safety tips to follow when using this product?',
      'detail': 'The hyaluronic acid gel in Belotero Hydro are known for its water retention properties. It binds to moisture and increases in size, thereby replacing volume lost through fat loss.'
    },
    {
      'title': 'What are the most common side effects?',
      'detail': 'The hyaluronic acid gel in Belotero Hydro are known for its water retention properties. It binds to moisture and increases in size, thereby replacing volume lost through fat loss.'
    }
  ]
  const [enable_faq, setFaq] = useState(new Array(items.length).fill(false));
  // setMyArray(new Array(items.length).fill(false))

  function renderChevronUpDown(index: any) {
    if (enable_faq[index]) return <ChevronUp className="h-4 w-4" />;
    else return <ChevronDown className="h-4 w-4" />
  }
  
  function clickChevron(index: any) {
    const new_enable_faq = [...enable_faq]
    new_enable_faq[index] = !new_enable_faq[index]
    setFaq(new_enable_faq)
  }

  

  return items.map((item, index) => {
    return <div className="divide-y divide-c_00080D" key={'faq_' + index}>
      <div className="flex items-center w-full mt-10 pb-5 cursor-pointer" onClick={() => clickChevron(index)}>
        <div className="text-base">{item.title}</div>
        <div className="ml-auto">
          {renderChevronUpDown(index)}
        </div>
      </div>
      <div>
        {enable_faq[index] && <div className="text-sm pt-5">{item.detail}</div>}
      </div>
    </div>
  })

}


export default function Home({
  products,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div className="bg-c_CCE7EF ttcommon_font">
      {/* <Grid variant="filled">
        {products.slice(0, 3).map((product: any, i: number) => (
          <ProductCard
            key={product.id}
            product={product}
            imgProps={{
              width: i === 0 ? 1080 : 540,
              height: i === 0 ? 1080 : 540,
            }}
          />
        ))}
      </Grid>
      <Marquee variant="secondary">
        {products.slice(0, 3).map((product: any, i: number) => (
          <ProductCard key={product.id} product={product} variant="slim" />
        ))}
      </Marquee>
      <Hero
        headline=" Dessert dragée halvah croissant."
        description="Cupcake ipsum dolor sit amet lemon drops pastry cotton candy. Sweet carrot cake macaroon bonbon croissant fruitcake jujubes macaroon oat cake. Soufflé bonbon caramels jelly beans. Tiramisu sweet roll cheesecake pie carrot cake. "
      />
      <Grid layout="B" variant="filled">
        {products.slice(0, 3).map((product: any, i: number) => (
          <ProductCard
            key={product.id}
            product={product}
            imgProps={{
              width: i === 0 ? 1080 : 540,
              height: i === 0 ? 1080 : 540,
            }}
          />
        ))}
      </Grid>
      <Marquee>
        {products.slice(3).map((product: any, i: number) => (
          <ProductCard key={product.id} product={product} variant="slim" />
        ))}
      </Marquee> */}
      {/* <HomeAllProductsGrid
        newestProducts={products}
        categories={categories}
        brands={brands}
      /> */}

    <img className="w-full" src="/assets/img/home-part1-bg.png"></img>
      <div className="z-50 text-white font-bold -mt-32 mx-60 flex">
        <div className="text-4xl">Our Categories.</div>
        <div className="flex items-center ml-auto">
          <div className="">Explore All</div>
          <div className="ml-2">
            <ChevronRight className="h-4 w-4" />
          </div>
        </div>
      </div>

      {/* our category part */}
      <div className="mt-10 ml-60">
        {/* <Swiper
          className="category_carousel"
          spaceBetween={20}
          slidesPerView={4}
          loop={true}
          modules={[Navigation, Pagination, A11y, Autoplay]}
          autoplay={{
            delay: 2000
          }}
          pagination={{
            el: '.category-pagination-div',
            clickable: true,
          }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}>
          {renderCategorySwiper()}
        </Swiper> */}

      </div>
      <div className="mt-10 flex items-center relative mx-60">
        <div className="swiper-button-prev absolute"></div>
        <div className="swiper-button-next absolute"></div>
        <div className="category-pagination-div flex justify-center"></div>
      </div>


      {/* learn more part */}
      <div className="mt-20 bg-white text-center py-24 relative" style={{ height: 469 + 'px' }}>
        <div className="flex flex-col h-full">
          <div className="leading-36_26 text-4xl font-bold my-auto">Intraline is Confidence.</div>
          <p className="my-auto text-c_00080D text-4xl mx-auto max-w-lg">Our mission is to inspire confidence through safe and effective medical aesthetic products.</p>
          <button className="w-52 h-11 uppercase bg-c_00090D flex justify-center items-center text-white text-sm mx-auto my-auto">learn more</button>
        </div>
        <div className="absolute top-0 left-0">
          <img src="/assets/img/triple_red.png" alt="" />
        </div>
        <div className="absolute bottom-0 right-0">
          <img src="/assets/img/triple_blue.png" alt="" />
        </div>
      </div>

      {/* Feature products part */}
      <div className="bg-c_C6CBDD py-24">
        <div className="mx-60 flex">
          <div className="leading-36_26 font-bold text-4xl">Featured Products.</div>
          <div className="flex items-center ml-auto">
            <div className="leading-36_26 font-bold text-lg">See All</div>
            <div className="ml-2">
              <ChevronRight className="h-4 w-4" />
            </div>
          </div>
        </div>
        <div className="mt-10">
          {/* <Swiper
            className="feature_carousel"
            spaceBetween={20}
            slidesPerView={5}
            loop={true}
            modules={[Navigation, Pagination, A11y, Autoplay]}
            autoplay={{
              delay: 2000
            }}
            pagination={{
              el: '.feature-custom-pagination-div',
              clickable: true,
            }}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}>
            {renderProductSwiper()}
          </Swiper> */}
        </div>
        <div className="mt-10 flex items-center relative mx-44">
          <div className="swiper-button-prev absolute"></div>
          <div className="swiper-button-next absolute"></div>
          <div className="feature-custom-pagination-div flex justify-center"></div>
        </div>
      </div>

      {/* Reviews part */}
      <div className="py-24 bg-white">
        <div className="leading-36_26 text-c_00080D font-bold text-4xl text-center">Intraline Reviews.</div>
        <div className="mx-auto mt-10 w-96">
          {/* <Swiper
            className="profile-img-carousel"
            spaceBetween={0}
            slidesPerView={3}
            loop={true}
            modules={[Navigation, Pagination, A11y, Autoplay]}
            autoplay={{
              delay: 2000
            }}>
            {renderProfileImgSwiper()}
          </Swiper> */}
        </div>
        <div className="mx-auto mt-10" style={{ maxWidth: 1094 + 'px' }}>
          {/* <Swiper
            className="profile-img-carousel"
            slidesPerView={1}
            loop={true}
            modules={[Navigation, Pagination, A11y, Autoplay]}
            autoplay={{
              delay: 2000
            }}
            pagination={{
              el: '.profile-custom-pagination-div',
              clickable: true,
            }}
            navigation={true}>
            {renderProfileDetailSwiper()}
          </Swiper> */}
        </div>
        <div className="mt-10 flex items-center relative mx-44">
          <div className="profile-custom-pagination-div flex justify-center"></div>
        </div>
      </div>

      {/* FAQ part */}
      <div className="bg-c_C3E0DC">
        <div className="mx-60 py-24">
          <div className="flex text-c_00080D mb-2">
            <div className="leading-36_26 font-bold text-4xl">Frequently Asked Questions.</div>
            <div className="flex items-center ml-auto">
              <div className="font-bold text-lg">Read More</div>
              <div className="ml-2">
                <ChevronRight className="h-4 w-4" />
              </div>
            </div>
          </div>

          {renderFAQCollapse()}
        </div>
      </div>

    </div>
  )
}

Home.Layout = Layout
