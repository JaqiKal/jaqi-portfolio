/** <components/layout/Layout.jsx>
 * This file contains the layout component which is used to wrap
 * the Navbar, Footer and the main content of the application.
 * It also contains the Outlet component which is used to render
 * the child components of the layout component.
 */

import Navbar from "./Navbar";
import Footer from "./Footer";

const layout = ({ children}) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default layout;
