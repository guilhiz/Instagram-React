export default function Posts() {
  return (
    <div>
      <div class="container-post" data-test="post">
        <div class="post-header">
          <div>
            <img src="./assets/images/story/loud-story.jpg" alt="profile picture" />
            <p>loud</p>
          </div>
          <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
        </div>
        <div class="post-image" data-test="post-image">
          <img src="./assets/images/loud-champions.jpg" alt="post image" />
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
            <img src="./assets/images/story/sacy.jpg" alt="profile picture" />
            <p data-test="likes-number">
              <span>Curtido por</span> sacy <span>e</span> outras 99.159 pessoas
            </p>
          </div>
          <div class="post-footer-commentary">
            <div>
              <p>
                brad_breach <span>Melhores do mundo</span>
              </p>
            </div>
            <ion-icon name="heart-outline"></ion-icon>
          </div>
          <div class="post-footer-commentary">
            <div>
              <p>
                yaki_sova <span>Faz o L!!!</span>
              </p>
            </div>
            <ion-icon name="heart-outline"></ion-icon>
          </div>
          <button class="post-footer-button">Ver todos os 1.722 comentários</button>
          <div class="post-footer-input">
            <ion-icon name="happy-outline"></ion-icon>
            <input type="text" name="commentary" placeholder="Adicione um comentário..." />
            <button>Publicar</button>
          </div>
        </div>
      </div>

      <div class="container-post" data-test="post">
        <div class="post-header">
          <div>
            <img src="./assets/images/barked 2.svg" alt="profile picture" />
            <p>barked</p>
          </div>
          <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
        </div>
        <div class="post-image" data-test="post-image">
          <video loop autoplay muted>
            <source src="./assets/videos/video.mp4" type="video/mp4" />
            <source src="./assets/videos/video.ogv" type="video/ogg" />
            Your browser does not support the video tag.
          </video>
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
            <img src="./assets/images/adorableanimals 2.svg" alt="profile picture" />
            <p data-test="likes-number">
              <span>Curtido por</span> adorable_animals <span>e</span> outras 12.454 pessoas
            </p>
          </div>
          <div class="post-footer-commentary">
            <div>
              <p>
                p.b.teron <span>Apenas beleza</span>
              </p>
            </div>
            <ion-icon name="heart-outline"></ion-icon>
          </div>
          <div class="post-footer-commentary">
            <div>
              <p>
                falkol <span>porra gravaram em uma Tekpix?</span>
              </p>
            </div>
            <ion-icon name="heart-outline"></ion-icon>
          </div>
          <button class="post-footer-button">Ver todos os 213 comentários</button>
          <div class="post-footer-input">
            <ion-icon name="happy-outline"></ion-icon>
            <input type="text" name="commentary" placeholder="Adicione um comentário..." />
            <button>Publicar</button>
          </div>
        </div>
      </div>

      <div class="container-post" data-test="post">
        <div class="post-header">
          <div>
            <img src="./assets/images/meowed 2.svg" alt="profile picture" />
            <p>meowed</p>
          </div>
          <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
        </div>
        <div class="post-image" data-test="post-image">
          <img src="./assets/images/gato-telefone 1.svg" alt="post image" />
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
            <img src="./assets/images/respondeai 2.svg" alt="profile picture" />
            <p data-test="likes-number">Curtido por respondeai e outras 101.523 pessoas</p>
          </div>
        </div>
      </div>
    </div>
  );
}
