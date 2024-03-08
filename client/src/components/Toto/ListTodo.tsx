import axios from "axios";
import React, { useEffect } from "react";
import { MdDelete } from "react-icons/md";
interface IProp {
  dataFilled: any[];
  setDataFilled: (value: React.SetStateAction<any[]>) => void;
  fetchData: () => void;
}
const ListTodo = (prop: IProp) => {
  const { dataFilled, setDataFilled, fetchData } = prop;

  const handleDelete = (id: any) => {
    const comfirm = window.confirm("Are you sure?");
    if (!comfirm) return;
    const deleteTodo = async () => {
      try {
        await axios.delete(`http://localhost:8080/api/v1/task/${id}`);
        fetchData();
      } catch (e) {
        console.log(e);
      }
    };

    deleteTodo();
  };
  const changeStatus = async (item: any, e: any) => {
    try {
      await axios.put(`http://localhost:8080/api/v1/task/${item.id}`, {
        ...item,
        _status: e.target.checked,
      });
    } catch (e) {
      console.log(e);
    }

    fetchData();
  };
  return (
    <div className=" w-full     text-lg  text-white ">
      {dataFilled?.map((item: any, index) => {
        return (
          <div
            className=" mb-1 flex bg-[#ff919ec4] p-4 px-12 justify-between "
            key={index}
          >
            <p className={`${item._status ? "line-through" : ""}`}>
              {item._name}
            </p>

            <div className="flex items-center gap-2">
              <input
                className="cursor-pointer"
                onChange={(e) => changeStatus(item, e)}
                checked={item._status}
                type="checkbox"
                name=""
              />
              <span
                onClick={() => handleDelete(item.id)}
                className="cursor-pointer"
              >
                <MdDelete />
              </span>
            </div>
          </div>
        );
      })}
      <div className="flex justify-end gap-2  px-12 ">
        <p className="text-sm font-extralight">Move done items at the end ?</p>
        <div className="relative inline-block">
          <input
            className="peer h-6 w-11 cursor-pointer appearance-none rounded-full bg-white checked:border-green-300 "
            type="checkbox"
          />
          <span className="pointer-events-none absolute left-1 top-[2px] block h-[20px] w-[20px] rounded-full bg-[#ff919ec4] transition-all  peer-checked:left-5 peer-checked:bg-green-300"></span>
        </div>
      </div>
    </div>
  );
};

export default ListTodo;
