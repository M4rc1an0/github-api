import { Search } from 'public/icons/search'
import * as S from './styles'

export const FormSearch = ({value, change, click}: any) => {
    return (
        <S.ContentSearch>
            <h2>Search for a user</h2>
            <div>
                <S.InputSearch placeholder='User' value={value} onChange={change} />
                <S.ButtonSearch onClick={click}>
                    <Search width={20} />
                </S.ButtonSearch>
            </div>
        </S.ContentSearch>
    )
}