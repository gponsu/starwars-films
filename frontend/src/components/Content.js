const Content = ({ children, ...rest }) => (
  <div
    className="min-h-screen flex flex-col items-center justify-center p-5"
    {...rest}
  >
    {children}
  </div>
);

export default Content;
