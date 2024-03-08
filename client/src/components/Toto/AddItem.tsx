import axios from "axios";
import React, { useState } from "react";

interface IProps {
  dataFilled: any[];
  setDataFilled: (value: React.SetStateAction<any[]>) => void;
  fetchData: () => void;
}
const AddItem = (prop: IProps) => {
  const { fetchData } = prop;
  const [data, setData] = useState<any>({
    _name: "",
  });
  const handleClickAddItem = async () => {
    if (data._name === "") {
      return alert("Bạn chưa nhập tên vào list");
    }
    try {
      await axios.post("http://localhost:8080/api/v1/task", { ...data });
      setData({
        _name: "",
        _status: false,
      });
      fetchData();
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className="mt-10 text-start px-12 w-full">
      <h1 className="text-xl mb-2 font-extralight "> Add to the todo list</h1>
      <div className="flex w-full">
        <input
          onChange={(e) => setData({ ...data, _name: e.target.value })}
          placeholder="Add to the todo list"
          className="w-[75%] text-black px-2 py-3"
          type="text"
          value={data._name}
        />
        <button
          onClick={handleClickAddItem}
          className="w-[25%] border px-2 font-semibold hover:bg-[#ef5366]"
        >
          ADD ITEM
        </button>
      </div>
    </div>
  );
};

export default AddItem;
