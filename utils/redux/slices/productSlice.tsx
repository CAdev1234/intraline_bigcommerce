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
        {title: 'M2 Plus', price: 100, amount: 10, img: '/assets/img/products/m2plus.png', detail: "M2 Plus is about modern simplicity and living with intention. Minimally enhance your features so you can create more time and freedom to do the things you love.", link: '/shop/dermalfiller/m2plus'},
        {title: 'M3 Plus', price: 100, amount: 10, img: '/assets/img/products/m3plus.png', detail: "M3 Plus style embraces a minimal aesthetic, with maximum impact of all the important things. It’s all about minimally enhancing your features for maximum impact.", link: '/shop/dermalfiller/m3plus'},
        {title: 'M4 Plus', price: 100, amount: 10, img: '/assets/img/products/m4plus.png', detail: "M4 Plus is a style that encourages utilizing your features in the boldest way possible. It welcomes diverse aesthetics. Maximalism is big, bold, and brave.", link: '/shop/dermalfiller/m4plus'},
        {title: 'Intraline One', price: 100, amount: 10, img: '/assets/img/products/intraline_1.png', detail: "Used to treat tear troughs, perioral “smoker’s lines”, cupid’s bow and lips for enhancement or subtle definition; marionette lines,  nasolabial folds, and crow’s feet/fine lines.", link: '/shop/dermalfiller/essentials'},
        {title: 'Intraline Two', price: 100, amount: 10, img: '/assets/img/products/intraline_2.png', detail: "Used to treat deep-set wrinkles, marionette lines, nasolabial folds, perioral, cupid’s bow and lips. Intraline Two can also be used in nonsurgical rhinoplasty, cheeks, and facial contouring, in addition to treatments for chin and jawline enhancement.", link: '/shop/dermalfiller/essentials'},
        {title: 'Intraline Three', price: 100, amount: 10, img: '/assets/img/products/intraline_3.png', detail: "Used to treat deep-set wrinkles, marionette lines, nasolabial folds, perioral “smoker’s lines”; cupid’s bow and lips (high definition). Intraline For Men can also be used for nonsurgical rhinoplasty and facial contouring of the cheeks, chin, and jawline.", link: '/shop/dermalfiller/essentials'},
        {title: 'Dimension 720', price: 100, amount: 10, img: '/assets/img/products/lifting_dimension720.png', detail: "Our newest Cog PDO Thread is the Dimension 720. It is a molded Cog PDO Thread. Our molded technology allows the thread to maintain its integrity of shape and provides four times the strength of non molded threads. Learn more about Intraline's Dimension 720's.", link: '/shop/pdothread/dimension720'},
        {title: 'Dimension 360', price: 100, amount: 10, img: '/assets/img/products/lifting_dimension360.png', detail: "Dimension 360 Lifting PDO Threads are a barbed or cogged thread. Dimension 360's are made by cutting cogs in a spiral pattern into a mono PDO filament. Learn more about Intraline's Dimension 360's.", link: '/shop/pdothread/dimension360'},
        {title: 'Nose Thread', price: 100, amount: 10, img: '/assets/img/products/lifting_nose.png', detail: "Nose PDO Threads are short barbed threads used in nonsurgical rhinoplasty. Learn more about Intraline's Nose Threads.", link: '/shop/pdothread/nosethread'},
        {title: 'MONOS', price: 100, amount: 10, img: '/assets/img/products/rejuvenation_monos.png', detail: "Explore Intraline Mono PDO Threads.", link: '/shop/pdothread/rejuvenation'},
        {title: 'DOUBLES', price: 100, amount: 10, img: '/assets/img/products/rejuvenation_doubles.png', detail: "A Double PDO Thread is two smooth PDO filaments twisted around each other and folded in half. Learn more about Intraline Double PDO Threads.", link: '/shop/pdothread/rejuvenation'},
        {title: 'TRIPLES', price: 100, amount: 10, img: '/assets/img/products/rejuvenation_triples.png', detail: "A Triple PDO Thread is three smooth PDO filaments twisted around each other and folded in half. Learn more about Intraline Triple PDO Threads.", link: '/shop/pdothread/rejuvenation'},
        {title: 'DOUBLE SPIRALS', price: 100, amount: 10, img: '/assets/img/products/rejuvenation_double_spirals.png', detail: "A Double Spiral is two smooth PDO filaments twisted around each other and around the needle. Learn more about Intraline Double Spiral PDO Threads.", link: '/shop/pdothread/rejuvenation'},
        {title: 'SPIRALS', price: 100, amount: 10, img: '/assets/img/products/rejuvenation_spirals.png', detail: "A Spiral PDO Thread is one smooth filament that is wrapped around the needle. Learn more about Intraline Spiral PDO Threads.", link: '/shop/pdothread/rejuvenation'},
        {title: 'MICRO CANNULAS', price: 100, amount: 10, img: '/assets/img/products/rejuvenation_micro_cannulas.png', detail: "A Micro Cannula is a smooth Rejuvenation PDO Thread that comes in a cannula instead of a sharp tip needle. Learn more about Intraline's Micro Cannula PDO Threads.", link: '/shop/pdothread/rejuvenation'},
        {title: 'MOISTURIZER', price: 100, amount: 10, img: '/assets/img/products/moisturizer.png', detail: "Our Restorative Moisturizer is designed to smooth and protect your skin, helping to fight the visible signs of ageing. Formulated for all skin types, our cream features high molecular  density Hyaluronic Acid and Sea Buckthorn Berry oil, which benefit skin elasticity, water  retention, and hydration.", link: '/shop/skincare/moisturizer'},
        {title: 'MASQUE', price: 100, amount: 10, img: '/assets/img/products/masque.png', detail: "Intraline’s Biocellulose Masque features a natural biocellulose sheet, Hyaluronic Acid, Niacinamide, and Snow Lotus extract; these together provide significant facial rejuvenation benefits and immerses your skin in intense moisture.", link: '/shop/skincare/masque'},
        {title: 'SCAR KIT', price: 100, amount: 10, img: '/assets/img/products/scarkit.png', detail: "The Scar Kit, developed by aesthetics company Intraline, features a revolutionary new type of cannula, designed by Mr. Olivier Amar.This cannula gently treats both the cause and appearance of depressed scars.Indented scars have fibrous tissue that develops under the injury, tethering the skin to underlying tissue and pulling it downwards.", link: '/shop/scarkit'},
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