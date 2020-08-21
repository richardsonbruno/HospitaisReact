import styled from 'styled-components';

export const Container = styled.div`
  border-bottom: 1px #d4d4d4 solid;
  padding: 30px 0;
  width: 100%;

  h1 {
    color: #060055;
    font-weight: 600;
    text-transform: uppercase;
    margin-bottom: 5px;
  }

  div {
    display: flex;

    span {
      font-size: 14px;
      color: #838080;
      line-height: 21px;

      display: flex;
      align-items: center;

      & + span {
        margin-left: 15px;
        border-left: 1px #b7b7b7 solid;
        padding-left: 15px;
      }

      img {
        margin-right: 5px;
      }
    }
  }
`;
