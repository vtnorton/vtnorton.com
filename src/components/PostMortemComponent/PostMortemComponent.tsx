import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const PostMortemComponent = () => {
  return (
    <div className="container">
      <section className="post-morten">
        <div className="row">
          <div className="col-md-4">
            <div className="space-medium"></div>
            <h2>🪦 Post Mortem</h2>
            <p>
              Infelizmente alguns projetos não vão para a frente por motivos
              diversos, mas a gente ainda sente um orgulho daquilo que
              construiu, não é mesmo?
            </p>
            <p>
              Aqui listo alguns projetos que teve suor, dedicação e lágrimas ao
              dizer adeus. 😢
            </p>
          </div>
          <div className="col-md-2"></div>
          <div className="col-md-6">
            <div className="post-morten-list">
              <div className="post-morten-item">
                <img src="/img/showcases/formula.jpg" alt="Formula" />
                <div className="post-morten-item-content">
                  <h3>Formula - Code Editor</h3>
                  <code>* 2014 † 2024</code>
                  <p>
                    O Formula foi o meu segundo grande aplicativo para Windows
                    Phone. Um app pago, feito para desenvolvedores em uma
                    plataforma com pouco market share, mesmo assim teve grandes
                    números de download e excelentes avaliações. Confira sobre o
                    que foi este projeto e como ele me inspirou a ser um
                    desenvolvedor melhor, e o porquê me orgulho tanto dele.
                  </p>
                  <a href="/formula" className="btn btn-link">
                    <FontAwesomeIcon icon={faChevronRight} />
                    read_more();
                  </a>
                </div>
              </div>

              <div className="post-morten-item">
                <img src="/img/showcases/formula.jpg" alt="Formula" />
                <div className="post-morten-item-content">
                  <h3>Formula - Code Editor</h3>
                  <code>* 2014 † 2024</code>
                  <p>
                    O Formula foi o meu segundo grande aplicativo para Windows
                    Phone. Um app pago, feito para desenvolvedores em uma
                    plataforma com pouco market share, mesmo assim teve grandes
                    números de download e excelentes avaliações. Confira sobre o
                    que foi este projeto e como ele me inspirou a ser um
                    desenvolvedor melhor, e o porquê me orgulho tanto dele.
                  </p>
                  <a href="/formula" className="btn btn-link">
                    <FontAwesomeIcon icon={faChevronRight} />
                    read_more();
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
