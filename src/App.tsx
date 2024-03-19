import { RouterProvider } from "react-router-dom"
import { appRoutes } from "./routes"
import { env } from "./utils"
import { BreadcrumbList } from "./components"
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react"
/**
 * Render the OpherLabs application. This code exports a React co.zaponent called OpherLabsApplication that renders the OpherLabs application. 
 * It uses a RouterProvider co.zaponent and passes in a router prop that is determined by the value of env.APP_MODE or defaults to 'base'.
 * @returns {ReactElement} The rendered application.
 */
export const OpherLabsApplication = () => {
  // Initialize AOS animation library
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: false,
      mirror: true
    });
    AOS.refresh();
  }, []);
  return (
    <>
    {/* Google Analytics and StructureData please dont modify */}
      <BreadcrumbList
        breadcrumbs={[
          { url: 'https://www.opherlabs.co.za', name: 'Home' },
          { url: 'https://www.opherlabs.co.za/products', name: 'Products' },
          { url: 'https://www.opherlabs.co.za/services', name: 'Services' },
          { url: 'https://www.opherlabs.co.za/projects', name: 'Projects' },
          { url: 'https://www.opherlabs.co.za/team', name: 'Team' },
          { url: 'https://www.opherlabs.co.za/contact', name: 'Contact Us' },
        ]}
      />
      {/* main SEO Tags  */}
      {/* Router: please do not edit */}
      <RouterProvider router={(appRoutes as any)[env.APP_MODE || 'base']} />

    </>
  )
}