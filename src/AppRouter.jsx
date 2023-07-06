import { BrowserRouter, Route, Routes } from "react-router-dom";
import SubscribePage from "pages/SubscribePage";
import SignPage from "pages/SignPage";
import DetailPage from "pages/DetailPage";
import TalbePage from "pages/TalbePage";
import NotFoundPage from "pages/NotFoundPage";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SubscribePage />}></Route>
        <Route path="/sign" element={<SignPage />}></Route>
        <Route path="/detail/:id" element={<DetailPage />}></Route>
        <Route path="/detail/:id/table" element={<TalbePage />}></Route>
        <Route path="*" element={<NotFoundPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
