import AboutMeModal from "./AboutMeModal";
import Actions from "./Actions";
import AlbumCover from "./AlbumCover";

export default function App() {
  return (
    <>
      <AboutMeModal />

      <div className="flex h-screen lg:flex-row flex-col p-8">
        <AlbumCover />
        <Actions />
      </div>
    </>
  );
}
