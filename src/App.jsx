import SignUpForm from "./page/SignUp";

function App() {
  console.log("asdf");
  return (
    <>
      <style jsx global>{`
        .sigCanvas {
          width: 100%;
          height: 100%;
        }
      `}</style>
      <SignUpForm />
    </>
  );
}

export default App;
