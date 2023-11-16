import { BrowserRouter } from "react-router-dom"
import { AppRouter } from "./router"


export const MoviesApp = () => {

  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  )
}
