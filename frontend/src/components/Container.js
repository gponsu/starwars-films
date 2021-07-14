const Container = ({ children, ...rest }) => (
  <div className="container mx-auto" {...rest}>
    {children}
  </div>
);

export default Container;
