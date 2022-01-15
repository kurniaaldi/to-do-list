import { Button, Card, Dialog } from "./component/atoms";
import Layout from "./component/layouts";
import { List, ModalDetail, ModalEdit } from "./component/molecules";
import { useSelector, useDispatch } from "react-redux";
import { createData, initialValues, removeData } from "redux/reducer/reducer";
import { useEffect, useState } from "react";

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
  const [openDetail, setOpenDetail] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [comfirmDelete, setComfirmDelete] = useState({
    open: false,
    onOk: () => {},
    onCancel: () => {},
  });
  const [editValues, setEditValues] = useState({
    createdAt: "2019-11-15 04:00",
    description: "lorem ipsum",
    id: 5,
    status: 1,
    title: "Make a phone call to mom",
  });
  const [detailData, setDetailData] = useState({});
  const data = useSelector((state) => state.data.values);
  const isEmpty = useSelector((state) => state.data.empty);

  const dispatch = useDispatch();

  useEffect(() => {
    if (isEmpty) {
      dispatch(initialValues(dummy));
    }
  }, [dispatch, isEmpty]);
  console.log(editValues);
  const handleDelete = (id) => {
    setComfirmDelete({
      open: true,
      onOk: () => {
        dispatch(removeData(id));
        setComfirmDelete({
          open: false,
          onOk: () => {},
          onCancel: () => {},
        });
      },
      onCancel: () => {
        setComfirmDelete({
          open: false,
          onOk: () => {},
          onCancel: () => {},
        });
      },
    });
  };

  return (
    <Layout>
      <div className="w-full h-fit flex flex-col gap-4 items-center justify-center">
        <Card rounded shadow>
          <div className="h-96 w-80 p-2 overflow-auto">
            {!isEmpty && (
              <List
                data={data}
                action="hover"
                onRemove={(id) => {
                  handleDelete(id);
                }}
                close
                edit
                onClick={(data) => {
                  setOpenDetail(true);
                  setDetailData(data);
                }}
                onEdit={(data) => {
                  setOpenEdit(true);
                  setEditValues(data);
                }}
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
        <Card rounded shadow>
          <div className="h-96 w-80 p-2 overflow-auto">
            {!isEmpty && (
              <List
                data={data}
                action=""
                onClick={(data) => {
                  setOpenDetail(true);
                  setDetailData(data);
                }}
              />
            )}
          </div>
        </Card>
      </div>
      <Dialog
        open={comfirmDelete.open}
        close={comfirmDelete.onCancel}
        onOk={comfirmDelete.onOk}
      />
      <ModalEdit
        data={editValues}
        title="Edit"
        open={openEdit}
        close={setOpenEdit}
        onSave={setEditValues}
      />
      <ModalDetail
        data={detailData}
        title="Detail"
        open={openDetail}
        close={setOpenDetail}
      />
    </Layout>
  );
}

export default App;
