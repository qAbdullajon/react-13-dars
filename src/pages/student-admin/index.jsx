import axios from "axios";
import React, { useEffect, useState } from "react";
import { TeacherModal } from "@components";

const index = () => {
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({});
  const [update, setUpdate] = useState(false);
  const getTeacher = () => {
    axios.get("http://localhost:3000/studen/").then((res) => {
      if (res.status === 200) {
        setData(res.data);
      }
    });
  };
  useEffect(() => {
    getTeacher();
  }, []);
  const handleDelet = (id) => {
    axios.delete(`http://localhost:3000/studen/${id}`).then((res) => {
      if (res.status === 200) {
        getTeacher();
      }
    });
  };
  const addTeacher = () => {
    setOpen(true);
  };
  const postTeacher = (user) => {
    if (update) {
      axios.put(`http://localhost:3000/studen/${form.id}`, user).then((res) => {
        if (res.status === 200) {
          getTeacher();
          setOpen();
        }
      });
    } else {
      axios.post(`http://localhost:3000/studen/`, user).then((res) => {
        if (res.status === 201) {
          getTeacher();
          setOpen(false);
        }
      });
    }
  };
  const handleEdit = (item) => {
    setForm(item);
    setOpen(true);
    setUpdate(true);
  };
  return (
    <div>
      <TeacherModal open={open} toggle={setOpen} postTeacher={postTeacher} form={form} setForm={setForm} setUpdate={setUpdate} />
      <div className="flex justify-between items-center">
        <h1 className="text-3xl">Teacher</h1>
        <button onClick={addTeacher} className="bg-blue-500 text-xl rounded px-8 py-1 text-white">
          Add Teacher
        </button>
      </div>
      <table className="mt-6 w-full">
        <thead>
          <tr>
            <th className="border">T/H</th>
            <th className="border">Name</th>
            <th className="border">Age</th>
            <th className="border">Phone number</th>
            <th className="border">Guruh</th>
            <th className="border">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, i) => {
            return (
              <tr key={i}>
                <td className="border text-center">{i + 1}</td>
                <td className="border text-center">{item.name}</td>
                <td className="border text-center">{item.age}</td>
                <td className="border text-center">{item.number}</td>
                <td className="border text-center">{item.guruh}</td>
                <td className="border text-center">
                  <button onClick={() => handleDelet(item.id)} className="text-white px-3 mx-1 bg-red-500">
                    Delet
                  </button>
                  <button
                    onClick={() => {
                      handleEdit(item);
                    }}
                    className="text-white px-3 mx-1 bg-orange-500"
                  >
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
