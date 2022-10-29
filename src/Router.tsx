import { Routes, Route } from "react-router-dom";
import { Theme } from "@features/theme";
import { LayoutRouter } from "@features/layout";

export const Router: React.FC = () => (
  <Theme>
    <Routes>
      <Route path="/" element={<LayoutRouter />}>
        {/* <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NoMatch />} /> */}
      </Route>
    </Routes>
  </Theme>
);
