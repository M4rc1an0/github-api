import { Button } from '../Button/Button'
import * as S from './styles'

export const Card = ({ data, click }: any) => {
  return (
    <S.SectionCard>
      <S.InfoUser>
        <S.Avatar src={data.avatar_url} alt='img-avatar' />
        <S.UlInfo>
          <li>
            <h3>{data.name}</h3>
          </li>
          <li>
            <p>{data.login}</p>
          </li>
          {/* <li>
            <a>{data.html_url}</a>
          </li> */}
          <li>
            <p>Bio:</p>
            {data.bio}
          </li>
          <S.UlSubInfo>
            <li>
              <p>Followers</p>
              {data.followers}
            </li>
            <li>
              <p>Following</p>
              {data.following}
            </li>
            <li>
              <p>Public repos</p>
              {data.public_repos}
            </li>
          </S.UlSubInfo>
          <S.MoreInfo>
            <Button text='More Info' click={click} />
          </S.MoreInfo>
        </S.UlInfo>
      </S.InfoUser>
    </S.SectionCard>
  )
}