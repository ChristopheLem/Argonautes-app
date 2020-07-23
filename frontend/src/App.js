import React from 'react';
import { Header, Footer, AddMember, Members } from './components'

function App() {
  return (
    <>
      <Header />
      <main>
        <AddMember />
        <Members />
      </main>
      <Footer />
    </>
  );
}

export default App;
