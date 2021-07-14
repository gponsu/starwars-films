import { ROMAN_NUMBERS } from "../constants";

const FinderResult = ({ episode, title, releaseYear, director }) => (
  <div className="bg-gray-100 flex px-6 py-4 rounded my-5 items-center">
    <div className="bg-purple-500 rounded-full text-gray-100 font-semibold items-center justify-center h-14 w-14 mr-5 hidden sm:flex">
      {episode}
    </div>
    <div>
      <h2 className="text-xl font-semibold">
        {title}
        <span className="text-base ml-1 font-normal">({releaseYear})</span>
      </h2>
      <h3>
        <span className="font-semibold">Director:</span> {director}
      </h3>
    </div>
  </div>
);

const FinderResults = ({ items }) => (
  <div className="w-full mt-8 md:mt-16" data-test="films">
    {items.map((item, index) => {
      const episode = ROMAN_NUMBERS[item.episode_id];
      const releaseYear = new Date(item.release_date).getFullYear();

      return (
        <FinderResult
          title={item.title}
          episode={episode}
          releaseYear={releaseYear}
          director={item.director}
        />
      );
    })}
  </div>
);

export default FinderResults;
