import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 100px);
`;

export const Content = styled.div`
  width: 1120px;
  height: 100%;
  justify-content: center;
  display: flex;
  align-items: center;
  padding: 20px;

  @media (max-width: 600px) {
    padding: 5px;
  }
`;

export const Ul = styled.ul`
  overflow-x: auto;
  height: inherit;

  display: flex;
  flex-wrap: wrap;
  flex-direction: column

  &::-webkit-scrollbar {
    width: 8px;
    border-radius: 10px;
    background-color: whitesmoke; 
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: darkgray; 
  }
`;

export const Li = styled.li`
  display: flex;
  flex-direction: column;
  text-align: start;
  justify-content: space-between !important;
  width: 40%;
  margin: 10px 10px 20px;
  box-shadow: 1px 1px 1px 2px gray;
  gap: 5px;
  border-radius: 10px;
  padding: 10px;

  @media (max-width: 760px) {
   font-size: 13px;
  }
`;

export const TitleProject = styled.a`
  color: white !important;
  text-decoration: none !important;
`;

export const Url = styled.span``;

export const Created_at = styled.span``;