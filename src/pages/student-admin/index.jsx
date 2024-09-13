import axios from "axios";
import React, { useEffect, useState } from "react";
import { StudentModal } from "@components";

const index = () => {
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({});
  const [course, setCoure] = useState([]);
  const [guruh, setGuruh] = useState([]);
  const [update, setUpdate] = useState(false);
  const getStudent = () => {
    axios.get("http://localhost:3000/student/").then((res) => {
      if (res.status === 200) {
        setData(res.data);
      }
    });
  };
  const getCourse = () => {
    axios.get("http://localhost:3000/course").then((res) => {
      if (res.status === 200) {
        setCoure(res.data);
      }
    });
  };
  const getGuruh = () => {
    axios.get("http://localhost:3000/guruh").then((res) => {
      if (res.status === 200) {
        setGuruh(res.data);
      }
    });
  };
  useEffect(() => {
    getStudent();
    getCourse();
    getGuruh();
  }, []);
  const handleDelet = (id) => {
    axios.delete(`http://localhost:3000/student/${id}`).then((res) => {
      if (res.status === 200) {
        getStudent();
      }
    });
  };
  const addStudent = () => {
    setOpen(true);
  };
  const postStudent = (user) => {
    if (update) {
      axios.put(`http://localhost:3000/student/${form.id}`, user).then((res) => {
        if (res.status === 200) {
          getStudent();
          setOpen();
        }
      });
    } else {
      axios.post(`http://localhost:3000/student/`, user).then((res) => {
        if (res.status === 201) {
          getStudent();
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
      <StudentModal open={open} toggle={setOpen} postStudent={postStudent} form={form} setForm={setForm} setUpdate={setUpdate} course={course} guruh={guruh} />
      <div className="flex justify-between items-center">
        <h1 className="text-3xl">Student</h1>
        <button onClick={addStudent} className="bg-blue-500 text-xl rounded px-8 py-1 text-white">
          Add Student
        </button>
      </div>
      <table className="mt-6 w-full">
        <thead>
          <tr>
            <th className="border">T/H</th>
            <th className="border">Student name</th>
            <th className="border">Age</th>
            <th className="border">Phone number</th>
            <th className="border">Guruh</th>
            <th className="border">Course</th>
            <th className="border">Address</th>
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
                <td className="border text-center">{item.course}</td>
                <td className="border text-center">{item.address}</td>
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
