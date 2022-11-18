const posts = [
  {
    srcProfile: "assets/images/story/loud-story.jpg",
    name: "loud",
    srcPost: "assets/images/loud-champions.jpg",
    srcLike: "assets/images/story/sacy.jpg",
    nameLike: "sacy",
    likeNumber: "99.159",
    nameComment: "brad_breach",
    comment: "Melhores do mundo",
    nameCommentTwo: "yaki_sova",
    commentTwo: "Faz o L!!!",
    commentNumber: "1.722",
  },
  {
    srcProfile: "assets/images/barked 2.svg",
    name: "barked",
    srcPost: "assets/images/BlackBear.jpg",
    srcLike: "assets/images/adorableanimals 2.svg",
    nameLike: "adorable_animals",
    likeNumber: "12.454",
    nameComment: "p.b.teron",
    comment: "Apenas beleza",
    nameCommentTwo: "falkol",
    commentTwo: "Incrível",
    commentNumber: "425",
  },
  {
    srcProfile: "assets/images/meowed 2.svg",
    name: "meowed",
    srcPost: "assets/images/gato-telefone 1.svg",
    srcLike: "assets/images/story/muzy.jpeg",
    nameLike: "muzy",
    likeNumber: "2.823",
    nameComment: "butterfly",
    comment: "Aww tão fofo",
    nameCommentTwo: "jojo",
    commentTwo: "Ótima foto",
    commentNumber: "140",
  },
];

export default function Posts() {
  return (
    <div>
      {posts.map((el) => (
        <Post el={el} />
      ))}
    </div>
  );
}

function Post(props) {
  return (
    <div class="container-post" data-test="post">
      <div class="post-header">
        <div>
          <img src={props.el.srcProfile} alt="profile picture" />
          <p>{props.el.name} </p>
        </div>
        <ion-icon name="props.ellipsis-horizontal-outline"></ion-icon>
      </div>
      <div class="post-image" data-test="post-image">
        <img src={props.el.srcPost} alt="post image" />
      </div>
      <div class="post-footer">
        <div class="post-footer-icons">
          <div>
            <ion-icon data-test="like-post" name="heart-outline"></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div>
            <ion-icon data-test="save-post" name="bookmark-outline"></ion-icon>
          </div>
        </div>
        <div class="post-footer-likes">
          <img src={props.el.srcLike} alt="profile picture" />
          <p data-test="likes-number">
            <span>Curtido por</span> {props.el.nameLike} <span>e</span> outras {props.el.likeNumber}{" "}
            pessoas
          </p>
        </div>
        <div class="post-footer-commentary">
          <div>
            <p>
              {props.el.nameComment} <span>{props.el.comment}</span>
            </p>
          </div>
          <ion-icon name="heart-outline"></ion-icon>
        </div>
        <div class="post-footer-commentary">
          <div>
            <p>
              {props.el.nameCommentTwo} <span>{props.el.commentTwo}</span>
            </p>
          </div>
          <ion-icon name="heart-outline"></ion-icon>
        </div>
        <button class="post-footer-button">
          Ver todos os {props.el.commentNumber} comentários
        </button>
        <div class="post-footer-input">
          <ion-icon name="happy-outline"></ion-icon>
          <input type="text" name="commentary" placeholder="Adicione um comentário..." />
          <button>Publicar</button>
        </div>
      </div>
    </div>
  );
}
