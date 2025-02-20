import React from 'react'
import styled from 'styled-components'
import Search from './Search';
import OcticonIcon from './Octicon';

function Header() {
  return (
    <Wrapper>
      <OcticonIcon name="mark-github" mega />
      <Search />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background-color: #24292e;
  color: #ffffff;
  z-index: 32;
  padding: 16px;
  font-size: 14px;
  line-height: 1.5;
  display: flex;
  align-items: center;
`;

export default Header
