import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { HomeLayout } from "../layouts";
import {
  AboutPage,
  HomePage,
  ServicesPage,
  TeamPage,
  BlogPage,
} from "../pages";
import {  TermsOfUsage} from "..";
import CareerPage from "../pages/CareerPage/CareerPage";
import { FAQ, PolicyComponent } from "..";
import { OneBlog } from "../components/Blogs/OneBlog";
export const baseRoutes = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<HomeLayout />}>
      <Route index path="/" element={<HomePage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/team" element={<TeamPage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/blog/:id" element={<OneBlog/>}/>

      <Route path="/career" element={<CareerPage />} />
      <Route path="/terms" element={<TermsOfUsage />} />
      <Route path="/policy" element={<PolicyComponent />} />
      <Route path="/FAQ" element={<FAQ />} />
    </Route>
  )
);
