import styled from "styled-components";
import {Link} from 'react-router-dom'

export const Button = styled(Link)`

  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  letter-spacing: 1px;
  display: inline-block;
  padding: 10px 30px;
  border-radius:5px;
  transition: 0.5s;
  color: #fff;
  background-color: rgb(213 70 0);
  text-decoration: none;
  animation-delay: 0.6s;
`