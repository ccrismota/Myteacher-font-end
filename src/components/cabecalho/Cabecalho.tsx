import { CabecalhoContainer, Logo } from "./Cabecalho.style"

const cabecalho = () => {
    return (
        <CabecalhoContainer>
           <div>
            <Logo  src="/img/myteacher.png" />
           </div>
           <p>Encontre o professor perfeito!</p>
        </CabecalhoContainer>
    )
}

export default cabecalho;