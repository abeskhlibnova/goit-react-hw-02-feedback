import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-bottom: 25px;
`;
export const SectionBox = styled.div`
  width: 100%;
  border: 1px solid;
  border-radius: 10px;
  padding: 15px;
  margin-bottom: 20px;
`;
export const TitleBox = styled.h2`
  font-size: 32px;
  color: green;
  text-align: center;
  margin-bottom: 15px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Button = styled.button`
  width: 100px;
  font-size: 20px;
  background-color: #ccffcc;
  border: 1px solid #0c9415;
  border-radius: 5px;
  &:not(:last-child) {
    margin-right: 20px;
  }
`;
export const NotificationMessage = styled.p`
  text-align: center;
  font-size: 36px;
  font-weight: 700;
  color: #cb0000;
`;

export const StatisticList = styled.ul`
  list-style: none;
`;
export const StatisticItem = styled.li`
  font-size: 24px;
`;
