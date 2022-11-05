import { useSelector } from 'react-redux';
import {
  HomePageSection,
  HomePageTittle,
  HomePageUserName,
} from './HomePage.styled';
const HomePage = () => {
  const userName = useSelector(state => state.auth.user.name);
  return (
    <HomePageSection>
      <HomePageTittle>Welcome to contacts!</HomePageTittle>
      <HomePageUserName>{userName}</HomePageUserName>
    </HomePageSection>
  );
};
export default HomePage;
