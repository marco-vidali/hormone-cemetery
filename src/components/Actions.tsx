import { FiHeadphones, FiInfo } from "react-icons/fi";
import { Modal } from "../types/Modal";

export default function Actions() {
  function handleShowModal() {
    (document.getElementById("modal") as unknown as Modal).showModal();
  }

  return (
    <div className="flex-1 flex justify-center items-center flex-col gap-4">
      <img
        src="/images/Hormone Cemetery's Title.png"
        alt="Hormone Cemetery's Title"
        className="w-96 max-w-[80vw]"
      />
      <div className="flex justify-center items-center gap-4 w-96 max-w-[80vw]">
        <button className="btn w-1/2" onClick={handleShowModal}>
          About me <FiInfo />
        </button>
        <a
          className="btn btn-primary w-1/2"
          href="https://links.freshtunes.com/nailB"
        >
          Listen now <FiHeadphones />
        </a>
      </div>
    </div>
  );
}
