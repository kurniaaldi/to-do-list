import { Button, Card } from "./component/atoms";
import Layout from "./component/layouts";
import { List } from "./component/molecules";

function App() {
  const dummy = [
    {
      id: 1,
      title: "Make a meal",
      description: "lorem ipsum",
      status: 0,
      createdAt: "2019-11-15 18:00",
    },
    {
      id: 2,
      title: "Dinner with family",
      description: "lorem ipsum",
      status: 0,
      createdAt: "2019-11-16 18:00",
    },
    {
      id: 3,
      title: "Watch scary movie",
      description: "lorem ipsum",
      status: 0,
      createdAt: "2019-11-15 13:00",
    },
    {
      id: 4,
      title: "Learn something new",
      description: "lorem ipsum",
      status: 1,
      createdAt: "2019-11-15 08:00",
    },
    {
      id: 5,
      title: "Make a phone call to mom",
      description: "lorem ipsum",
      status: 1,
      createdAt: "2019-11-15 04:00",
    },
  ];

  return (
    <Layout>
      <div className="w-full h-fit flex flex-col gap-4 items-center justify-center">
        <Card rounded shadow padding={false}>
          <div className="h-96 w-80 p-2 overflow-auto">
            <List data={dummy} action="hover" />
          </div>
        </Card>
        <Button>Create</Button>
      </div>

      <div className="w-full h-fit flex flex-col gap-4 items-center justify-center">
        <Card rounded shadow padding={false}>
          <div className="h-96 w-80 p-2 overflow-auto">
            <List data={dummy} action={false} />
          </div>
        </Card>
      </div>
    </Layout>
  );
}

export default App;
