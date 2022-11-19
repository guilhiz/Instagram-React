export default function Post(props) {
  return (
    <div className="container-post" data-test="post">
      <div className="post-header">
        <div>
          <img src={props.el.srcProfile} alt="profile picture" />
          <p>{props.el.name} </p>
        </div>
        <ion-icon name="props.ellipsis-horizontal-outline"></ion-icon>
      </div>
      <div className="post-image" data-test="post-image">
        <img src={props.el.srcPost} alt="post image" />
      </div>
      <div className="post-footer">
        <div className="post-footer-icons">
          <div>
            <ion-icon data-test="like-post" name="heart-outline"></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div>
            <ion-icon data-test="save-post" name="bookmark-outline"></ion-icon>
          </div>
        </div>
        <div className="post-footer-likes">
          <img src={props.el.srcLike} alt="profile picture" />
          <p data-test="likes-number">
            <span>Curtido por</span> {props.el.nameLike} <span>e</span> outras {props.el.likeNumber}{" "}
            pessoas
          </p>
        </div>
        <div className="post-footer-commentary">
          <div>
            <p>
              {props.el.nameComment} <span>{props.el.comment}</span>
            </p>
          </div>
          <ion-icon name="heart-outline"></ion-icon>
        </div>
        <div className="post-footer-commentary">
          <div>
            <p>
              {props.el.nameCommentTwo} <span>{props.el.commentTwo}</span>
            </p>
          </div>
          <ion-icon name="heart-outline"></ion-icon>
        </div>
        <button className="post-footer-button">
          Ver todos os {props.el.commentNumber} comentários
        </button>
        <div className="post-footer-input">
          <ion-icon name="happy-outline"></ion-icon>
          <input type="text" name="commentary" placeholder="Adicione um comentário..." />
          <button>Publicar</button>
        </div>
      </div>
    </div>
  );
}