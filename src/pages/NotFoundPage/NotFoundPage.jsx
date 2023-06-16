import errorImage from '../../img/pageNotFound.png'


export default function NotFoundPage() {
  return (
    <main role="alert" >
      <img src={errorImage} width="650" alt="Error" />
      <h1 >Page not found 😨</h1>
    </main>
  );
}