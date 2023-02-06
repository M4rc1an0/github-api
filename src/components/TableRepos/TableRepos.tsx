import { Repo } from 'public/icons/repo'
import * as S from './styles'

export const TableRepos = ({ data }: any) => {
    return (
        <S.ReposContent>
            {data.map((item: any, index: any) => {
                return (
                    <S.RepoInfo key={index} href={item.html_url}>
                        <p>{item.name}</p>
                        <li>
                            <Repo />
                            <p>{item.html_url}</p>
                        </li>
                    </S.RepoInfo>
                )
            })}
        </S.ReposContent>
    )
}