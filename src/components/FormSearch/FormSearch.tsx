import { Search } from 'public/icons/search'
import * as S from './styles'

type FormSearchProps = {
    value?: string
    change?: (event: React.ChangeEvent<HTMLInputElement>) => void
    click?: () => void
}

export const FormSearch = ({value, change, click}: FormSearchProps) => {
    return (
        <S.ContentSearch>
            <h2>Search for a user</h2>
            <div>
                <S.InputSearch name='user' placeholder='User' value={value} onChange={change} />
                <S.ButtonSearch name='search' onClick={click}>
                    <Search width={20} />
                </S.ButtonSearch>
            </div>
        </S.ContentSearch>
    )
}