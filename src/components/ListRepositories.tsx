import { BsFillCalendar2Fill } from "react-icons/bs";
import camelCaseToTitleCase from "../lib/camelCaseToTitleCase";
import PostList from "./PostList";

export declare interface ListRepositoriesProps {
  activeLink: string | null;
  limit: number;
  handleLoadingMore: () => void;
  fetchedData: DbRepo[];
}

const ListRepositories = ({ activeLink, limit, handleLoadingMore, fetchedData }: ListRepositoriesProps): JSX.Element => (
  <div className="mx-auto max-w-7xl px-4 mt-10">
    <div className="flex flex-col gap-y-5">
      <div className="flex items-center gap-x-2.5">
        <BsFillCalendar2Fill className="w-8 h-8 text-white" />

        {activeLink &&
          <h1 className="text-2xl text-white font-semibold">
            {`${camelCaseToTitleCase(activeLink)} Repositories`}
          </h1>}
      </div>

      {
        fetchedData.map((item, i) => (
          <PostList
            key={`${item.full_name}_${i}`}
            data={item}
          />
        ))
      }
    </div>

    {
      fetchedData.length > 0 &&
        activeLink !== "myVotes" &&
        limit <= 100 &&
          <div className="flex justify-center">
            <button
              className="bg-white text-gray-700 mt-4 mb-4 text-base border-gray-400 border font-normal py-1 px-4 rounded"
              onClick={() => handleLoadingMore()}
            >
              Load More
            </button>
          </div>
    }
  </div>
);

export default ListRepositories;
