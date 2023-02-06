import * as S from './styles'

type ModalProps = {
    children: any
} 

export const Modal = ({ children }: ModalProps) => {
    return (
        <S.OpacityModal>
            <S.Modal>
                    {children}
            </S.Modal>
        </S.OpacityModal>
    )
}

