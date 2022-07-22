export default function Home(isLogin: any) {
  const loginCheck = isLogin.isLogin;
  return (
    <div className="home">
      <div className="home-article">
        {loginCheck ? null : (
          <p
            style={{
              marginBottom: "30px",
              color: "red",
            }}
          >
            * 로그인이 필요합니다 *
          </p>
        )}
        <h3>데이타뱅크 현장실습 페이지</h3>
        <p>Front - ReactJS</p>
        <p>Back - NestJS</p>
        <p>Database - MongoDB</p>
      </div>
    </div>
  );
}
