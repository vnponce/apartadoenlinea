import React, { useEffect } from 'react';
import { useRememberedState } from '@inertiajs/inertia-react';
import moment from 'moment';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Panel from '../components/Panel/Panel';

export default function Layout({ title, children }) {
  moment.locale('es');
  const [showPanel, setShowPanel] = useRememberedState(false);

  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
        <>
            <Header setShowPanel={setShowPanel} />
            {/* Panel */}
            <Panel show={showPanel} setShowPanel={setShowPanel} />            <main id="content-wrapper" className="flex flex-wrap w-full p-0">
                {children}
            </main>
            <Footer />
        </>
  );
}
