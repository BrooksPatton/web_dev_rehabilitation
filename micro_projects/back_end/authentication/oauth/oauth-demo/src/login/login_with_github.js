import React from "react";

function createRandomString(length = 24) {
  const UTFStart = 65;
  const UTFEnd = 126;
  const randomUTFCharacters = [];

  for (let count = 0; count < length; count += 1) {
    const randomUTFCharCode = Math.floor(
      Math.random() * (UTFEnd - UTFStart) + UTFStart
    );

    randomUTFCharacters.push(randomUTFCharCode);
  }

  return String.fromCharCode(...randomUTFCharacters);
}

function LoginWithGithub({ localStorageKey }) {
  const githubLoginBaseUrl = "https://github.com/login/oauth/authorize";
  const clientId = "60639b7db9d676427ea1";
  const redirectUri = "http://localhost:3000/auth/callback";
  const randomString = createRandomString();
  const githubLoginFullUrl = `${githubLoginBaseUrl}?client_id=${clientId}&redirect_uri=${redirectUri}&state=${randomString}`;

  window.localStorage.setItem(localStorageKey, randomString);

  return (
    <div>
      login with <a href={githubLoginFullUrl}>GitHub</a>
    </div>
  );
}

export default LoginWithGithub;
