import { Button } from '@fluentui/react-components'
import { ChevronRight20Regular } from '@fluentui/react-icons'
import { Section } from '../../components/SectionComponent'

export const PostMortemSection = () => {
  return (
    <div className="container">
      <Section className="post-morten">
        <div className="row">
          <div className="col-md-7">
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
        </div>
        <div className="post-morten-list">
          {/* <div className="post-morten-item">
            <img src="/img/showcases/formula.jpg" alt="Formula" />
            <div className="post-morten-item-content">
              <h3>Formula - Code Editor</h3>
              <hr />
              <p>
                O Formula foi o meu segundo grande aplicativo para Windows
                Phone. Um app pago, feito para desenvolvedores em uma plataforma
                com pouco market share, mesmo assim teve grandes números de
                download e excelentes avaliações. Confira sobre o que foi este
                projeto e como ele me inspirou a ser um desenvolvedor melhor, e
                o porquê me orgulho tanto dele.
              </p>
              <Button as='a' href="/formula" icon={<ChevronRight20Regular />} size='small'>read_more();</Button>
            </div>
          </div> */}

          <div className="post-morten-item">
            <img src="/img/projects/olawolff/mortem.jpg" alt="Olá Wolff" />
            <div className="post-morten-item-content">
              <h3>Olá Wolff,</h3>
              <hr />
              <p>
                Dentro da startup estive em posição privilegiada aonde consegui
                colocar a ideia de desburocratização da abertura de uma empresa
                em menos de 24 horas na prática.
                <br /> <br />
                Veja como foi o processo de realizar isso e ainda sim garantir
                uma excelente experiência de usuário, desde a criação da marca,
                ao desenvolvimento, projetos open source e detalhes do
                funcionamento da aplicação.
              </p>
              <Button as='a' href="/olawolff" icon={<ChevronRight20Regular />} size='small'>read_more();</Button>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}
