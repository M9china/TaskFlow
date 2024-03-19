import { RouterProvider } from "react-router-dom"
import { appRoutes } from "./routes"
import { env } from "./utils"
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react"
/**
 * Render the OpherLabs application. This code exports a React co.zaponent called OpherLabsApplication that renders the OpherLabs application. 
 * It uses a RouterProvider co.zaponent and passes in a router prop that is determined by the value of env.APP_MODE or defaults to 'base'.
 * @returns {ReactElement} The rendered application.
 */
export const Application = () => {
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
      <RouterProvider router={(appRoutes as any)[env.APP_MODE || 'base']} />
  )
}