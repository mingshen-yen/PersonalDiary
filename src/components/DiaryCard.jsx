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
        className="card bg-base-100 w-100 shadow-sm cursor-pointer hover:shadow-xl transition"
      >
        <figure>
          <img src={diary.img} alt="img" />
        </figure>
        <div className="card-body">
          <span className=" text-cyan-700 text-sm text-right">{diary.date}</span>
          <h2 className="text-blue-800 font-bold text-2xl">{diary.title}</h2>
          <p>{diary.content}</p>
        </div>
      </div>
      <dialog ref={modalRefDiary} className="modal">
        <div className="modal-box">
          {!diary ? (
            <p>No diary selected</p>
          ) : (
            <>
              <div className="flex justify-between py-2">
                <h2 className="text-2xl font-bold text-cyan-500">{diary.title}</h2>
                <button
                  onClick={() => modalRefDiary.current?.close()}
                  className="text-white/90 hover:text-white cursor-pointer hover:shadow-xl transition"
                  aria-label="Close form"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              <p className="text-sm opacity-70 text-right">{diary.date}</p>
              <div className="mt-4">
                <img src={diary.img} alt={diary.title} className="w-full rounded-lg" />
              </div>
              <p className="mt-4 whitespace-pre-wrap">{diary.content}</p>
            </>
          )}
        </div>
      </dialog>
    </>
  );
}
