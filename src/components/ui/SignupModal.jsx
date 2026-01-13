import { useRef, useState } from "react";
import { X } from "lucide-react";

export default function SignupModal({ users, setUsers }) {
  const modalRefSignup = useRef();
  const handleSignup = () => {
    modalRefSignup.current?.showModal();
  };

  const SignupAction = () => {
    const userData = new FormData(e.currentTarget);
    console.log(userData);

    //get the values from input
    const newUser = {
      name: userData.get("username"),
      pwd: userData.get("pwd"),
      email: userData.get("email"),
    };

    //update the input to DiaryDetails with previous value
    setUsers((prev) => [...prev, newUser]);

    e.currentTarget.reset();

    // close modal
    modalRef.current?.close();

    // // check if the date already enter
    // const username = formData.get("username");
    // const exists = diaryDetails.find((user) => user.username === username);
    // if (exists) {
    //   alert("You have already signed up.");
    //   return;
    // }
  };

  return (
    <>
      <div onClick={handleSignup}>
        <button>sign up</button>
      </div>
      <dialog ref={modalRefSignup} className="modal">
        <div className="absolute inset-0 bg-black/40" onClick={() => modalRef.current?.close()} />
        <div className="modal-box text-black">
          <div className="flex justify-between p-1">
            <h2 className="text-2xl font-bold text-cyan-500">Create a new account</h2>
            <button
              onClick={() => modalRefSignup.current?.close()}
              className="text-white/90 cursor-pointer hover:shadow-lg hover:shadow-gray-500 transition"
              aria-label="Close form"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          <div>
            <form onSubmit={SignupAction}>
              <div>
                <label htmlFor="username" className="flex items-center gap-1 p-2 font-semibold">
                  Username:
                </label>
                <input
                  type="name"
                  name="username"
                  placeholder="john123"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  required
                />
              </div>
              <div>
                <label htmlFor="pwd" className="flex items-center gap-1 p-2 font-semibold">
                  Password:
                </label>
                <input
                  type="password"
                  name="pwd"
                  placeholder="new password"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="flex items-center gap-1 p-2 font-semibold">
                  Email:
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="name@example.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  required
                />
              </div>
              <div className="flex gap-2 mt-3">
                <button
                  type="submit"
                  className="w-full cursor-pointer hover:shadow-lg hover:shadow-gray-500 transition"
                >
                  Sign up
                </button>
              </div>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
}
