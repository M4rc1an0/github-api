import { Repo } from 'public/icons/repo'
import * as S from './styles'
interface TableProps {
    data: { name: string; html_url: string; }[] | any;
}

export const TableRepos = ({ data }: TableProps) => {
    return (
        <>
            {data.length ?
                <S.ReposContent>
                    {data.map((item: { name: string, html_url: string }, index: number) => {
                        return (
                            <S.RepoInfo key={index} href={item.html_url}>
                                <p>{item.name}</p>
                                <li>
                                    <Repo />
                                    <p>{item.html_url}</p>
                                </li>
                            </S.RepoInfo>
                        )
                    })
                    }
                </S.ReposContent>
                :
                <S.NotExistingRepo>
                    <h2>No existing repositories</h2>
                </S.NotExistingRepo>
            }
        </>
    )
}