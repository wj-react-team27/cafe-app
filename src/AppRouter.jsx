import { BrowserRouter, Route, Routes } from "react-router-dom";
import SubscribePage from "pages/SubscribePage";
import SignPage from "pages/SignPage";
import DetailPage from "pages/DetailPage";
import TablePage from "pages/TablePage";
import NotFoundPage from "pages/NotFoundPage";
import Layout from "components/Layout";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<SubscribePage />}></Route>
          <Route path="/sign" element={<SignPage />}></Route>
          <Route path="/detail/:id" element={<DetailPage />}></Route>
          <Route path="/detail/:id/table" element={<TablePage />}></Route>
          <Route path="*" element={<NotFoundPage />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
