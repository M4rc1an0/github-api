import * as S from './styles'

type TableProps = {
    data: {
        avatar_url: string | undefined
        name: string | undefined
        login: string | undefined
        html_url: string | undefined
        followers: string | undefined
        following: string | undefined
        public_repos: string | undefined
        email: string | undefined
        location: string | undefined
        bio: string | undefined
      }
}

export const Table = ({ data }: TableProps) => {
    return (
        <S.InfoUserContent>
            <S.ImgUser src={data.avatar_url} />
            <S.UlContent>
                <S.UlInfo>
                    <li>
                        <h3>{data.name}</h3>
                    </li>
                    <li>
                        <span>{data.login}</span>
                    </li>
                    <li>
                        <a href={data.html_url}>{data.html_url}</a>
                    </li>
                    <li>
                        <span>Email: </span>
                        <p>{data.email}</p>
                    </li>
                    <li>
                        <span>Location: </span>
                        <p>{data.location}</p>
                    </li>
                    <li>
                        <span>Bio: </span>
                        <p>{data.bio}</p>
                    </li>
                </S.UlInfo>
                <S.UlSubInfo>
                    <li>
                        <span>Followers</span>
                        {data.followers}
                    </li>
                    <li>
                        <span>Following</span>
                        <p>{data.following}</p>
                    </li>
                    <li>
                        <span>Public repos</span>
                        <p>{data.public_repos}</p>
                    </li>
                </S.UlSubInfo>
            </S.UlContent>
        </S.InfoUserContent>
    )
}