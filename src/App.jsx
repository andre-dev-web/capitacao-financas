import { Outlet } from "react-router-dom"
import Footer from "./components/Footer"

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}