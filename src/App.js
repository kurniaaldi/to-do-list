import { Button, Card, Dialog, LoadingOverlay } from "./component/atoms";
import Layout from "./component/layouts";
import {
  List,
  ModalCreate,
  ModalDetail,
  ModalEdit,
} from "./component/molecules";
import { useSelector, useDispatch } from "react-redux";
import {
  createData,
  initialValues,
  removeData,
  updateData,
} from "redux/reducer/reducer";
import { useEffect, useState } from "react";
import { getData } from "utils/service";
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
  const [openCreate, setOpenCreate] = useState(false);
  const [comfirmDelete, setComfirmDelete] = useState({
    open: false,
    onOk: () => {},
    onCancel: () => {},
  });
  const [editValues, setEditValues] = useState({
    createdAt: "",
    description: "",
    id: 0,
    status: 0,
    title: "",
  });
  const [isDone, setIsDone] = useState([]);
  const [isDo, setIsDo] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [detailData, setDetailData] = useState({});

  const data = useSelector((state) => state.data.values);
  const isEmpty = useSelector((state) => state.data.empty);

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setTimeout(async () => {
        await getData()
          .then((res) => {
            setIsLoading(false);

            dispatch(initialValues(dummy));
          })
          .catch((err) => {
            setIsLoading(false);

            console.log(err);
          });
      }, 2000);
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (data) {
      setIsDone(data.filter((item) => item.status === 1));
      setIsDo(data.filter((item) => item.status === 0));
    }
  }, [data]);

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

  const editData = (values) => {
    const copyData = [...data];
    const filterData = copyData.map((item) => {
      if (item.id === values.id) {
        return { ...values };
      } else {
        return {
          ...item,
        };
      }
    });

    dispatch(updateData(filterData));
  };

  const handleCreate = (values) => {
    dispatch(createData(values));
  };
  return (
    <Layout>
      <div className="w-full h-fit flex flex-col gap-4 items-center justify-center">
        <Card rounded shadow>
          <div className="h-96 w-80 p-2 overflow-auto">
            <h5 className="text-warning pb-4 text-xl">On Going</h5>
            {!isEmpty && (
              <List
                data={isDo}
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
          onClick={() => {
            setOpenCreate(true);
            setEditValues({
              createdAt: "",
              description: "",
              title: "",
              id: data.length + 1,
              status: 0,
            });
          }}
        >
          Create
        </Button>
      </div>

      <div className="w-full h-fit flex flex-col gap-4 items-center justify-center">
        <Card rounded shadow>
          <div className="h-96 w-80 p-2 overflow-auto">
            <h5 className="text-success pb-4 text-xl">Done</h5>
            {!isEmpty && (
              <List
                data={isDone}
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
      {isLoading && <LoadingOverlay />}

      <ModalCreate
        data={editValues}
        title="Edit"
        open={openCreate}
        close={setOpenCreate}
        onSave={handleCreate}
      />

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
        onSave={editData}
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
