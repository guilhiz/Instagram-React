const stories = [
  {
    src: "assets/images/story/guilhiz.jpeg",
    name: "guilhiz",
  },
  {
    src: "assets/images/story/mckako.jpeg",
    name: "mckako",
  },
  {
    src: "assets/images/story/sacy.jpg",
    name: "sacy",
  },
  {
    src: "assets/images/story/loud-story.jpg",
    name: "loud",
  },
  {
    src: "assets/images/story/muzy.jpeg",
    name: "paulomuzy",
  },
  {
    src: "assets/images/story/driven1.png",
    name: "driven",
  },
  {
    src: "assets/images/story/therock.jpeg",
    name: "therock",
  },
  {
    src: "assets/images/story/valorant.jpeg",
    name: "valorant",
  },
];

export default function Stories() {
  return (
    <div class="container-story">
      {stories.map((el) => (
        <Storie name={el.name} src={el.src} />
      ))}
    </div>
  );
}

function Storie(props) {
  console.log(props);
  return (
    <div class="story-content">
      <div class="story-image">
        <img src={props.src} alt="profile picture" />
      </div>
      <p>{props.name}</p>
    </div>
  );
}
