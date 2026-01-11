export default function DiaryCard({ diary }) {
  return (
    <div key={diary.id} className="card bg-base-100 w-120 shadow-sm ">
      <figure>
        <img src={diary.img} alt="img" />
      </figure>
      <div className="card-body h-40">
        <span className=" text-cyan-700 text-sm text-right">{diary.date}</span>
        <h2 className="text-blue-800 font-bold text-2xl">{diary.title}</h2>
        <p>{diary.content}</p>
      </div>
    </div>
  );
}
