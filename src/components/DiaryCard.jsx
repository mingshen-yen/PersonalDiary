import { useRef, useState } from "react";
import { X } from "lucide-react";

export default function DiaryCard({ diary }) {
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
        className="card bg-base-100 w-100 shadow-sm cursor-pointer hover:scale-105 hover:shadow-2xl duration-300"
      >
        <figure>
          <img src={diary.img} alt="img" />
        </figure>
        <div className="card-body">
          <span className=" text-gray-600 text-sm text-right">{diary.date}</span>
          <h2 className="text-cyan-500 font-bold text-2xl">{diary.title}</h2>
          <p className="line-clamp-1 text-sm opacity-80">{diary.content}</p>
        </div>
      </div>
      <dialog ref={modalRefDiary} className="modal">
        <div className="absolute inset-0 bg-black/40" onClick={() => modalRefDiary.current?.close()} />
        <div className="modal-box">
          {!diary ? (
            <p>No diary selected</p>
          ) : (
            <>
              <div className="flex justify-between py-2">
                <h2 className="text-2xl font-bold text-cyan-500">{diary.title}</h2>
                <button
                  onClick={() => modalRefDiary.current?.close()}
                  className="text-white/90 cursor-pointer hover:shadow-lg hover:shadow-gray-500 transition"
                  aria-label="Close form"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="mt-4">
                <img src={diary.img} alt={diary.title} className="w-full rounded-lg" />
              </div>
              <p className="text-sm p-2 opacity-70 text-right">{diary.date}</p>
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
