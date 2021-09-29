const Plus = ({ ...props }) => {
  return (
    // <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
    //   <path
    //     d="M12 5V19"
    //     stroke="currentColor"
    //     strokeWidth="1.5"
    //     strokeLinecap="round"
    //     strokeLinejoin="round"
    //   />
    //   <path
    //     d="M5 12H19"
    //     stroke="currentColor"
    //     strokeWidth="1.5"
    //     strokeLinecap="round"
    //     strokeLinejoin="round"
    //   />
    // </svg>
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      className="h-6 w-6" 
      fill="none" 
      viewBox="0 0 24 24" 
      stroke="currentColor"
      {...props}>
      <path 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeWidth="2" 
        d="M12 4v16m8-8H4" />
  </svg>
  )
}

export default Plus
