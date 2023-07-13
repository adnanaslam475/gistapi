import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { fetchContent } from '../store/redux/gistSlice'
import { useDispatch } from 'react-redux'
import useDebounce from '../hooks/useDebounce'
import OcticonIcon from './Octicon'

const Search = () => {
  const [search, setSearch] = useState<string>('')
  const dispatch = useDispatch()

  const debouncedUsername = useDebounce(search, 500);
  useEffect(() => {
    // @ts-ignore
    dispatch(fetchContent(search))
  }, [debouncedUsername])

  const searchHandler = (e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value);

  return (
    <Wrapper>
      <InputBox>
        <OcticonIcon name="search" />
        <Input onChange={searchHandler} value={search} placeholder="Search Gists for the username" />
      </InputBox>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding: 8px;
  background-color: #ffffff;
  font-size: 14px;
  line-height: 1.5;
  border-radius: 6px;
  margin: 0 16px;
`;

const InputBox = styled.div`
  border-radius: 4px;
  display: flex;
  width: 400px;
`;

const Input = styled.input`
  border: none;
  width: 100%;
  font-size: 16px;

  &:focus{
    outline: 0;
  }
`;

export default Search
