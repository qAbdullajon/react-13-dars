import axios from "axios";
import { useEffect, useState } from "react";
import { CourseModal } from "@components";

const index = () => {
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({});
  const [update, setUpdate] = useState(false);
  const [id, setId] = useState("");
  const getCourse = () => {
    axios.get("http://localhost:3000/course").then((res) => {
      if (res.status === 200) {
        setData(res.data);
      }
    });
  };
  useEffect(() => {
    getCourse();
  }, []);
  const handleDelet = (id) => {
    axios.delete(`http://localhost:3000/course/${id}`).then((res) => {
      if (res.status === 200) {
        getCourse();
      }
    });
  };
  const postCourse = (form) => {
    axios.post("http://localhost:3000/course", form).then((res) => {
      if (res.status === 201) {
        getCourse();
        setOpen(false);
      }
    });
  };
  const handleEdit = (item) => {
    setForm(item);
    setOpen(true);
    setUpdate(true);
    setId(item.id);
  };
  const putCurse = (form) => {
    axios.put(`http://localhost:3000/course/${id}`, form).then((res) => {
      getCourse();
      setForm({});
      setUpdate(false);
    });
  };
  return (
    <div>
      <CourseModal open={open} toggle={setOpen} postCourse={postCourse} form={form} setForm={setForm} update={update} setUpdate={setUpdate} putCurse={putCurse} />
      <div className="flex justify-between items-center">
        <h1 className="text-3xl">Teacher</h1>
        <button onClick={() => setOpen(true)} className="bg-blue-500 text-xl rounded px-8 py-1 text-white">
          Add Course
        </button>
      </div>
      <table className="w-full mt-4">
        <thead>
          <tr>
            <th className="border">T/H</th>
            <th className="border">Course Name</th>
            <th className="border">Course Duration</th>
            <th className="border">Course Price</th>
            <th className="border">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, i) => {
            return (
              <tr key={i}>
                <td className="border text-center">{i + 1}</td>
                <td className="border text-center">{item.name}</td>
                <td className="border text-center">{item.duration}</td>
                <td className="border text-center">${item.price}</td>
                <td className="border text-center">
                  <button onClick={() => handleDelet(item.id)} className="text-white px-3 mx-1 bg-red-500">
                    Delet
                  </button>
                  <button onClick={() => handleEdit(item)} className="text-white px-3 mx-1 bg-orange-500">
                    Edit
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default index;
