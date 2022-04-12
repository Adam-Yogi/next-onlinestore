const Container = (props) => {
  return (
    <div className="p-3 lg:px-48 md:px-36 grid gap-3 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
      {props.children}
    </div>
  );
};

export default Container;
