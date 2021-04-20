import SetupForm from "./components/SetupForm";
import Loading from "./components/Loading";
import Modal from "./components/Modal";

function App() {
  return (
    <div className='App'>
      <SetupForm />
      <Loading />
      <Modal />
    </div>
  );
}

export default App;
