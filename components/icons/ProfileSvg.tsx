const ProfileSvg = ({ ...props }) => {
    return (
        <svg 
            width="21" 
            height="21" 
            viewBox="0 0 21 21" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            {...props}>
            <circle 
                cx="10.5" 
                cy="5.5" 
                r="5" 
                stroke="white"/>
            <path 
                d="M20 20.5C20 15.2533 15.7467 11 10.5 11C5.25329 11 1 15.2533 1 20.5" 
                stroke="white" 
                strokeLinecap="round" 
                strokeLinejoin="round"/>
        </svg>
    )
  }
  
  export default ProfileSvg
  