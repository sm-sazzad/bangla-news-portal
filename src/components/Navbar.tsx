import NavLinks from "./NavLinks";
import SignUp from "./SignUp";

const Navbar = () => {
  const date = new Date();

  const formattedDate = new Intl.DateTimeFormat("bn-BD", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);

  return (
    <div className="border-b border-gray-200 bg-white">
      {/* Header */}
      <div className="flex relative items-center justify-center w-[80%] mx-auto py-2">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold tracking-tight text-red-700">
            News 24 <span className="text-gray-900">BD</span>
          </h1>

          <p className="mt-1 text-sm text-gray-500">{formattedDate}</p>
        </div>

        {/* Auth Buttons */}
        <SignUp />
      </div>

      {/* Navigation */}
      <div>
        <NavLinks />
      </div>
    </div>
  );
};

export default Navbar;
