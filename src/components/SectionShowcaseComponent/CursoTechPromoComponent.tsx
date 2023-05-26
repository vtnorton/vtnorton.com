import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { SectionShowcase } from './SectionShowcaseBaseComponent/SectionShowcaseBaseComponent'
import { SectionShowcaseComponentProps } from './SectionShowcaseComponentProps'

export const CursoTechPromoComponent = (props: SectionShowcaseComponentProps) => {
	return (
		<SectionShowcase half={props.half} imageAlt='Logo do app Formula, um </> dentro de um octogono.' imageUrl='/img/showcases/formula.jpg' blurImageUrl='/img/showcases/formula-blur.jpg'>
			<>
				<h2>🧑‍🎤 Curso: tech pra quem não é tech</h2>
				<p>Se você se pergunta se BIOS não era aquele grupo musical dos anos 90, ou se você acha que garotos e garotas de programa trabalhando com C# estão usando o ofício anal, então este curso é para você!</p>
				<p>
					Este curso é voltado para pessoas sem conhecimento prévio em tech e que entenderam que várias novas profissões foram e estão sendo criadas constantemente e, mesmo não sendo uma pessoa desenvolvedora, é importante alguns conceitos. Profissões como tech recruiter, tech
					writer ou dev relations. O objetivo é apresentar conceitos básicos de tecnologia, ferramentas e processos utilizados na área. Venha fazer parte do mundo da tecnologia e expanda seus horizontes profissionais!
				</p>
				<a href='/curso/tech-nao-tech ' className='btn btn-primary'>
					<FontAwesomeIcon icon={faChevronRight} />
					matricule_agora();
				</a>
			</>
		</SectionShowcase>
	)
}
