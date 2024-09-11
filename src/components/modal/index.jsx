import React from "react";
import { Modal } from "reactstrap";

const index = (props) => {
  const { open, toggle } = props;
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <Modal onClick={() => toggle(false)} className="fixed top-0 left-0 flex items-center justify-center w-full h-[100vh] bg-gray-400 bg-opacity-50" isOpen={open} toggle={toggle}>
      <div onClick={(e) => e.stopPropagation()} className="w-[450px] p-3 bg-white rounded-xl">
        <div>
          <h1 className="text-2xl">Modal</h1>
        </div>
        <form className="mt-3 flex flex-col gap-1" onSubmit={handleSubmit}>
          <input className="border outline-none text-xl px-2 py-1 w-full" type="text" placeholder="Name" />
          <input className="border outline-none text-xl px-2 py-1 w-full" type="text" placeholder="Age" />
          <input className="border outline-none text-xl px-2 py-1 w-full" type="text" placeholder="Phone number" />
          <input className="border outline-none text-xl px-2 py-1 w-full" type="text" placeholder="Guruh" />
          <button type="submit" className="bg-green-600 text-xl py-1 text-white">
            Save
          </button>
        </form>
      </div>
    </Modal>
  );
};

export default index;
