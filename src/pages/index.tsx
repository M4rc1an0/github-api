import { useEffect, useState } from 'react'
import axios from "axios";
import * as S from './styles'
import { Search } from 'public/icons/search';
import Head from 'next/head';
import { ExpandMore } from 'public/icons/expandMore';
import { Button } from '@/components/Button/Button';
import { Modal } from '@/components/Modal/Modal';
import { Card } from '@/components/Card/Card';

export default function Home() {
  const [inputValue, setInputValue] = useState('')
  const [userProfile, setUserProfile] = useState<any>()
  const [isOpen, setIsOpen] = useState<any>(false)
  const [urlRepos, setUrlRepos] = useState()
  const [repos, setRepos] = useState([])
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

  useEffect(() => {
    setUrlRepos(userProfile?.repos_url)
  }, [userProfile])

  const infoUser = () => {
    axios
      .get(`${urlRepos}`)
      .then((response: any) => {
        setRepos(response.data)
        setIsOpen(true)
      })
  }

  console.log(userProfile, 'USERProfile')

  return (
    <>
      <S.Container>
        <S.SectionSearch>
          <S.SubSection>
            <h1>Finder GitHub</h1>
            <S.Img src='./gitBlack.png' alt='githubWhite' />
          </S.SubSection>
          <S.ContentSearch>
            <h2>Search for a user</h2>
            <div>
              <input placeholder='User' value={inputValue} onChange={(e: any) => setInputValue(e.target.value)} />
              <S.ButtonSearch onClick={() => searchUser()}>
                <Search width={20} />
              </S.ButtonSearch>
            </div>
          </S.ContentSearch>
          <S.SectionInfo>
            {userProfile &&
              <Card data={userProfile} click={() => infoUser()} />
            }
          </S.SectionInfo>
        </S.SectionSearch>
      </S.Container>
      {isOpen && userProfile &&
        <Modal>
          <S.ModalContent>
            <S.InfoUserContent>
              <S.ImgUser src={userProfile.avatar_url} />
              <S.UlContent>
                <S.UlInfo>
                  <li>
                    <h3>{userProfile.name}</h3>
                  </li>
                  <li>
                    <span>{userProfile.login}</span>
                  </li>
                  <li>
                    <span><a href={userProfile.html_url}>{userProfile.html_url}</a></span>
                  </li>
                  <li>
                    <span>Email: </span>
                    <p>{userProfile.email}</p>
                  </li>
                  <li>
                    <span>Location: </span>
                    <p>{userProfile.location}</p>
                  </li>
                  <li>
                    <span>Bio: </span>
                    <p>{userProfile.bio}</p>
                  </li>
                </S.UlInfo>
                <S.UlSubInfo>
                  <li>
                    <span>Followers</span>
                    {userProfile.followers}
                  </li>
                  <li>
                    <span>Following</span>
                    <p>{userProfile.following}</p>
                  </li>
                  <li>
                    <span>Public repos</span>
                    <p>{userProfile.public_repos}</p>
                  </li>
                </S.UlSubInfo>
              </S.UlContent>
            </S.InfoUserContent>
            <div>
              {repos && repos.map((item: any, index: any) => {
                return (
                  <div key={index}>{item.name}</div>
                )
              })}
            </div>
            <S.ButtonReturn>
              <Button text='Return' click={() => setIsOpen(false)} />
            </S.ButtonReturn>
          </S.ModalContent>
        </Modal>
      }
    </>

  )
}
