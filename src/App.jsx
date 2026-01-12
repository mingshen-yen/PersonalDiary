import { useState, useEffect, useRef } from "react";
import AddDiaryModal from "./components/AddDiaryModal";
import DiaryCard from "./components/DiaryCard";
import { Plus } from "lucide-react";

const App = () => {
  const [diaryDetails, setDiaryDetails] = useState(() => {
    const saved = localStorage.getItem("diaryDetails");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("diaryDetails", JSON.stringify(diaryDetails));
  }, [diaryDetails]);

  const sortedDiaries = [...diaryDetails].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <>
      <header className="flex flex-row justify-between">
        <div>
          <h1>My Diary</h1>
          <span>Capture your daily moments and memories</span>
        </div>
        {/* add new entry */}
        <AddDiaryModal diaryDetails={diaryDetails} setDiaryDetails={setDiaryDetails} />
      </header>
      <main>
        {sortedDiaries.length === 0 ? (
          <div className="text-center py-20">
            <div className="bg-white rounded-2xl p-12 shadow-sm max-w-md mx-auto">
              <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Plus className="w-8 h-8 text-cyan-500" />
              </div>
              <h2 className="text-gray-900 mb-2">No entries yet</h2>
              <p className="text-gray-600 mb-6">Start your journaling journey by creating your first diary entry</p>
              <AddDiaryModal diaryDetails={diaryDetails} setDiaryDetails={setDiaryDetails} />
            </div>
          </div>
        ) : (
          <div className="py-10 flex flex-wrap md:flex-row justify-center gap-5">
            {sortedDiaries.map((diary) => (
              <DiaryCard key={diary.id} diary={diary} />
            ))}
          </div>
        )}
      </main>
    </>
  );
};

export default App;
