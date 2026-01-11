import { useState, useEffect } from "react";
import DiaryCard from "./DiaryCard";

export default function DiaryModal() {
  const [diaryDetails, setDiaryDetails] = useState(() => {
    const saved = localStorage.getItem("diaryDetails");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("diaryDetails", JSON.stringify(diaryDetails));
  }, [diaryDetails]);

  const handleAdd = () => {
    document.getElementById("my_modal_1").showModal();
  };

  const submitAction = async (diaryDetails) => {
    //get the values from input
    const newDiary = {
      id: crypto.randomUUID(),
      title: diaryDetails.get("title"),
      date: diaryDetails.get("date"),
      img: diaryDetails.get("img"),
      content: diaryDetails.get("content"),
    };

    //update the input to DiaryDetails with previous value
    setDiaryDetails((prev) => {
      return [...prev, newDiary];
    });

    // close modal
    document.getElementById("my_modal_1").close();
  };

  return (
    <div>
      <button onClick={handleAdd}>+ New</button>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box text-black">
          <div className="flex justify-between p-1">
            <h2 className="text-2xl font-bold text-cyan-500">Create New Entry</h2>
            {/* <button
              onClick={onClose()}
              className="text-white/90 hover:text-white transition-colors"
              aria-label="Close form"
            >
              <X className="w-4 h-4" />
            </button> */}
          </div>
          <div>
            <form method="dialog" action={submitAction}>
              <div>
                <label htmlFor="date" className="flex items-center gap-1 p-2 font-semibold">
                  {/* <Calendar /> */}
                  Date
                </label>
                <input
                  type="date"
                  name="date"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  required
                />
              </div>
              <div>
                <label htmlFor="title" className="flex items-center gap-1 p-2 font-semibold">
                  {/* <Type /> */}
                  Title
                </label>
                <input
                  type="text"
                  name="title"
                  placeholder="Enter a title..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                />
              </div>
              <div>
                <label htmlFor="content" className="flex items-center gap-1 p-2 font-semibold">
                  {/* <FileText /> */}
                  Content
                </label>
                <textarea
                  name="content"
                  rows={6}
                  placeholder="Write your thoughts, experiences, and memories..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                />
              </div>
              <div>
                <label htmlFor="img" className="flex items-center gap-1 p-2 font-semibold">
                  {/* <Image /> */}
                  Image URL
                </label>
                <input
                  type="url"
                  name="img"
                  placeholder="https://example.com/image.jpg"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                />
              </div>
              <div className="flex gap-2 mt-3">
                <button className="w-full">Create Entry</button>
              </div>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}
