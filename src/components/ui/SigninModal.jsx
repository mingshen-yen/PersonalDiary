import { useRef } from "react";
import { X, LogIn } from "lucide-react";

export default function SigninModal() {
  const modalRefSignin = useRef();
  const handleSignin = () => {
    modalRefSignin.current?.showModal();
  };

  const SigninAction = () => {};

  return (
    <>
      <div
        onClick={handleSignin}
        className="flex flex-col justify-center items-center cursor-pointer hover:font-bold hover:text-cyan-500 transition"
      >
        <LogIn className="w-5" />
        <span className="text-sm">Login</span>
      </div>
      <dialog ref={modalRefSignin} className="modal">
        <div className="absolute inset-0 bg-black/40" onClick={() => modalRef.current?.close()} />
        <div className="modal-box text-black">
          <div className="flex justify-between p-1">
            <h2 className="text-2xl font-bold text-cyan-500">Login</h2>
            <button
              onClick={() => modalRefSignin.current?.close()}
              className="text-white/90 cursor-pointer hover:shadow-lg hover:shadow-gray-500 transition"
              aria-label="Close form"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          <div>
            <form onSubmit={SigninAction}>
              <div>
                <label htmlFor="name" className="flex items-center gap-1 p-2 font-semibold">
                  Username:
                </label>
                <input
                  type="name"
                  name="name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  required
                />
              </div>
              <div>
                <label htmlFor="password" className="flex items-center gap-1 p-2 font-semibold">
                  Password:
                </label>
                <input
                  type="password"
                  name="password"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  required
                />
              </div>
              <div className="flex gap-2 mt-3">
                <button
                  type="submit"
                  className="w-full cursor-pointer hover:shadow-lg hover:shadow-gray-500 transition"
                >
                  Log in
                </button>
              </div>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
}
