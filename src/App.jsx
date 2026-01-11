import { useState, useEffect } from "react";
import DiaryModal from "./components/DiaryModal";
import DiaryCard from "./components/DiaryCard";

const App = () => {
  const [diaryDetails, setDiaryDetails] = useState(() => {
    const saved = localStorage.getItem("diaryDetails");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("diaryDetails", JSON.stringify(diaryDetails));
  }, [diaryDetails]);

  return (
    <>
      <header className="flex flex-row justify-between">
        <div>
          <h1>My Diary</h1>
          <span>Capture your daily moments and memories</span>
        </div>
        {/* add new entry */}
        <DiaryModal />
      </header>
      <main className="py-10 flex flex-wrap md:flex-row justify-center gap-5">
        {diaryDetails.map((diary) => (
          <DiaryCard key={diary.id} diary={diary} />
        ))}
      </main>
    </>
  );
};

export default App;
