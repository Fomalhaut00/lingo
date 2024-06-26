import {Header} from "./header";
import { Footer } from "./footer";
function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header/>
      <main className=" flex-1 flex flex-col justify-center items-center">
        {children}
      </main>
      <Footer/>
    </div>
  );
}
export default MarketingLayout;
