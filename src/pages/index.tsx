import { useEffect, useState } from 'react'
import axios from "axios";
import * as S from '../styles/styles'
import { Button, Card, FormSearch, LogoApplication, Modal, Table, TableRepos } from '@/components';
import { SearchProps } from '@/types/types';

export default function Home() {
  const [inputValue, setInputValue] = useState('')
  const [userProfile, setUserProfile] = useState<SearchProps>()
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [urlRepos, setUrlRepos] = useState<string | undefined>()
  const [repos, setRepos] = useState<[] | never[]>([])
  const [error, setError] = useState(false)

  useEffect(() => {
    document.title = 'GitHub API';
  })

  const searchUser = async () => {
    axios
      .get(`https://api.github.com/users/${inputValue}`)
      .then((response) => {
        setUserProfile(response.data)
        setError(false)
      }).catch(() =>
        setError(true)
      )
  }

  console.log(userProfile, 'USERPROFILE')

  useEffect(() => {
    setUrlRepos(userProfile?.repos_url)
  }, [userProfile])

  console.log(urlRepos, 'REPO')

  const infoUser = () => {
    axios
      .get(`${urlRepos}`)
      .then((response) => {
        setRepos(response.data)
        setIsOpen(true)
      })
  }

  return (
    <>
      <S.Container>
        <S.SectionSearch>
          <LogoApplication />
          <FormSearch
            value={inputValue}
            change={(e: React.ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value)}
            click={() => searchUser()}
          />
          {error &&
            <S.ErroText>Usuário não encontrado!</S.ErroText>
          }
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
            <Table data={userProfile} />
            <TableRepos data={repos} />
            <S.ButtonReturn>
              <Button text='Return' click={() => setIsOpen(false)} />
            </S.ButtonReturn>
          </S.ModalContent>
        </Modal>
      }
    </>
  )
}
