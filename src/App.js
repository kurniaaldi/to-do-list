import { Card } from "./component/atoms";

function App() {
  return (
    <div className="w-full h-screen p-8 overflow-x-hidden bg-grey">
      <div className="mx-auto my-auto flex items-center justify-center w-full h-full">
        <div className="grid grid-cols-2 gap-4">
          <Card rounded>
            <p className="text-lg">Edit and save to reload.</p>
          </Card>
          <Card rounded>
            <p className="text-lg">Edit and save to reload.</p>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default App;
