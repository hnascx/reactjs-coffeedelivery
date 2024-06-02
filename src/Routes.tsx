import { Route, Routes } from 'react-router-dom'

import { Home } from './pages/Home'
import { DefaultLayout } from './layouts/DefaultLayout'
import { CompleteOrder } from './pages/CompleteOrder'
import { OrderConfirmedPage } from './pages/OrderConfirmed'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/complete-order" element={<CompleteOrder />} />
        <Route path="/order-confirmed" element={<OrderConfirmedPage />} />
      </Route>
    </Routes>
  )
}
