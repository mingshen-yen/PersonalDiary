import { useRef } from "react";
import { X, Calendar } from "lucide-react";

export default function DiaryCard({ diary, isFirst }) {
  // open card
  const modalRefDiary = useRef();
  const handleShow = (diary) => {
    modalRefDiary.current?.showModal();
  };

  return (
    <>
      <div
        onClick={() => handleShow(diary)}
        key={diary.id}
        className="card bg-base-100 w-60 shadow-sm cursor-pointer hover:scale-105 hover:shadow-2xl duration-300"
      >
        {isFirst && <span className="absolute font-bold text-emerald-500 text-base px-2 top-1 left-1">LATEST</span>}
        <div className="flex items-center gap-1 justify-end text-sm text-blue-950 bg-amber-300 rounded-t px-3 py-1 text-right">
          <Calendar className="w-4" />
          <span>{diary.date}</span>
        </div>
        <figure>
          <img src={diary.img} alt="img" />
        </figure>
        <div className="card-body">
          <h2 className="text-cyan-500 font-bold text-2xl">{diary.title}</h2>
          <p className="line-clamp-1 text-sm opacity-80">{diary.content}</p>
        </div>
      </div>
      <dialog ref={modalRefDiary} className="modal">
        <div className="absolute inset-0 bg-black/40" onClick={() => modalRefDiary.current?.close()} />
        <div className="modal-box flex flex-col">
          {!diary ? (
            <p>No diary selected</p>
          ) : (
            <>
              <div className="flex justify-between py-2">
                <h2 className="px-1 text-2xl font-bold text-cyan-500">{diary.title}</h2>
                <button
                  onClick={() => modalRefDiary.current?.close()}
                  className="text-white/90 cursor-pointer hover:shadow-lg hover:shadow-gray-500 transition"
                  aria-label="Close form"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              <div className="flex items-center justify-end gap-1 text-sm text-blue-950 rounded-t p-2">
                <Calendar className="w-4" />
                <span>{diary.date}</span>
              </div>
              <div className="">
                <img src={diary.img} alt={diary.title} className="w-full rounded-lg" />
              </div>

              <p className="p-3 whitespace-pre-wrap">{diary.content}</p>
              {/* <div className="flex justify-end">
                <button>Edit</button>
              </div> */}
            </>
          )}
        </div>
      </dialog>
    </>
  );
}
