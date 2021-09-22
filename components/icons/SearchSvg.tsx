const SearchSvg = ({ ...props }) => {
    return (
      <svg 
        width="20" 
        height="21" 
        viewBox="0 0 20 21" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        {...props}>
        <circle 
          cx="7" 
          cy="7" 
          r="6.5" 
          stroke="white"/>
        <path 
          d="M19 20C19.1952 20.1953 19.5118 20.1953 19.7071 20C19.9023 19.8048 19.9023 19.4882 19.7071 19.2929L19 20ZM11 12L19 20L19.7071 19.2929L11.7071 11.2929L11 12Z" 
          fill="white"/>
      </svg>
    )
  }
  
  export default SearchSvg
  