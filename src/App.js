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

            dispatch(initialValues(res));
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
      setIsDone(
        data
          .filter((item) => item.status === 1)
          .sort(function (a, b) {
            var key1 = new Date(a.createdAt);
            var key2 = new Date(b.createdAt);

            if (key1 < key2) {
              return -1;
            } else if (key1 === key2) {
              return 0;
            } else {
              return 1;
            }
          })
      );
      setIsDo(
        data
          .filter((item) => item.status === 0)
          .sort(function (a, b) {
            var key1 = new Date(a.createdAt);
            var key2 = new Date(b.createdAt);

            if (key1 < key2) {
              return 1;
            } else if (key1 === key2) {
              return 0;
            } else {
              return -1;
            }
          })
      );
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
        title="Create"
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
