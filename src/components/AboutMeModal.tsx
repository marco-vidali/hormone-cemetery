export default function AboutMeModal() {
  return (
    <dialog id="modal" className="modal">
      <div className="modal-box">
        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
        <h3 className="font-bold text-lg">Hello, I'm Marco...</h3>
        <p className="py-4">
          ...a young italian dude who likes to code, write music and ride his
          penny. If you want to ask me anything, feel free to{" "}
          <a
            href="mailto:marco-vidali-3@proton.me"
            className="font-bold text-primary"
          >
            contact me
          </a>
          !
        </p>
      </div>
    </dialog>
  );
}
