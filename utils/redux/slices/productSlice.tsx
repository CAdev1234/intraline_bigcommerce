import { createSlice } from '@reduxjs/toolkit'

type Product = {
    title: string,
    price: number,
    amount: number,
    img: string,
    detail: string,

}

const initialState = {
    enableSideReview: false,
    products: [
        {title: 'M2 Plus', price: 100, amount: 10, img: '/assets/img/m2plus.png', detail: "M2 Plus is about modern simplicity and living with intention. Minimally enhance your features so you can create more time and freedom to do the things you love.", link: '/shop/dermalfiller/m2plus'},
        {title: 'M3 Plus', price: 100, amount: 10, img: '/assets/img/m3plus.png', detail: "M3 Plus style embraces a minimal aesthetic, with maximum impact of all the important things. It’s all about minimally enhancing your features for maximum impact.", link: '/shop/dermalfiller/m3plus'},
        {title: 'M4 Plus', price: 100, amount: 10, img: '/assets/img/m4plus.png', detail: "M4 Plus is a style that encourages utilizing your features in the boldest way possible. It welcomes diverse aesthetics. Maximalism is big, bold, and brave.", link: '/shop/dermalfiller/m4plus'},
        {title: 'Intraline One', price: 100, amount: 10, img: '/assets/img/product1.png', detail: "Intraline's Polydioxanone (PDO) Threads are essentially the cosmetic version of the reabsorbable sutures used regularly in heart surgery. With an excellent safety profile and virtually non-allergenic, PDO sutures have nearly 40 years of medical history supporting its use. PDO is manufactured through the polymerization of p-dioxanone to create a reabsorbable sterile filament which produces fibrosis in the surrounding tissue giving rise to the creation of type I and II collagen. Fully reabsorbable through enzymatic hydrolysis the threads are broken down within 6 months to a year leaving behind visibly healthier skin.", link: '/shop/dermalfiller/essentials'},
        {title: 'Intraline Two', price: 100, amount: 10, img: '/assets/img/mseries_1.png', detail: "Intraline's Polydioxanone (PDO) Threads are essentially the cosmetic version of the reabsorbable sutures used regularly in heart surgery. With an excellent safety profile and virtually non-allergenic, PDO sutures have nearly 40 years of medical history supporting its use. PDO is manufactured through the polymerization of p-dioxanone to create a reabsorbable sterile filament which produces fibrosis in the surrounding tissue giving rise to the creation of type I and II collagen. Fully reabsorbable through enzymatic hydrolysis the threads are broken down within 6 months to a year leaving behind visibly healthier skin.", link: '/shop/dermalfiller/essentials'},
        {title: 'Intraline Three', price: 100, amount: 10, img: '/assets/img/mseries_2.png', detail: "Intraline's Polydioxanone (PDO) Threads are essentially the cosmetic version of the reabsorbable sutures used regularly in heart surgery. With an excellent safety profile and virtually non-allergenic, PDO sutures have nearly 40 years of medical history supporting its use. PDO is manufactured through the polymerization of p-dioxanone to create a reabsorbable sterile filament which produces fibrosis in the surrounding tissue giving rise to the creation of type I and II collagen. Fully reabsorbable through enzymatic hydrolysis the threads are broken down within 6 months to a year leaving behind visibly healthier skin.", link: '/shop/dermalfiller/essentials'},
        {title: 'Dimension 720', price: 100, amount: 10, img: '/assets/img/lifting-1.png', detail: "Intraline's Polydioxanone (PDO) Threads are essentially the cosmetic version of the reabsorbable sutures used regularly in heart surgery. With an excellent safety profile and virtually non-allergenic, PDO sutures have nearly 40 years of medical history supporting its use. PDO is manufactured through the polymerization of p-dioxanone to create a reabsorbable sterile filament which produces fibrosis in the surrounding tissue giving rise to the creation of type I and II collagen. Fully reabsorbable through enzymatic hydrolysis the threads are broken down within 6 months to a year leaving behind visibly healthier skin.", link: '/shop/pdothread/dimension720'},
        {title: 'Dimension 360', price: 100, amount: 10, img: '/assets/img/lifting-1.png', detail: "Intraline's Polydioxanone (PDO) Threads are essentially the cosmetic version of the reabsorbable sutures used regularly in heart surgery. With an excellent safety profile and virtually non-allergenic, PDO sutures have nearly 40 years of medical history supporting its use. PDO is manufactured through the polymerization of p-dioxanone to create a reabsorbable sterile filament which produces fibrosis in the surrounding tissue giving rise to the creation of type I and II collagen. Fully reabsorbable through enzymatic hydrolysis the threads are broken down within 6 months to a year leaving behind visibly healthier skin.", link: '/shop/pdothread/dimension360'},
        {title: 'Nose Thread', price: 100, amount: 10, img: '/assets/img/lifting-1.png', detail: "Intraline's Polydioxanone (PDO) Threads are essentially the cosmetic version of the reabsorbable sutures used regularly in heart surgery. With an excellent safety profile and virtually non-allergenic, PDO sutures have nearly 40 years of medical history supporting its use. PDO is manufactured through the polymerization of p-dioxanone to create a reabsorbable sterile filament which produces fibrosis in the surrounding tissue giving rise to the creation of type I and II collagen. Fully reabsorbable through enzymatic hydrolysis the threads are broken down within 6 months to a year leaving behind visibly healthier skin.", link: '/shop/pdothread/nosethread'},
        {title: 'MONOS', price: 100, amount: 10, img: '/assets/img/thread_detail.png', detail: "Intraline's Polydioxanone (PDO) Threads are essentially the cosmetic version of the reabsorbable sutures used regularly in heart surgery. With an excellent safety profile and virtually non-allergenic, PDO sutures have nearly 40 years of medical history supporting its use. PDO is manufactured through the polymerization of p-dioxanone to create a reabsorbable sterile filament which produces fibrosis in the surrounding tissue giving rise to the creation of type I and II collagen. Fully reabsorbable through enzymatic hydrolysis the threads are broken down within 6 months to a year leaving behind visibly healthier skin.", link: '/shop/pdothread/rejuvenation'},
        {title: 'DOUBLES', price: 100, amount: 10, img: '/assets/img/thread_detail.png', detail: "Intraline's Polydioxanone (PDO) Threads are essentially the cosmetic version of the reabsorbable sutures used regularly in heart surgery. With an excellent safety profile and virtually non-allergenic, PDO sutures have nearly 40 years of medical history supporting its use. PDO is manufactured through the polymerization of p-dioxanone to create a reabsorbable sterile filament which produces fibrosis in the surrounding tissue giving rise to the creation of type I and II collagen. Fully reabsorbable through enzymatic hydrolysis the threads are broken down within 6 months to a year leaving behind visibly healthier skin.", link: '/shop/pdothread/rejuvenation'},
        {title: 'TRIPLES', price: 100, amount: 10, img: '/assets/img/thread_detail.png', detail: "Intraline's Polydioxanone (PDO) Threads are essentially the cosmetic version of the reabsorbable sutures used regularly in heart surgery. With an excellent safety profile and virtually non-allergenic, PDO sutures have nearly 40 years of medical history supporting its use. PDO is manufactured through the polymerization of p-dioxanone to create a reabsorbable sterile filament which produces fibrosis in the surrounding tissue giving rise to the creation of type I and II collagen. Fully reabsorbable through enzymatic hydrolysis the threads are broken down within 6 months to a year leaving behind visibly healthier skin.", link: '/shop/pdothread/rejuvenation'},
        {title: 'DOUBLE SPIRALS', price: 100, amount: 10, img: '/assets/img/thread_detail.png', detail: "Intraline's Polydioxanone (PDO) Threads are essentially the cosmetic version of the reabsorbable sutures used regularly in heart surgery. With an excellent safety profile and virtually non-allergenic, PDO sutures have nearly 40 years of medical history supporting its use. PDO is manufactured through the polymerization of p-dioxanone to create a reabsorbable sterile filament which produces fibrosis in the surrounding tissue giving rise to the creation of type I and II collagen. Fully reabsorbable through enzymatic hydrolysis the threads are broken down within 6 months to a year leaving behind visibly healthier skin.", link: '/shop/pdothread/rejuvenation'},
        {title: 'SPIRALS', price: 100, amount: 10, img: '/assets/img/thread_detail.png', detail: "Intraline's Polydioxanone (PDO) Threads are essentially the cosmetic version of the reabsorbable sutures used regularly in heart surgery. With an excellent safety profile and virtually non-allergenic, PDO sutures have nearly 40 years of medical history supporting its use. PDO is manufactured through the polymerization of p-dioxanone to create a reabsorbable sterile filament which produces fibrosis in the surrounding tissue giving rise to the creation of type I and II collagen. Fully reabsorbable through enzymatic hydrolysis the threads are broken down within 6 months to a year leaving behind visibly healthier skin.", link: '/shop/pdothread/rejuvenation'},
        {title: 'MICRO CANNULAS', price: 100, amount: 10, img: '/assets/img/thread_detail.png', detail: "Intraline's Polydioxanone (PDO) Threads are essentially the cosmetic version of the reabsorbable sutures used regularly in heart surgery. With an excellent safety profile and virtually non-allergenic, PDO sutures have nearly 40 years of medical history supporting its use. PDO is manufactured through the polymerization of p-dioxanone to create a reabsorbable sterile filament which produces fibrosis in the surrounding tissue giving rise to the creation of type I and II collagen. Fully reabsorbable through enzymatic hydrolysis the threads are broken down within 6 months to a year leaving behind visibly healthier skin.", link: '/shop/pdothread/rejuvenation'},
        {title: 'MOISTURIZER', price: 100, amount: 10, img: '/assets/img/skincare1.png', detail: "Intraline's Polydioxanone (PDO) Threads are essentially the cosmetic version of the reabsorbable sutures used regularly in heart surgery. With an excellent safety profile and virtually non-allergenic, PDO sutures have nearly 40 years of medical history supporting its use. PDO is manufactured through the polymerization of p-dioxanone to create a reabsorbable sterile filament which produces fibrosis in the surrounding tissue giving rise to the creation of type I and II collagen. Fully reabsorbable through enzymatic hydrolysis the threads are broken down within 6 months to a year leaving behind visibly healthier skin.", link: '/shop/skincare/moisturizer'},
        {title: 'MASQUE', price: 100, amount: 10, img: '/assets/img/skincare2.png', detail: "Intraline's Polydioxanone (PDO) Threads are essentially the cosmetic version of the reabsorbable sutures used regularly in heart surgery. With an excellent safety profile and virtually non-allergenic, PDO sutures have nearly 40 years of medical history supporting its use. PDO is manufactured through the polymerization of p-dioxanone to create a reabsorbable sterile filament which produces fibrosis in the surrounding tissue giving rise to the creation of type I and II collagen. Fully reabsorbable through enzymatic hydrolysis the threads are broken down within 6 months to a year leaving behind visibly healthier skin.", link: '/shop/skincare/masque'},
        {title: 'SCAR KIT', price: 100, amount: 10, img: '/assets/img/scarkit.png', detail: "Intraline's Polydioxanone (PDO) Threads are essentially the cosmetic version of the reabsorbable sutures used regularly in heart surgery. With an excellent safety profile and virtually non-allergenic, PDO sutures have nearly 40 years of medical history supporting its use. PDO is manufactured through the polymerization of p-dioxanone to create a reabsorbable sterile filament which produces fibrosis in the surrounding tissue giving rise to the creation of type I and II collagen. Fully reabsorbable through enzymatic hydrolysis the threads are broken down within 6 months to a year leaving behind visibly healthier skin.", link: '/shop/scarkit'},
    ],
    searchResult: []
}

const productSlice = createSlice({
    name: 'productSlice'
    , initialState
    , reducers: {
        search: (state, {payload}) => {
            let result = state.products.filter(item => item.title.toLowerCase().includes(payload));
            state.searchResult = result as any
        },
    }
})

export const {search} = productSlice.actions
export default productSlice.reducer