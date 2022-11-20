import mockStories from "./mockStories"
import Storie from "./Storie"

export default function Stories() {
  return (
    <div className="container-story">
      {mockStories.map((el) => (
        <Storie key={el.name} name={el.name} src={el.src} />
      ))}
      <ion-icon name="chevron-forward-circle"></ion-icon>
    </div>
  );
}
