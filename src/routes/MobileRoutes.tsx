import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
export const mobileRoutes = createBrowserRouter(createRoutesFromElements(<Route>
    <Route path='/' element={<>Welcome to Opher Labs Mobile App landing apge</>} />
</Route>))