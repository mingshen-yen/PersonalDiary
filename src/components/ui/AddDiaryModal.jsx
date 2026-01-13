import { useRef } from "react";
import { X, Plus } from "lucide-react";
import { useNavigate } from "react-router";

export default function AddDiaryModal({ diaryDetails, setDiaryDetails, user }) {
  const today = new Date().toISOString().split("T")[0];
  const modalRef = useRef(null);
  const navigate = useNavigate();

  const handleAdd = () => {
    console.log(user.isAuthenticated);

    if (user.isAuthenticated === "false") {
      navigate("/protected");
    } else {
      modalRef.current?.showModal();
    }
  };

  const submitAction = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    // check if the date already enter
    const date = formData.get("date");
    const exists = diaryDetails.find((diary) => diary.date === date);
    if (exists) {
      alert("You already wrote a diary for this day. Select the other date.");
      return;
    }

    //get the values from input
    const newDiary = {
      id: Date.now().toString(),
      title: formData.get("title"),
      date: formData.get("date"),
      img: formData.get("img"),
      content: formData.get("content"),
    };

    //update the input to DiaryDetails with previous value
    setDiaryDetails((prev) => [...prev, newDiary]);

    e.currentTarget.reset();

    // close modal
    modalRef.current?.close();
  };

  return (
    <div>
      <div
        onClick={handleAdd}
        className="w-10 h-10 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4 cursor-pointer hover:shadow-lg hover:shadow-gray-500 transition"
      >
        <Plus className="w-5 h-5 text-cyan-700" />
      </div>
      <dialog ref={modalRef} className="modal">
        <div className="absolute inset-0 bg-black/40" onClick={() => modalRef.current?.close()} />
        <div className="modal-box text-black">
          <div className="flex justify-between p-1">
            <h2 className="text-2xl font-bold text-cyan-500">Create New Entry</h2>
            <button
              onClick={() => modalRef.current?.close()}
              className="text-white/90 cursor-pointer hover:shadow-lg hover:shadow-gray-500 transition"
              aria-label="Close form"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          <div>
            <form onSubmit={submitAction}>
              <div>
                <label htmlFor="date" className="flex items-center gap-1 p-2 font-semibold">
                  {/* <Calendar /> */}
                  Date
                </label>
                <input
                  type="date"
                  name="date"
                  defaultValue={today}
                  max={today}
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
                  required
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
                  required
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
                  defaultValue={
                    "https://plus.unsplash.com/premium_photo-1666116634819-f61abea11789?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  }
                  placeholder="https://example.com/image.jpg"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                />
                <span className="text-sm text-gray-500 px-2">
                  Tip: Use Unsplash or any image hosting service for beautiful photos
                </span>
              </div>
              <div className="flex gap-2 mt-3">
                <button
                  type="submit"
                  className="w-full cursor-pointer hover:shadow-lg hover:shadow-gray-500 transition"
                >
                  Create Entry
                </button>
              </div>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}
