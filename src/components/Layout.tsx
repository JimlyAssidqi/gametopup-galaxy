
import React from 'react';
import Navbar from './Navbar';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-20 max-w-[1920px] mx-auto w-full">
        {children}
      </main>
      <footer className="mt-20 py-12 px-6 md:px-10 border-t border-white/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-xl font-semibold mb-4">GameTopup Galaxy</h3>
            <p className="text-muted-foreground">
              Layanan top-up game tercepat dan paling terpercaya.
              Dapatkan kredit game secara instan dengan harga terbaik.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Tautan Cepat</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-muted-foreground hover:text-foreground transition-colors">Beranda</a></li>
              <li><a href="/top-up" className="text-muted-foreground hover:text-foreground transition-colors">Top Up</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Bantuan</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Kontak</h3>
            <p className="text-muted-foreground mb-2">support@gametopupgalaxy.com</p>
            <p className="text-muted-foreground">+62 812 3456 7890</p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <span className="sr-only">Twitter</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <span className="sr-only">Instagram</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <span className="sr-only">Discord</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="12" r="1"></circle><circle cx="15" cy="12" r="1"></circle><path d="M7.5 7.5c3.5-1 5.5-1 9 0"></path><path d="M7.5 16.5c3.5 1 5.5 1 9 0"></path><path d="M15.5 17c0 1 1.5 3 2 3 1.5 0 2.833-1.667 3.5-3 .667-1.667.5-5.833-1.5-11.5-1.457-1.015-3-1.34-4.5-1.5l-1 2.5"></path><path d="M8.5 17c0 1-1.356 3-1.832 3-1.429 0-2.698-1.667-3.333-3-.635-1.667-.476-5.833 1.428-11.5C6.151 4.485 7.545 4.16 9 4l1 2.5"></path></svg>
              </a>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-10 pt-5 border-t border-white/10 text-center text-muted-foreground">
          <p>© {new Date().getFullYear()} GameTopup Galaxy. Hak Cipta Dilindungi.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
