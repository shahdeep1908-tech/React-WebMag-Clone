import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout.jsx";
import MasterLayout from "./layouts/MasterLayout.jsx";

import News from "./pages/News";
import DetailsPageLayout from "./layouts/DetailsPageLayout";
import NewsPageDetails from "./pages/NewsPageDetails";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MasterLayout />}>
          <Route index element={<Layout />} />
          <Route path="/news" element={<DetailsPageLayout />}>
            <Route index element={<NewsPageDetails />} />
          </Route>
          <Route path="/popular" element={<News />} />
          <Route path="/webdesign" element={<News />} />
          <Route path="/javascript" element={<News />} />
          <Route path="/css" element={<News />} />
          <Route path="/jquery" element={<News />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
