import { RiDeleteBin6Line } from "react-icons/ri";

const ListItems = ({ items, taskCompletion, taskDeletion }) => {
    return (
        <ul>
            {
                items.map(item => {
                    return <li key={item.id} className="flex items-center justify-between py-1 pr-[10px] hover:bg-[#D9D9D9]">
                        <div>
                            <input onClick={() => taskCompletion(item.id)} type="checkbox" checked={item.completed} readOnly />
                            <span className={`ml-2 inter text-[16px] font-medium ${item.completed === true ? 'line-through' : ''}`}>{item.text}</span>
                        </div>
                        <button onClick={() => taskDeletion(item.id)} className="bg-[#FF0000B2] border-0 py-0.5 rounded cursor-pointer hover:bg-[#ff0000ef]">
                            <RiDeleteBin6Line />
                        </button>
                    </li>
                })
            }
        </ul>
    );
};

export default ListItems;