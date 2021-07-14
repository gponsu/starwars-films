const Finder = ({ placeholder, onSearch, onChange }) => (
  <form
    className="inline-flex w-full xl:w-1/2"
    data-test="finder"
    onSubmit={onSearch}
  >
    <input
      className="h-10 px-5 w-full outline-none rounded-l bg-gray-100"
      type="text"
      placeholder={placeholder}
      data-test="finder-input"
      required
      onChange={onChange}
    />
    <button className="bg-red-600 hover:bg-red-700 text-gray-100 font-bold py-2 px-4 rounded-r">
      Go!
    </button>
  </form>
);

export default Finder;
