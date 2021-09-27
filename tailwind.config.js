module.exports = {
  future: {
    purgeLayersByDefault: true,
    applyComplexClasses: true,
  },
  purge: {
    content: [
      './pages/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}',
    ],
    options: {
      safelist: {
        standard: ['outline-none'],
      },
    },
  },
  theme: {
    extend: {
      maxWidth: {
        '8xl': '1920px',
      },
      colors: {
        primary: 'var(--primary)',
        'primary-2': 'var(--primary-2)',
        secondary: 'var(--secondary)',
        'secondary-2': 'var(--secondary-2)',
        hover: 'var(--hover)',
        'hover-1': 'var(--hover-1)',
        'hover-2': 'var(--hover-2)',
        'accent-0': 'var(--accent-0)',
        'accent-1': 'var(--accent-1)',
        'accent-2': 'var(--accent-2)',
        'accent-3': 'var(--accent-3)',
        'accent-4': 'var(--accent-4)',
        'accent-5': 'var(--accent-5)',
        'accent-6': 'var(--accent-6)',
        'accent-7': 'var(--accent-7)',
        'accent-8': 'var(--accent-8)',
        'accent-9': 'var(--accent-9)',
        violet: 'var(--violet)',
        'violet-light': 'var(--violet-light)',
        'violet-dark': 'var(--violet-dark)',
        pink: 'var(--pink)',
        'pink-light': 'var(--pink-light)',
        cyan: 'var(--cyan)',
        blue: 'var(--blue)',
        green: 'var(--green)',
        red: 'var(--red)',

        c_00090D: '#00090D',
        c_00080D: '#00080D',
        c_8D97BC: '#8D97BC',
        c_52B5D3: '#52B5D3',
        c_87C1B9: '#87C1B9',
        c_99CEE0: '#99CEE0',
        c_F5DBDD: '#F5DBDD',
        c_CCE7EF: '#CCE7EF',
        c_C6CBDD: '#C6CBDD',
        c_C3E0DC: '#C3E0DC',
        c_E5E5E5: '#E5E5E5',
        c_87C1B9: '#87C1B9',
        c_F297F6: '#F297F6',
        c_D5CBA1: '#D5CBA1',
        c_F7F7F7: '#F7F7F7',
      },
      textColor: {
        base: 'var(--text-base)',
        primary: 'var(--text-primary)',
        secondary: 'var(--text-secondary)',
      },
      boxShadow: {
        'outline-normal': '0 0 0 2px var(--accent-2)',
        magical:
          'rgba(0, 0, 0, 0.02) 0px 30px 30px, rgba(0, 0, 0, 0.03) 0px 0px 8px, rgba(0, 0, 0, 0.05) 0px 1px 0px',
      },
      fontSize: {
        '200px': '200px',
        '120px': '120px'
      },
      lineHeight: {
        'extra-loose': '2.2',

        '14_17': '1.2142', // fontsize:14px;lineheight:17px
        '14_26': '1.857', // fontsize:14px;lineheight:26px
        '24_29': '1.2083', // fontsize:24px; lineheight:29px
        '36_26': '0.722', // fontsize:36px; lineheight:26px
        '36_48': '1.333', // fontsize:36px; lineheight:48px
        '64_76': '1.1875', // fontsize:64px; lineheight:76px
        '200_160': '0.8', // fontsize:200px;lineheight:160px
      },
      margin: {
        '7_5': '30px',
        '12_5': '50px',
        '15': '60px',
        '30': '120px',
        '172': '172px'
      },
      padding: {
        '12_5': '50px',
        '15': '60px',
        '25': '100px'
      },
      scale: {
        120: '1.2',
      },
      width: {
        '2_5': '10px',
        '22_5': '90px',
        '25': '100px',
        '30': '120px',
        '106_5': '426px',
        '146': '584px',
        '154_5': '618px',
        '162_5': '650px'
      },
      maxWidth: {
        '106_5': '426px',
      },
      height: {
        '2_5': '10px',
        '15': '60px',
        '122': '488px',
        '150': '600px',
        '175': '700px',
        '225': '900px'
      },
      inset: {
        '-224': '-224px'
      }
    },
  },
}
