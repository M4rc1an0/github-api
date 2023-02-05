import { useState } from 'react'
import axios from "axios";
import * as S from './styles'
import { Search } from 'public/icons/search';
import Head from 'next/head';
import { ExpandMore } from 'public/icons/expandMore';

export default function Home() {
  const [inputValue, setInputValue] = useState('')
  const [userProfile, setUserProfile] = useState<any>()
  const [error, setError] = useState(false)

  const searchUser = async () => {
    axios
      .get(`https://api.github.com/users/${inputValue}`)
      .then((response: any) =>
        setUserProfile(response.data)
      ).catch(() =>
        alert('Deu Merda')
      )
  }

  console.log(userProfile, 'USER')

  return (
    <>
      <S.Container>
        <S.SectionSearch>
          <S.SubSection>
            <S.Img src='./gitBlack.png' alt='githubWhite' />
          </S.SubSection>
          <S.Title>GitHub Profile</S.Title>
          <S.ContentSearch>
            <h2>Search for a user:</h2>
            <div>
              <input placeholder='User' onChange={(e: any) => setInputValue(e.target.value)} />
              <S.ButtonSearch onClick={() => searchUser()}>
                <Search width={20} />
              </S.ButtonSearch>
            </div>
          </S.ContentSearch>
        </S.SectionSearch>
        <S.SectionInfo>
          {userProfile &&
            <S.SectionCard>
              <S.InfoUser>
                <S.Avatar src={userProfile.avatar_url} alt='img-avatar' />
                <S.UlInfo>
                  <li>
                    <h3>{userProfile.name}</h3>
                  </li>
                  <li>
                    <p>{userProfile.login}</p>
                  </li>
                  <li>
                    <p>Bio: {userProfile.bio}</p>
                  </li>
                  <S.UlSubInfo>
                    <li>
                      <p>Followers:</p>
                      {userProfile.followers}
                    </li>
                    <li>
                      <p>Following:</p>
                      {userProfile.following}
                    </li>
                    <li>
                      <p>Public repos:</p>
                      {userProfile.public_repos}
                    </li>
                  </S.UlSubInfo>
                </S.UlInfo>
              </S.InfoUser>
              <S.MoreInfo>
                <p>More Info</p>
                <ExpandMore />
              </S.MoreInfo>
            </S.SectionCard>
          }
        </S.SectionInfo>
      </S.Container>
    </>

  )
}
