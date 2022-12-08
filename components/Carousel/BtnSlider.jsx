import { MdOutlineArrowForwardIos, MdOutlineArrowBackIosNew } from 'react-icons/md'

export default function BtnSlider({ direction, moveSlide }) {
  return (
    <button
      onClick={moveSlide}
      className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
    >
      {direction === "next" ? <MdOutlineArrowForwardIos size={28}/> :  <MdOutlineArrowBackIosNew size={28}/>}
    </button>
  );
}