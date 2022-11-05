import { NotFoundPageSection, GoHomeButton } from './NotFoundPage.styled';
export default function NotFoundPage() {
  return (
    <NotFoundPageSection>
      <GoHomeButton to="/"> Go Home</GoHomeButton>
    </NotFoundPageSection>
  );
}
