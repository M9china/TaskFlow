import { Outlet } from "react-router-dom"
import { NavigationComponent, FooterComponent } from "../components"
/**
 * Renders the HomeLayout component.
 *This code defines a function component called HomeLayout that renders a
 * layout for the home page. It includes a navigation component, 
 * a main content area represented by the Outlet component, and a
 * footer component.
 * @return {JSX.Element} The rendered HomeLayout component.
 */
export const HomeLayout = () => {
    return (<div className="overflow-x-hidden">
        <NavigationComponent />
        <div className="mx-auto flex max-w-[90rem] items-center justify-between  sm:px-8" aria-label="Global">
            <Outlet />
        </div>
        <FooterComponent />
    </div>)
}