import HeaderUsage from "@/components/Header";
import Footer from "@/components/Footer";
import { UIProvider } from "@jamsr-ui/react";

const page = () => {
  return (
    <UIProvider>
     <HeaderUsage isBordered />
     <Footer/>
  </UIProvider>
  )
}

export default page
