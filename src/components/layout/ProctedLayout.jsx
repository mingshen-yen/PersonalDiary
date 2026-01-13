import SigninModal from "../ui/SigninModal";

export default function ProctedLayout() {
  return (
    <>
      <div className="text-center py-20">
        <div className="bg-white rounded-2xl p-12 shadow-sm max-w-md mx-auto">
          <div className="w-20 h-20 bg-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <SigninModal />
          </div>
          <h2 className="text-gray-900 mb-2">Please login to asscess full content.</h2>
        </div>
      </div>
    </>
  );
}
