import Practice from "./practice";

function App() {
  // return <h1>HELLO VITE+REACT | THIS IS RAMANAND BALLAL</h1>;
  return (
    <>
      {" "}
      <Practice />
      <h4> Adding new tags inside fragment or div tag</h4>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non dolore
        nulla quaerat, similique harum nam libero! Dolores quis sit est, esse
        ipsam numquam eum quisquam inventore, illum ab tempora quam!
      </p>
    </>
  );
}

export default App;
//jsx : the file name should be .jsx not a '.js' file shows error.
//      function name should always be capital like 'Practice()'
//      jsx return one element at one time i.e <Practiice/> or <App/>
//      I you want to retun many elements then add it in '<div>' or you can add empty fragment'<> </>' and inside it add all your elemets
