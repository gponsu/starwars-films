const Title = ({ children, ...rest }) => (
  <h1 className="text-3xl mb-5 text-gray-100" {...rest}>
    {children}
  </h1>
);

export default Title;
