import { Button, Card } from "./component/atoms";
import Layout from "./component/layouts";
import { List } from "./component/molecules";
import { useSelector, useDispatch } from "react-redux";
import { createData, initialValues, removeData } from "redux/reducer/reducer";
import { useEffect } from "react";

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

function App() {
  const data = useSelector((state) => state.data.values);
  const isEmpty = useSelector((state) => state.data.empty);

  const dispatch = useDispatch();

  useEffect(() => {
    if (isEmpty) {
      dispatch(initialValues(dummy));
    }
  }, [dispatch, isEmpty]);

  return (
    <Layout>
      <div className="w-full h-fit flex flex-col gap-4 items-center justify-center">
        <Card rounded shadow padding={false}>
          <div className="h-96 w-80 p-2 overflow-auto">
            {!isEmpty && (
              <List
                data={data}
                action="hover"
                onRemove={(id) => dispatch(removeData(id))}
              />
            )}
          </div>
        </Card>
        <Button
          onClick={() =>
            dispatch(
              createData({
                id: 6,
                title: "Make a phone call to mom1",
                description: "lorem ipsum1",
                status: 1,
                createdAt: "2019-11-15 04:00",
              })
            )
          }
        >
          Create
        </Button>
      </div>

      <div className="w-full h-fit flex flex-col gap-4 items-center justify-center">
        <Card rounded shadow padding={false}>
          <div className="h-96 w-80 p-2 overflow-auto">
            {!isEmpty && <List data={data} action="" />}
          </div>
        </Card>
      </div>
    </Layout>
  );
}

export default App;
