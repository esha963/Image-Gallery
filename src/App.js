import React from 'react'
import Heading from './Components/Heading'
// import Header from './Components/Navbar'
import Herosection from './Components/Hero_section'

// react components always start with capital letter remember this next timecd
const App=() => {
  return (
    <>
     <Heading/>
     {/* <Header/> */}
     <Herosection/>
    </>
  );
}

export default App;
