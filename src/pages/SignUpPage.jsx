
const SignUpPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4 mt-20 mb-20">
      <form className="rounded-lg w-full max-w-md p-8">
        <h1 className="font-bold text-3xl mb-8 ">Sign Up</h1>
        <label htmlFor="firstName" className="font-bold block mb-2">
          First Name
        </label>
        <input
          id="firstName"
          className="border border-gray-300 rounded h-12 w-full p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-purple-400"
          type="text"
          placeholder="Enter First Name"
        />
        <label htmlFor="lastName" className="font-bold block mb-2">
          Last Name
        </label>
        <input
          id="lastName"
          className="border border-gray-300 rounded h-12 w-full p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-purple-400"
          type="text"
          placeholder="Enter Last Name"
        />
        <label htmlFor="email" className="font-bold block mb-2">
          Email
        </label>
        <input
          id="email"
          className="border border-gray-300 rounded h-12 w-full p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-purple-400"
          type="email"
          placeholder="Enter Email"
        />
        <label htmlFor="password" className="font-bold block mb-2">
          Password
        </label>
        <input
          id="password"
          className="border border-gray-300 rounded h-12 w-full p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-purple-400"
          type="password"
          placeholder="Enter Password"
        />
        <label htmlFor="confirmPassword" className="font-bold block mb-2">
          Confirm Password
        </label>
        <input
          id="confirmPassword"
          className="border border-gray-300 rounded h-12 w-full p-3 mb-6 focus:outline-none focus:ring-2 focus:ring-purple-400"
          type="password"
          placeholder="Confirm Password"
        />
        <div className="flex items-center gap-2 mb-6">
          <input id="remember" type="checkbox" className="h-4 w-4" />
          <label htmlFor="remember">Remember me?</label>
        </div>
        <button className="h-12 w-full rounded bg-purple-500 hover:bg-purple-600 text-white font-semibold transition">
          Sign Up
        </button>
        <p className="text-center mt-6 text-sm">
          Already have an account?{" "}
          <a className="text-blue-600 hover:underline" href="/SignInPage">
            Sign In
          </a>
        </p>
      </form>
    </div>
  );
};

export default SignUpPage;

