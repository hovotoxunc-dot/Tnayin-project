import { useDispatch, useSelector } from "react-redux";
import { inputText } from "../../redux/about/actions";

export default function Title() {
  const text = useSelector((state) => {
    const { text } = state;
    return text.text;
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(inputText(e.target.value));
  };

  return (
    <div className="card-title">
      <div className="card-title-top">
        <input
          type="text"
          onChange={handleChange}
          className="mt-5 h-10 border-3 border-gray-500 outline-none hover:border-5 hover:border-pink-400"
        />
      </div>

      <p>{text}</p>
    </div>
  );
}