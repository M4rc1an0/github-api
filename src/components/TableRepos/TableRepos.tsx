import * as S from './styles'

export const TableRepos = ({ data }: any) => {
    return (
        <S.ReposContent>
            {data.map((item: any, index: any) => {
                return (
                    <S.RepoInfo key={index} href={item.html_url}>
                        <p>{item.name}</p>
                        <p>{item.html_url}</p>
                    </S.RepoInfo>
                )
            })}
        </S.ReposContent>
    )
}