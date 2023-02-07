import { useEffect, useState } from 'react'
import axios from "axios";
import * as S from '../styles/styles'
import { Button, Card, FormSearch, LogoApplication, Modal, Table, TableRepos } from '@/components';
import { SearchProps } from '@/types/types';
import api from '@/services/api';

type TableProps = {
  data: { name: string; html_url: string; }[];
}

export default function Home() {
  const [inputValue, setInputValue] = useState<string>('')
  const [userProfile, setUserProfile] = useState<SearchProps>()
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [repos, setRepos] = useState<TableProps>()
  const [error, setError] = useState<boolean>(false)

  useEffect(() => {
    document.title = 'GitHub API';
  })

  const searchUser = async () => {
    try {
      const response = await api.get(`/${inputValue}`)
      const repos = await api.get(`/${inputValue}/repos`)

      setUserProfile(response.data)
      setRepos(repos.data)
      setError(false)
    } catch {
      setError(true)
    }
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
              <Card data={userProfile} click={() => setIsOpen(true)} />
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
              <Button name='return' text='Return' click={() => setIsOpen(false)} />
            </S.ButtonReturn>
          </S.ModalContent>
        </Modal>
      }
    </>
  )
}
