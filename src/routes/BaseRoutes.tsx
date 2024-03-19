import { createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom";
import { HomeLayout } from "../layouts";
import { HomePage, BlogPage,} from "../pages";
import {  PlaceholderComponent, TermsOfUsage} from "..";
import CareerPage from "../pages/CareerPage/CareerPage";
import { OneBlog } from "../components/Blogs/OneBlog";
export const baseRoutes = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<HomeLayout />}>
      <Route index path="/" element={<HomePage />} />
      <Route path="/services" element={<PlaceholderComponent title={"Services Page"} />} />
      <Route path="/about" element={<PlaceholderComponent title={"About Us Page"}/>} />
      <Route path="/team" element={<PlaceholderComponent title={"Teams Page"}/>} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/blog/:id" element={<OneBlog/>}/>

      <Route path="/career" element={<CareerPage />} />
      <Route path="/terms" element={<TermsOfUsage />} />
    </Route>
  )
);
