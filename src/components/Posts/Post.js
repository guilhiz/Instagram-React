import React, { useState } from "react";
import Media from "../Media";

export default function Post(props) {
  const [like, setLike] = useState(true);
  const [save, setSave] = useState(true);
  const [likeComment1, setLikeComment1] = useState(true);
  const [likeComment2, setLikeComment2] = useState(true);
  const [heartAnimation, setHeartAnimation] = useState(true);
  const timeToEndAnimation = 500;

  return (
    <div className="container-post" data-test="post">
      <div className="post-header">
        <div>
          <img src={props.el.srcProfile} alt="profile picture" />
          <p>{props.el.name} </p>
        </div>
        <ion-icon name="props.ellipsis-horizontal-outline"></ion-icon>
      </div>
      <div
        className="post-image"
        data-test="post-image"
        onDoubleClick={() => {
          setLike(false);
          setHeartAnimation(false);
          setTimeout(() => setHeartAnimation(() => true), timeToEndAnimation);
        }}
      >
        {!heartAnimation ? <ion-icon name="heart"></ion-icon> : null}
        <Media videoOgg={props.el.srcVideoOgg} videoMp4={props.el.srcVideoMp4} postImg={props.el.srcImg} />
      </div>
      <div className="post-footer">
        <div className="post-footer-icons">
          <div>
            <ion-icon
              data-test="like-post"
              onClick={() => {
                setLike((current) => !current);
              }}
              name={!like ? "heart" : "heart-outline"}
            ></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div>
            <ion-icon
              onClick={() => {
                setSave((current) => !current);
              }}
              data-test="save-post"
              name={!save ? "bookmark" : "bookmark-outline"}
            ></ion-icon>
          </div>
        </div>
        <div className="post-footer-likes">
          <img src={props.el.srcLike} alt="profile picture" />
          <p data-test="likes-number">
            <span>Curtido por</span> {props.el.nameLike} <span>e</span> outras {!like ? Number(props.el.likeNumber) + 1 : props.el.likeNumber} pessoas
          </p>
        </div>
        <div className="post-footer-commentary">
          <div>
            <p>
              {props.el.nameComment} <span>{props.el.comment}</span>
            </p>
          </div>
          <ion-icon
            onClick={() => {
              setLikeComment1((current) => !current);
            }}
            name={!likeComment1 ? "heart" : "heart-outline"}
          ></ion-icon>
        </div>
        <div className="post-footer-commentary">
          <div>
            <p>
              {props.el.nameCommentTwo} <span>{props.el.commentTwo}</span>
            </p>
          </div>
          <ion-icon
            onClick={() => {
              setLikeComment2((current) => !current);
            }}
            name={!likeComment2 ? "heart" : "heart-outline"}
          ></ion-icon>
        </div>
        <button className="post-footer-button">Ver todos os {props.el.commentNumber} comentários</button>
        <div className="post-footer-input">
          <ion-icon name="happy-outline"></ion-icon>
          <input type="text" name="commentary" placeholder="Adicione um comentário..." />
          <button>Publicar</button>
        </div>
      </div>
    </div>
  );
}
