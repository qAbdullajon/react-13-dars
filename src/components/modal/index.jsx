import axios from "axios";
import React, { useRef, useState } from "react";
import { Modal } from "reactstrap";

const index = (props) => {
  const { open, toggle, postTeacher, form, setForm, setUpdate } = props;
  const nameRef = useRef();
  const ageRef = useRef();
  const numberRef = useRef();
  const guruhRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    let user = {
      name: nameRef.current.value,
      age: ageRef.current.value,
      number: numberRef.current.value,
      guruh: guruhRef.current.value,
    };
    postTeacher(user);
    setForm({})
  };
  return (
    <Modal
      onClick={() => {
        toggle(false);
        setForm({});
        setUpdate(false);
      }}
      className="fixed top-0 left-0 flex items-center justify-center w-full h-[100vh] bg-gray-400 bg-opacity-50"
      isOpen={open}
      toggle={toggle}
    >
      <div onClick={(e) => e.stopPropagation()} className="w-[450px] p-3 bg-white rounded-xl">
        <div>
          <h1 className="text-2xl">Modal</h1>
        </div>
        <form className="mt-3 flex flex-col gap-1" onSubmit={handleSubmit}>
          <input defaultValue={form.name} ref={nameRef} className="border outline-none text-xl px-2 py-1 w-full" type="text" placeholder="Name" />
          <input defaultValue={form.age} ref={ageRef} className="border outline-none text-xl px-2 py-1 w-full" type="text" placeholder="Age" />
          <input defaultValue={form.number} ref={numberRef} className="border outline-none text-xl px-2 py-1 w-full" type="text" placeholder="Phone number" />
          <input defaultValue={form.guruh} ref={guruhRef} className="border outline-none text-xl px-2 py-1 w-full" type="text" placeholder="Guruh" />
          <button type="submit" className="bg-green-600 text-xl py-1 text-white">
            Save
          </button>
        </form>
      </div>
    </Modal>
  );
};

export default index;
