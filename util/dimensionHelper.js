import { useMediaQuery } from "react-responsive";

const DimensionHelper = () => {
    const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
    const isTablet = useMediaQuery({ query: '(max-width: 1024px)' });
  
    const DimensionProps = {
      isMobile: isMobile,
      isTablet: isTablet
    };
  
    return DimensionProps;
};
  
  export default DimensionHelper;