import {
  ArrowPathIcon,
  ArrowPathRoundedSquareIcon,
  ArrowUpCircleIcon,
  PencilSquareIcon,
  TrashIcon,
  UserPlusIcon,
} from "@heroicons/react/24/outline";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const { currentUser } = useSelector((state) => state.user);

  return (
    // <div className="bg-slate-100 items-center justify-center max-w-6xl mx-auto">
    //   <table>
    //     <thead>
    //       <tr className="flex gap-5 items-center justify-between">
    //         <th className="font-semibold text-slate-600 uppercase text-sm">#</th>
    //         <th className="font-semibold text-slate-600 uppercase text-sm">Profile</th>
    //         <th className="font-semibold text-slate-600 uppercase text-sm">Name</th>
    //         <th className="font-semibold text-slate-600 uppercase text-sm">Email</th>
    //         <th className="font-semibold text-slate-600 uppercase text-sm">Status</th>
    //         <th className="font-semibold text-slate-600 uppercase text-sm">Actions</th>
    //       </tr>
    //     </thead>
    //     <tbody>
    //       <tr>
    //         <td></td>
    //         <td></td>
    //         <td></td>
    //         <td></td>
    //         <td></td>
    //       </tr>
    //     </tbody>
    //   </table>
    // </div>
    // <div className="bg-slate-100 items-center justify-center max-w-6xl mx-auto mt-5">
    //   <table className="w-full border-collapse border border-slate-300">
    //     <thead>
    //       <tr className="bg-slate-100 text-slate-700 divide-y">
    //         <th className="py-2 px-4 border-b uppercase text-sm whitespace-nowrap">
    //           {" "}
    //           #{" "}
    //         </th>
    //         <th className="py-2 px-4 border-b uppercase text-sm whitespace-nowrap">
    //           {" "}
    //           Profile{" "}
    //         </th>
    //         <th className="py-2 px-4 border-b uppercase text-sm whitespace-nowrap">
    //           {" "}
    //           Name{" "}
    //         </th>
    //         <th className="py-2 px-4 border-b uppercase text-sm whitespace-nowrap">
    //           {" "}
    //           Email{" "}
    //         </th>
    //         <th className="py-2 px-4 border-b uppercase text-sm whitespace-nowrap">
    //           {" "}
    //           Status{" "}
    //         </th>
    //         <th className="py-2 px-4 border-b uppercase text-sm whitespace-nowrap">
    //           {" "}
    //           Actions{" "}
    //         </th>
    //       </tr>
    //     </thead>
    //     <tbody>
    //       <tr className="hover:bg-slate-50 divide-y">
    //         <td className="py-2 px-4 border-b whitespace-nowrap"> 1 </td>
    //         <td className="py-2 px-4 border-b whitespace-nowrap">
    //           {" "}
    //           <img
    //             src={currentUser.avatar}
    //             className="h-8 w-8 rounded-full"
    //             alt=""
    //           />{" "}
    //         </td>
    //         <td className="py-2 px-4 border-b whitespace-nowrap">
    //           {" "}
    //           {currentUser.username}{" "}
    //         </td>
    //         <td className="py-2 px-4 border-b whitespace-nowrap">
    //           {" "}
    //           {currentUser.email}{" "}
    //         </td>
    //         <td className="py-2 px-4 border-b whitespace-nowrap"> Active </td>
    //         <td className="py-2 px-4 border-b whitespace-nowrap flex gap-2">
    //           <PencilSquareIcon className="h-5 w-5 text-blue-600 hover:opacity-90 cursor-pointer" />
    //           <ArrowPathIcon className="h-5 w-5 text-green-600 hover:opacity-90 cursor-pointer" />
    //           <TrashIcon className="h-5 w-5 text-red-600 hover:opacity-90 cursor-pointer" />
    //         </td>
    //       </tr>
    //     </tbody>
    //   </table>
    // </div>
    <>
      <div className="items-center justify-center max-w-6xl mx-auto">
        <div className="my-7 flex items-end justify-end">
          <Link to="/new-user" type="button" className="flex gap-2 bg-slate-800 rounded-md px-4 py-2 text-white hover:opacity-95 items-center justify-center cursor-pointer text-xs">
            <UserPlusIcon className="h-4 w-4" />
            New User
          </Link>
        </div>
        <div className="">
          <table className="divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                  Name
                </th>
                <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                  Email
                </th>
                <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                  Role
                </th>
                <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                  Last Seen
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 w-10 h-10">
                      <img
                        className="w-10 h-10 rounded-full"
                        alt=""
                        src={currentUser.avatar}
                      />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900"></div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">
                    {currentUser.username}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">
                    {currentUser.email}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">
                    Last seen <time></time>
                  </div>
                  <div className="flex items-center gap-x-1.5">
                    <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                    <div className="text-xs text-gray-500">Online</div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
