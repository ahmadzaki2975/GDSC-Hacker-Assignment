const cutTitle = (title) => {
  if (title.length > 48) {
    return title.slice(0, 48) + "...";
  }
  return title;
};

export const KelasCard = (props) => {
  return (
    <div className="max-w-[350px] rounded-2xl overflow-hidden bg-white shadow-lg">
      <div className="bg-cyberkarta-dark h-[200px]"></div>
      <div className="px-3 py-2 grid gap-2">
        {props.type === "Premium" ? (
          <div className="bg-[#FFCB45] w-fit text-center px-3 py-1 rounded-full">
            {props.type}
          </div>
        ) : (
          <div className="bg-[#45DEFF] w-fit min-w-[80px] text-center px-3 py-1 rounded-full">
            {props.type}
          </div>
        )}
        <div className="font-extrabold text-xl text-cyberkarta-blue">
          {cutTitle(props.title)}
        </div>
        <p className="text-lg text-cyberkarta-dark font-bold">{props.level}</p>
        <p className="text-xl mb-1 font-bold text-cyberkarta-blue">
          {props.price}
        </p>
        <div className="line bg-cyberkarta-dark"></div>
        <div className="flex mt-2 mb-5 gap-3">
          <div className="bg-cyberkarta-blue rounded-full w-[50px] aspect-square"></div>
          <div>
            <h1 className="font-bold text-cyberkarta-blue">Mentor Name</h1>
            <p className="font-semibold">Mentor Specialty</p>
          </div>
        </div>
      </div>
    </div>
  );
};
