import { FaBackward, FaAngleLeft, FaAngleRight, FaForward } from "react-icons/fa";

const Pagination = ({ increament, decreament, pageNo, moveForward, moveBackward }) => {

   return <div className='Pagination'>
      <div onClick={moveBackward}>
         <FaBackward />
         {/* <i className="fa fa-backward" ></i> */}
      </div>
      <div onClick={decreament}>
         <FaAngleLeft />
         {/* <i className="fa fa-angle-left"></i> */}
      </div>
      <div><span><strong>{pageNo}</strong></span></div>
      <div onClick={increament}>
         <FaAngleRight />
         {/* <i className="fa fa-angle-right"></i> */}
      </div>
      <div onClick={moveForward}>
         <FaForward />
         {/* <i className="fa fa-forward" ></i> */}
      </div>

   </div>;
};

export default Pagination;
