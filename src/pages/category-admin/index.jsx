import axios from "axios";
import React, { useEffect, useState } from "react";
import { CategoryModal } from "@components";

const Index = () => {
  const [category, setCategory] = useState([]);
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({});
  const [update, setUpdate] = useState(false);
  const getCategory = async () => {
    const res = await axios.get("https://texnoark.ilyosbekdev.uz/category/search?limit=10");
    if (res.status === 200) {
      setCategory(res.data.data.categories);
    }
  };
  useEffect(() => {
    getCategory();
  }, []);
  const token = localStorage.getItem("token");
  const handleDelet = async (id) => {
    try {
      const res = await axios.delete(`https://texnoark.ilyosbekdev.uz/category/delete/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (res.status === 200) {
        getCategory();
      }
    } catch (err) {
      console.log(err);
    }
  };
  const postCategory = async (data) => {
    if (update) {
      try {
        const res = await axios.patch(`https://texnoark.ilyosbekdev.uz/category/update/${form.id}`, data, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (res.status === 200) {
          getCategory();
        }
      } catch (err) {
        console.log(err);
      }
    } else {
      try {
        const res = await axios.post("https://texnoark.ilyosbekdev.uz/category/create", data, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (res.status === 201) {
          getCategory();
        }
      } catch (err) {
        console.log(err);
      }
    }
  };
  const handleEdit = (item) => {
    setOpen(true);
    setUpdate(true);
    setForm(item);
  };
  return (
    <div>
      <CategoryModal open={open} toggle={setOpen} form={form} setForm={setForm} postCategory={postCategory} setUpdate={setUpdate} />
      <div className="flex justify-between items-center">
        <h1 className="text-3xl">Category</h1>
        <button onClick={() => setOpen(true)} className="bg-blue-500 text-xl rounded px-8 py-1 text-white">
          Add category
        </button>
      </div>
      <table className="mt-5 w-full">
        <thead>
          <tr>
            <th className="border">T/H</th>
            <th className="border">Name</th>
            <th className="border">createdAt</th>
            <th className="border">Action</th>
          </tr>
        </thead>
        <tbody>
          {category.map((item, i) => {
            return (
              <tr key={i}>
                <td className="text-center border">{i + 1}</td>
                <td className="text-center border">{item.name}</td>
                <td className="text-center border">{item.createdAt}</td>
                <td className="text-center border">
                  <button onClick={() => handleDelet(item.id)} className="text-white mx-3 bg-red-500 px-5">
                    Delet
                  </button>
                  <button onClick={() => handleEdit(item)} className="text-white bg-orange-400 px-5">
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

export default Index;
