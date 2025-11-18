import { Link } from "react-router";

const GenderCollectionSection = () => {
  return (
    <>
      <div className="max-w-7xl w-full m-auto p-10 grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-4">
        {/* Men  */}
        <div className="relative rounded h-80 bg-amber-200">
          <img
            src="https://images.pexels.com/photos/6009146/pexels-photo-6009146.jpeg?_gl=1*vjttsy*_ga*MjkzMDMzMTA1LjE3NjMzODQzMTc.*_ga_8JE65Q40S6*czE3NjMzODQzMTckbzEkZzEkdDE3NjMzODQzODIkajU5JGwwJGgw"
            alt=""
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>

          <div className="absolute inset-0 flex items-center justify-center text-white">
            <Link
              to={"/"}
              className="font-medium border border-white p-2 rounded-xl cursor-pointer hover:bg-white hover:text-black"
            >
              Explore Men Collection
            </Link>
          </div>
        </div>

        {/* women  */}
        <div className="relative rounded h-80 bg-amber-200">
          <img
            src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="absolute inset-0 flex items-center justify-center text-white">
            <Link
              to={"/"}
              className="font-medium border border-white p-2 rounded-xl cursor-pointer hover:bg-white hover:text-black"
            >
              Explore Women Collection
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default GenderCollectionSection;
