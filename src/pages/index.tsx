import { useEffect, useState } from 'react'
import axios from "axios";
import * as S from './styles'
import { Button, Card, FormSearch, LogoApplication, Modal, Table, TableRepos } from '@/components';

export default function Home() {
  const [inputValue, setInputValue] = useState('')
  const [userProfile, setUserProfile] = useState<any>()
  const [isOpen, setIsOpen] = useState<any>(false)
  const [urlRepos, setUrlRepos] = useState()
  const [repos, setRepos] = useState([])
  const [error, setError] = useState(false)

  useEffect(() => {
    document.title = 'GitHub API';
  })

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

  return (
    <>
      <S.Container>
        <S.SectionSearch>
          <LogoApplication />
          <FormSearch
            value={inputValue}
            change={(e: any) => setInputValue(e.target.value)}
            click={() => searchUser()}
          />
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
