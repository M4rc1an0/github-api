import { Repo } from 'public/icons/repo'
import { ReactNode } from 'react'
import * as S from './styles'

type MapProps = {
    name: string
    html_url: string 
}

interface DataProps {
    data: [] | never[] 
}

type TableReposProps = {
    data: {
        map(arg0: (item: MapProps, index: string) => JSX.Element): ReactNode
        name: string | undefined
        html_url: string | undefined
    }
}

export const TableRepos = ({ data }: TableReposProps) => {
    return (
        <S.ReposContent>
            {data.map((item: MapProps, index: string) => {
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